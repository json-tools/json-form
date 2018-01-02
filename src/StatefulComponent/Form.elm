module StatefulComponent.Form exposing (Model, Msg, ExternalMsg(UpdateValue, SaveExpandedNodes), init, update, view, defaultOptions, FormOptions)

import Task
import Dom
import ErrorMessages exposing (stringifyError)
import Dict exposing (Dict)
import Ref
import Json.Decode as Decode exposing (Decoder, decodeValue)
import Json.Encode as Encode exposing (Value)
import JsonValue exposing (JsonValue(..), getIn)
import Json.Schema
import Json.Schema.Validation exposing (Error, ValidationError)
import Json.Schema.Definitions as Schema
    exposing
        ( Schemata(Schemata)
        , Type(SingleType)
        , SingleType(StringType, IntegerType)
        , Schema(ObjectSchema, BooleanSchema)
        , Items(NoItems, ItemDefinition, ArrayOfItems)
        , blankSchema
        , blankSubSchema
        )
import Element.Events as Events exposing (onInput, onClick, onFocus, onBlur)
import FeatherIcons as Icons
import Element.Attributes as Attributes
    exposing
        ( center
        , verticalCenter
        , vary
        , inlineStyle
        , spacing
        , padding
        , paddingTop
        , paddingLeft
        , height
        , minWidth
        , width
        , fill
        , px
        , percent
        , class
        , tabindex
        )
import Element exposing (Element, el, row, text, column, paragraph, empty)
import Styles
    exposing
        ( Styles
            ( None
            , Main
            , SourceCode
            , TextInput
            , InputRow
            , MenuItem
            , PropertyName
            , InlineError
            )
        , Variations(Active)
        , stylesheet
        )


type alias View =
    Element Styles Variations Msg


type alias Path =
    List String


type Msg
    = NoMsg
    | ValueInput Path String
    | StringInput Path String
    | NumericInput Path String
    | BoolInput Path Bool
    | DeletePath Path
    | AddItem Path
    | AddProperty Path
    | SetEditPropertyName String Path Int
    | EditPropertyName String
    | StopEditingPropertyName
    | ExpandNode Path
    | CollapseNode Path
    | OpenMenu Path
    | CloseMenu
    | FocusInput Path Schema
    | BlurInput Path


type ExternalMsg
    = NoOp
    | UpdateValue Value
    | SaveExpandedNodes (List Path)


type alias Model =
    { value : JsonValue
    , schema : Schema
    , validationErrors : Dict Path (List String)
    , options : FormOptions
    , menu : Maybe Path
    , focusInput : Path
    , editingNow : String
    , editingSchema : Maybe Schema
    , edited : Dict Path Bool
    , editPropPath : Path
    , editPropIndex : Maybe Int
    , editPropName : String
    }


type alias FormOptions =
    { expandedNodes : List Path
    , applyDefaults : Bool
    , showEmptyOptionalProps : Bool
    , showInitialValidationErrors : Bool
    }


defaultOptions : FormOptions
defaultOptions =
    { expandedNodes = [ [] ]
    , applyDefaults = False
    , showEmptyOptionalProps = False
    , showInitialValidationErrors = False
    }


dictFromListErrors : List Error -> Dict Path (List String)
dictFromListErrors list =
    list
        |> List.foldl
            (\error dict ->
                dict
                    |> Dict.update error.jsonPointer.path
                        (\listDetails ->
                            (case listDetails of
                                Just l ->
                                    l ++ [ error.details |> stringifyError ]

                                Nothing ->
                                    [ error.details |> stringifyError ]
                            )
                                |> Just
                        )
            )
            Dict.empty


init : Schema -> FormOptions -> Value -> Model
init schema formOptions v =
    let
        validationResult =
            Json.Schema.validateValue { applyDefaults = formOptions.applyDefaults } v schema

        ( value, validationErrors ) =
            case validationResult of
                Ok validValue ->
                    ( validValue, Dict.empty )

                Err list ->
                    ( v, list |> dictFromListErrors )

        blankModel =
            { schema = schema
            , value =
                value
                    |> decodeValue JsonValue.decoder
                    |> Result.withDefault JsonValue.NullValue
            , validationErrors = validationErrors
            , options = formOptions
            , menu = Nothing
            , focusInput = []
            , editingNow = ""
            , editingSchema = Nothing
            , edited = Dict.empty
            , editPropPath = []
            , editPropIndex = Nothing
            , editPropName = ""
            }
    in
        blankModel


update : Msg -> Model -> ( ( Model, Cmd Msg ), ExternalMsg )
update msg model =
    case msg of
        NoMsg ->
            model ! [] => NoOp

        ValueInput path str ->
            let
                updatedValue =
                    str
                        |> Decode.decodeString JsonValue.decoder
                        |> Result.andThen
                            (\v ->
                                model.value
                                    |> JsonValue.setIn path v
                                    --  TODO display setIn error
                                    |>
                                        Result.mapError (Debug.log "ValueInput.setIn")
                            )
                        --  TODO display parse error
                        |>
                            Result.mapError (Debug.log "ValueInput.parse")
                        |> Result.withDefault model.value

                encodedValue =
                    updatedValue |> JsonValue.encode

                validationResult =
                    Json.Schema.validateValue { applyDefaults = model.options.applyDefaults } encodedValue model.schema

                ( value, validationErrors ) =
                    case validationResult of
                        Ok validValue ->
                            ( validValue |> decodeValue JsonValue.decoder |> Result.withDefault NullValue, Dict.empty )

                        Err list ->
                            ( updatedValue, list |> dictFromListErrors )
            in
                { model
                    | value = updatedValue
                    , editingNow = str
                    , validationErrors = validationErrors
                    , edited = model.edited |> Dict.insert path True
                }
                    ! []
                    => UpdateValue (value |> JsonValue.encode)

        StringInput path str ->
            let
                updatedValue =
                    model.value
                        |> JsonValue.setIn path (JsonValue.StringValue str)
                        |> Result.mapError (Debug.log "StringInput")
                        |> Result.withDefault model.value

                encodedValue =
                    updatedValue |> JsonValue.encode

                validationResult =
                    Json.Schema.validateValue { applyDefaults = model.options.applyDefaults } encodedValue model.schema

                ( value, validationErrors ) =
                    case validationResult of
                        Ok validValue ->
                            ( validValue |> decodeValue JsonValue.decoder |> Result.withDefault NullValue, Dict.empty )

                        Err list ->
                            ( updatedValue, list |> dictFromListErrors )
            in
                { model
                    | value = updatedValue
                    , editingNow = str
                    , validationErrors = validationErrors
                    , edited = model.edited |> Dict.insert path True
                }
                    ! []
                    => UpdateValue (value |> JsonValue.encode)

        NumericInput path str ->
            let
                updatedValue =
                    str
                        |> String.toFloat
                        |> Result.andThen (\v -> JsonValue.setIn path (NumericValue v) model.value)
                        |> Result.mapError (Debug.log "NumericInput")
                        |> Result.withDefault model.value

                encodedValue =
                    updatedValue |> JsonValue.encode

                validationResult =
                    Json.Schema.validateValue { applyDefaults = model.options.applyDefaults } encodedValue model.schema

                ( value, validationErrors ) =
                    case validationResult of
                        Ok validValue ->
                            ( validValue |> decodeValue JsonValue.decoder |> Result.withDefault NullValue, Dict.empty )

                        Err list ->
                            ( updatedValue, list |> dictFromListErrors )
            in
                { model
                    | value = value
                    , editingNow = str
                    , validationErrors = validationErrors
                    , edited = model.edited |> Dict.insert path True
                }
                    ! []
                    => UpdateValue (value |> JsonValue.encode)

        BoolInput path bool ->
            let
                updatedValue =
                    model.value
                        |> JsonValue.setIn path (BoolValue bool)
                        |> Result.mapError (Debug.log "BoolInput")
                        |> Result.withDefault model.value
            in
                { model | value = updatedValue }
                    ! []
                    => UpdateValue (updatedValue |> JsonValue.encode)

        DeletePath path ->
            let
                value =
                    model.value
                        |> JsonValue.deleteIn path
                        |> Result.mapError (Debug.log "DeletePath")
                        |> Result.withDefault model.value
            in
                { model | value = value } ! [] => UpdateValue (value |> JsonValue.encode)

        AddItem path ->
            let
                nextIndex =
                    model.value
                        |> JsonValue.getIn path
                        |> Result.withDefault (ArrayValue [])
                        |> (\x ->
                                case x of
                                    ArrayValue l ->
                                        List.length l |> toString

                                    _ ->
                                        "0"
                           )

                itemPath =
                    path ++ [ nextIndex ]

                value =
                    model.value
                        |> JsonValue.setIn itemPath NullValue
                        |> Result.mapError (Debug.log "AddItem")
                        |> Result.withDefault model.value
            in
                { model | value = value } ! [ makeId itemPath |> Dom.focus |> Task.attempt (\_ -> NoMsg) ] => UpdateValue (value |> JsonValue.encode)

        AddProperty path ->
            let
                nextIndex =
                    model.value
                        |> JsonValue.getIn path
                        |> Result.withDefault (ArrayValue [])
                        |> (\x ->
                                case x of
                                    ObjectValue l ->
                                        List.length l

                                    _ ->
                                        0
                           )

                propPath =
                    path ++ [ "" ]

                value =
                    model.value
                        |> JsonValue.setIn propPath NullValue
                        |> Result.mapError (Debug.log "AddItem")
                        |> Result.withDefault model.value
            in
                { model
                    | value = value
                    , editPropPath = path
                    , editPropIndex = Just nextIndex |> Debug.log "prop index"
                    , editPropName = ""
                }
                    ! []
                    => NoOp

        SetEditPropertyName propName path index ->
            { model
                | editPropPath = path
                , editPropIndex = Just index
                , editPropName = propName
            }
                ! []
                => NoOp

        EditPropertyName str ->
            { model | editPropName = str } ! [] => NoOp

        StopEditingPropertyName ->
            let
                updatedValue =
                    model.value
                        |> JsonValue.setPropertyName
                            ( model.editPropPath
                            , model.editPropIndex |> Maybe.withDefault 0
                            )
                            model.editPropName
                        |> Result.withDefault model.value
            in
                { model
                    | editPropPath = []
                    , editPropIndex = Nothing
                    , value = updatedValue
                }
                    ! []
                    => UpdateValue (updatedValue |> JsonValue.encode)

        ExpandNode path ->
            let
                options =
                    model.options

                en =
                    path :: options.expandedNodes
            in
                { model | options = { options | expandedNodes = en } } ! [] => SaveExpandedNodes en

        CollapseNode path ->
            let
                options =
                    model.options

                en =
                    options.expandedNodes
                        |> List.filter ((/=) path)
            in
                { model | options = { options | expandedNodes = en } } ! [] => SaveExpandedNodes en

        OpenMenu path ->
            { model | menu = Just path } ! [] => NoOp

        CloseMenu ->
            { model | menu = Nothing } ! [] => NoOp

        FocusInput path schema ->
            { model
                | focusInput = path
                , editingSchema = Just schema
                , editingNow =
                    case model.value |> getIn path of
                        Ok (StringValue s) ->
                            s

                        Ok (NumericValue s) ->
                            s |> toString

                        _ ->
                            ""
            }
                ! []
                => NoOp

        BlurInput path ->
            if path == model.focusInput then
                { model
                    | focusInput = []
                    , editingSchema = Nothing
                    , edited = model.edited |> Dict.insert path True
                }
                    ! []
                    => NoOp
            else
                model ! [] => NoOp


view : Model -> View
view model =
    el None [ inlineStyle [ ( "font-family", "Menlo, monospace" ), ( "font-size", "12px" ), ( "line-height", "1.4" ) ], width <| percent 90 ] <|
        viewValue model model.schema model.value []


delete : Path -> View
delete path =
    Icons.xCircle
        |> Icons.withStrokeWidth 2
        |> Icons.withSize 18
        |> Icons.toHtml []
        |> Element.html
        |> el None
            [ onClick <| DeletePath path
            , width <| px 18
            , height <| px 18
            , class "action"
            , inlineStyle [ ( "cursor", "pointer" ) ]
            ]


isBlankSchema : Schema -> Bool
isBlankSchema =
    Schema.encode >> (Encode.encode 0) >> ((==) "{}")


pickOneOf : List Schema -> Value -> Schema
pickOneOf listSchemas value =
    let
        defaultResult =
            listSchemas
                |> List.head
                |> Maybe.withDefault blankSchema

        isValid s =
            Json.Schema.validateValue { applyDefaults = True } value s
                |> Result.toMaybe
                |> (/=) Nothing
    in
        listSchemas
            |> List.filter isValid
            |> List.head
            |> Maybe.withDefault defaultResult


resolve : Schema -> Schema -> Schema
resolve rootSchema rawSubSchema =
    let
        ( _, resolvedSchema ) =
            (case rawSubSchema of
                ObjectSchema os ->
                    os.ref
                        |> Maybe.andThen (Ref.resolveReference "" Ref.defaultPool rootSchema)
                        |> Maybe.withDefault (( "", rawSubSchema ))

                _ ->
                    ( "", rawSubSchema )
            )
    in
        resolvedSchema


viewProperty : Model -> Bool -> Maybe Int -> Path -> String -> Schema -> JsonValue -> View
viewProperty model deletionAllowed indexInObject path key rawSubSchema value =
    let
        deeperLevelPath =
            path ++ [ key ]

        subSchema =
            case resolve model.schema rawSubSchema of
                ObjectSchema os ->
                    case os.anyOf of
                        Just schemas ->
                            value
                                |> JsonValue.encode
                                |> pickOneOf schemas
                                |> resolve model.schema

                        Nothing ->
                            ObjectSchema os

                x ->
                    x

        ( objectSchema, isArray, isDictionary ) =
            case subSchema of
                ObjectSchema os ->
                    ( Just os
                    , os.items /= NoItems
                    , case os.additionalProperties of
                        Just (BooleanSchema False) ->
                            False

                        _ ->
                            case value of
                                ObjectValue _ ->
                                    True

                                _ ->
                                    False
                    )

                _ ->
                    ( Nothing, False, False )

        isBlank =
            isBlankSchema subSchema

        isExpandable =
            case value of
                JsonValue.ObjectValue _ ->
                    isBlank |> not

                JsonValue.ArrayValue _ ->
                    isBlank |> not

                {-
                   isBlank
                       |> not
                       |> Debug.log (toString deeperLevelPath)
                -}
                _ ->
                    False

        isExpanded =
            case value of
                JsonValue.ObjectValue _ ->
                    isBlank
                        || List.member
                            deeperLevelPath
                            model.options.expandedNodes

                JsonValue.ArrayValue _ ->
                    isBlank
                        || List.member
                            deeperLevelPath
                            model.options.expandedNodes

                --List.member deeperLevelPath model.expandedNodes
                _ ->
                    True
    in
        column None
            [ paddingTop 10 ]
            [ row None
                [ verticalCenter, spacing 5, class "key-container" ]
                [ (if isExpandable then
                    (if isExpanded then
                        Icons.chevronDown
                     else
                        Icons.chevronRight
                    )
                        |> Icons.withSize 18
                        |> Icons.withStrokeWidth 2
                        |> Icons.toHtml []
                        |> Element.html
                        |> el None
                            [ width <| px 18
                            , height <| px 18
                            , inlineStyle [ ( "cursor", "pointer" ) ]
                            , if isExpanded then
                                onClick <| CollapseNode deeperLevelPath
                              else
                                onClick <| ExpandNode deeperLevelPath
                            ]
                   else
                    Icons.chevronDown
                        |> Icons.withSize 18
                        |> Icons.withStrokeWidth 2
                        |> Icons.toHtml []
                        |> Element.html
                        |> el None
                            [ width <| px 18
                            , height <| px 18
                            , inlineStyle [ ( "color", "lightgrey" ) ]
                            ]
                  )
                , if indexInObject /= Nothing && indexInObject == model.editPropIndex && path == model.editPropPath then
                    row InputRow
                        [ vary Active True ]
                        [ model.editPropName
                            |> Element.inputText TextInput
                                [ Attributes.autofocus True
                                , onInput EditPropertyName
                                , onBlur <| StopEditingPropertyName
                                ]
                        ]
                  else
                    key
                        |> text
                        |> el PropertyName
                            [ vary Active <| deeperLevelPath == model.focusInput
                            ]
                  {-
                     , objectSchema
                         |> Maybe.andThen .title
                         |> Maybe.withDefault key
                         |> text
                  -}
                , Icons.moreVertical
                    |> Icons.withSize 18
                    |> Icons.withStrokeWidth 2
                    |> Icons.toHtml []
                    |> Element.html
                    |> el None
                        [ class "action"
                        , inlineStyle [ ( "cursor", "pointer" ), ( "outline", "none" ) ]
                        , width <| px 18
                        , height <| px 18
                        , tabindex 2
                        , onFocus <| OpenMenu deeperLevelPath
                        , onBlur <| CloseMenu
                        ]
                    |> Element.below
                        [ if Just deeperLevelPath == model.menu then
                            [ text "Edit as JSON" |> el MenuItem []
                            , case indexInObject of
                                Just index ->
                                    text "Edit property name"
                                        |> el MenuItem
                                            [ onClick <| SetEditPropertyName key path index
                                            ]

                                _ ->
                                    empty
                            , if isArray then
                                text "Add item" |> el MenuItem [ onClick <| AddItem deeperLevelPath ]
                              else if isDictionary then
                                text "Add property" |> el MenuItem [ onClick <| AddProperty deeperLevelPath ]
                              else
                                empty
                            ]
                                |> column None
                                    [ inlineStyle
                                        [ ( "z-index", "2" )
                                        , ( "background", "white" )
                                        , ( "min-width", "200px" )
                                        , ( "border-radius", "2px" )
                                        , ( "box-shadow", "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)" )
                                        ]
                                    , padding 2
                                    ]
                          else
                            empty
                        ]
                , if deletionAllowed then
                    delete deeperLevelPath
                  else
                    empty
                ]
              --, displayDescription subSchema
            , if isExpanded then
                row None
                    []
                    [ viewValue model subSchema value deeperLevelPath
                    ]
              else
                empty
            ]


viewObject : Model -> Schema -> List ( String, JsonValue ) -> Bool -> Path -> List View
viewObject model schema props isArray path =
    let
        isOptional key required =
            case required of
                Just list ->
                    List.member key list |> not

                Nothing ->
                    True

        shouldRenderDefault required propName =
            if model.options.showEmptyOptionalProps then
                True
            else
                (case required of
                    Just names ->
                        List.member propName names

                    Nothing ->
                        False
                )

        iterateOverSchemata propsDict required (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        case propsDict |> Dict.get propName of
                            Just value ->
                                viewProperty model (isOptional propName required && (not model.options.showEmptyOptionalProps)) Nothing path propName subSchema value

                            Nothing ->
                                if shouldRenderDefault required propName then
                                    viewProperty model (isOptional propName required && (not model.options.showEmptyOptionalProps)) Nothing path propName subSchema JsonValue.NullValue
                                else
                                    empty
                    )

        iterateOverProps isObject list schema =
            list
                |> List.indexedMap
                    (\index ( key, value ) ->
                        viewProperty model
                            True
                            (if isObject then
                                Just index
                             else
                                Nothing
                            )
                            path
                            key
                            schema
                            value
                    )
    in
        case schema of
            BooleanSchema True ->
                iterateOverProps True props blankSchema

            BooleanSchema False ->
                iterateOverProps True props disallowEverythingSchema

            ObjectSchema os ->
                let
                    knownProperties =
                        case os.properties of
                            Just (Schemata x) ->
                                x
                                    |> List.map (\( key, _ ) -> key)

                            _ ->
                                []

                    extraProps =
                        props
                            |> List.filter
                                (\( name, _ ) ->
                                    List.member name knownProperties |> not
                                )
                in
                    if isBlankSchema schema then
                        [ (ObjectValue props)
                            |> JsonValue.encode
                            |> Encode.encode 4
                            |> text
                            |> el SourceCode [ paddingLeft 10 ]
                        ]
                    else
                        (if isArray then
                            case os.items of
                                NoItems ->
                                    iterateOverProps False props blankSchema

                                ItemDefinition s ->
                                    iterateOverProps False props s

                                -- TODO: hande arrayOfItems
                                _ ->
                                    iterateOverProps False props disallowEverythingSchema
                         else
                            [ os.properties
                                |> Maybe.map (iterateOverSchemata (Dict.fromList props) os.required)
                                |> Maybe.withDefault []
                            , case os.additionalProperties of
                                Just (ObjectSchema os) ->
                                    iterateOverProps True extraProps (ObjectSchema os)

                                Just (BooleanSchema False) ->
                                    iterateOverProps True extraProps disallowEverythingSchema

                                _ ->
                                    iterateOverProps True extraProps blankSchema
                            ]
                                |> List.concat
                        )


disallowEverythingSchema : Schema
disallowEverythingSchema =
    ObjectSchema { blankSubSchema | not = Just blankSchema }


displayDescription : Schema -> View
displayDescription schema =
    case schema of
        ObjectSchema os ->
            os.description
                |> Maybe.map text
                |> Maybe.map (el None [])
                |> Maybe.withDefault empty

        _ ->
            empty


makeId : Path -> String
makeId path =
    String.join "/" path ++ ":value"


viewNumber : Model -> Schema -> Maybe Float -> Path -> View
viewNumber model schema numValue path =
    let
        isFocused =
            path == model.focusInput
    in
        row
            InputRow
            [ vary Active isFocused ]
            [ (if isFocused then
                model.editingNow
               else
                numValue |> Maybe.map toString |> Maybe.withDefault ""
              )
                |> Element.inputText TextInput
                    [ onInput <| NumericInput path
                    , onFocus <| FocusInput path schema
                    , onBlur <| BlurInput path
                    , Attributes.type_ "number"
                      --, Attributes.step "1"
                    , width <| fill 1
                    , Attributes.id <| makeId path
                    ]
            ]


viewBool : Model -> Schema -> Bool -> Path -> View
viewBool model schema boolValue path =
    let
        ( icon, label, color ) =
            if boolValue then
                ( Icons.toggleRight, "true", "darkgreen" )
            else
                ( Icons.toggleLeft, "false", "darkred" )
    in
        row None
            [ onClick <| BoolInput path <| not boolValue
            , verticalCenter
            , spacing 5
            , inlineStyle [ ( "cursor", "pointer" ), ( "color", color ) ]
            ]
            [ icon
                |> Icons.withSize 18
                |> Icons.toHtml []
                |> Element.html
                |> el None
                    [ width <| px 18, height <| px 18 ]
            , label |> text
            ]


viewString : Model -> Schema -> String -> Path -> View
viewString model schema stringValue path =
    let
        listId =
            String.join "/" path ++ ":list"

        isFocused =
            path == model.focusInput
    in
        if isBlankSchema schema then
            row
                InputRow
                [ vary Active isFocused ]
                [ stringValue
                    |> toString
                    |> Element.textArea TextInput
                        [ onInput <| ValueInput path
                        , onFocus <| FocusInput path schema
                        , onBlur <| BlurInput path
                        , width <| fill 1
                        , Attributes.id <| makeId path
                        ]
                ]
        else
            row
                InputRow
                [ vary Active isFocused ]
                [ (if isFocused then
                    model.editingNow
                   else
                    stringValue
                  )
                    |> Element.inputText TextInput
                        [ onFocus <| FocusInput path schema
                        , onBlur <| BlurInput path
                        , onInput <| StringInput path
                        , Attributes.list listId
                        , width <| fill 1
                        , Attributes.id <| makeId path
                        , Attributes.autocomplete False
                        ]
                , case schema of
                    ObjectSchema os ->
                        os.enum
                            |> Maybe.map
                                (\enum ->
                                    enum
                                        |> List.map
                                            (\v ->
                                                let
                                                    strValue =
                                                        v |> decodeValue Decode.string |> Result.withDefault ""
                                                in
                                                    Element.node "option" <| text strValue
                                            )
                                        |> row None [ inlineStyle [ ( "display", "none" ) ], Attributes.id listId ]
                                        |> Element.node "datalist"
                                )
                            |> Maybe.withDefault empty

                    _ ->
                        empty
                ]


viewValue : Model -> Schema -> JsonValue -> Path -> View
viewValue model schema value path =
    (case value of
        JsonValue.ObjectValue ov ->
            viewObject model schema ov False path

        JsonValue.ArrayValue av ->
            viewObject model schema (av |> List.indexedMap (\index val -> ( toString index, val ))) True path

        JsonValue.StringValue sv ->
            [ viewString model schema sv path ]

        JsonValue.NumericValue nv ->
            [ viewNumber model schema (Just nv) path ]

        JsonValue.BoolValue bv ->
            [ viewBool model schema bv path ]

        JsonValue.NullValue ->
            case schema of
                ObjectSchema os ->
                    case os.type_ of
                        SingleType StringType ->
                            [ viewString model schema "" path ]

                        SingleType IntegerType ->
                            [ viewNumber model schema Nothing path ]

                        _ ->
                            [ row InputRow
                                [ vary Active <| model.focusInput == path ]
                                [ "null"
                                    |> Element.textArea TextInput
                                        [ onInput <| ValueInput path
                                        , width <| fill 1
                                        , onFocus <| FocusInput path schema
                                        , onBlur <| BlurInput path
                                        ]
                                ]
                            ]

                _ ->
                    [ row InputRow
                        [ vary Active <| model.focusInput == path ]
                        [ "null"
                            |> Element.textArea TextInput
                                [ onInput <| ValueInput path
                                , width <| fill 1
                                , onFocus <| FocusInput path schema
                                , onBlur <| BlurInput path
                                ]
                        ]
                    ]
    )
        |> (\col ->
                model.validationErrors
                    |> Dict.get path
                    |> Maybe.map
                        (\errors ->
                            if model.options.showInitialValidationErrors || (model.edited |> Dict.member path) then
                                col ++ (errors |> List.filter ((/=) "") |> List.map (text >> (el InlineError [])))
                            else
                                col
                        )
                    |> Maybe.withDefault col
           )
        |> column None [ paddingLeft 20, spacing 0, width <| fill 1 ]


(=>) : a -> b -> ( a, b )
(=>) a b =
    ( a, b )

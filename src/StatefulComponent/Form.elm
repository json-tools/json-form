module StatefulComponent.Form exposing (Model, Msg, ExternalMsg(UpdateValue, SaveExpandedNodes), init, update, view)

import Dict
import Ref
import Json.Decode as Decode exposing (Decoder, decodeValue)
import Json.Encode as Encode exposing (Value)
import JsonValue exposing (JsonValue(..))
import Json.Schema
import Json.Schema.Definitions as Schema
    exposing
        ( Schemata(Schemata)
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
            , MenuItem
            )
        , Variations
        , stylesheet
        )


type alias View =
    Element Styles Variations Msg


type alias Path =
    List String


type Msg
    = ValueInput Path String
    | StringInput Path String
    | DeletePath Path
    | ExpandNode Path
    | CollapseNode Path
    | OpenMenu Path
    | CloseMenu


type ExternalMsg
    = NoOp
    | UpdateValue Value
    | SaveExpandedNodes (List Path)


type alias Model =
    { value : JsonValue
    , schema : Schema
    , expandedNodes : List Path
    , menu : Maybe Path
    }


init : Schema -> List Path -> Value -> Model
init schema expandedNodes v =
    let
        validatedValue =
            Json.Schema.validateValue { applyDefaults = True } v schema
                |> Result.mapError (Debug.log "smth is not right")
                |> Result.withDefault v

        blankModel =
            { schema = schema
            , value =
                validatedValue
                    |> decodeValue JsonValue.decoder
                    |> Result.withDefault JsonValue.NullValue
            , expandedNodes = expandedNodes
            , menu = Nothing
            }
    in
        blankModel


update : Msg -> Model -> ( ( Model, Cmd Msg ), ExternalMsg )
update msg model =
    case msg of
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
                        --  TODO display validation error
                        |>
                            Result.withDefault model.value
            in
                { model | value = updatedValue }
                    ! []
                    => UpdateValue (updatedValue |> JsonValue.encode)

        StringInput path str ->
            let
                updatedValue =
                    model.value
                        |> JsonValue.setIn path (JsonValue.StringValue str)
                        |> Result.mapError (Debug.log "StringInput")
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

        ExpandNode path ->
            let
                en =
                    path :: model.expandedNodes
            in
                { model | expandedNodes = en } ! [] => SaveExpandedNodes en

        CollapseNode path ->
            let
                en =
                    model.expandedNodes
                        |> List.filter ((/=) path)
            in
                { model | expandedNodes = en } ! [] => SaveExpandedNodes en

        OpenMenu path ->
            { model | menu = Just path } ! [] => NoOp

        CloseMenu ->
            { model | menu = Nothing } ! [] => NoOp


view : Model -> View
view model =
    el None [ inlineStyle [ ( "font-family", "Menlo, monospace" ), ( "font-size", "12px" ), ( "line-height", "1.4" ) ], width <| percent 90 ] <|
        viewValue model model.schema model.value []


delete : Path -> View
delete path =
    Icons.xCircle
        |> Icons.withStrokeWidth 1
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


viewProperty : Model -> Path -> String -> Schema -> JsonValue -> View
viewProperty model path key rawSubSchema value =
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
                            model.expandedNodes

                JsonValue.ArrayValue _ ->
                    isBlank
                        || List.member
                            deeperLevelPath
                            model.expandedNodes

                --List.member deeperLevelPath model.expandedNodes
                _ ->
                    True
    in
        column None
            [ spacing 10 ]
            [ row None
                [ verticalCenter, spacing 5, class "key-container" ]
                [ (if isExpandable then
                    (if isExpanded then
                        Icons.chevronDown
                     else
                        Icons.chevronRight
                    )
                        |> Icons.withSize 18
                        |> Icons.withStrokeWidth 1
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
                        |> Icons.withStrokeWidth 1
                        |> Icons.toHtml []
                        |> Element.html
                        |> el None
                            [ width <| px 18
                            , height <| px 18
                            , inlineStyle [ ( "color", "lightgrey" ) ]
                            ]
                  )
                , text key
                , Icons.moreVertical
                    |> Icons.withSize 18
                    |> Icons.withStrokeWidth 1
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
                            , text "Add property" |> el MenuItem []
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
                , delete deeperLevelPath
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
        iterateOverSchemata propsDict required (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        propsDict
                            |> Dict.get propName
                            |> Maybe.map (viewProperty model path propName subSchema)
                            |> Maybe.withDefault
                                (case required of
                                    Just names ->
                                        if List.member propName names then
                                            viewProperty model path propName subSchema JsonValue.NullValue
                                        else
                                            empty

                                    Nothing ->
                                        empty
                                )
                    )

        iterateOverProps list schema =
            list
                |> List.map (\( key, value ) -> viewProperty model path key schema value)
    in
        case schema of
            BooleanSchema True ->
                iterateOverProps props blankSchema

            BooleanSchema False ->
                iterateOverProps props disallowEverythingSchema

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
                                    iterateOverProps props blankSchema

                                ItemDefinition s ->
                                    iterateOverProps props s

                                -- TODO: hande arrayOfItems
                                _ ->
                                    iterateOverProps props disallowEverythingSchema
                         else
                            [ os.properties
                                |> Maybe.map (iterateOverSchemata (Dict.fromList props) os.required)
                                |> Maybe.withDefault []
                            , case os.additionalProperties of
                                Just (ObjectSchema os) ->
                                    iterateOverProps extraProps (ObjectSchema os)

                                Just (BooleanSchema False) ->
                                    iterateOverProps extraProps disallowEverythingSchema

                                _ ->
                                    iterateOverProps extraProps blankSchema
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


viewString : Model -> Schema -> String -> Path -> View
viewString model schema stringValue path =
    let
        listId =
            String.join "/" path
    in
        if isBlankSchema schema then
            row None
                []
                [ stringValue
                    |> toString
                    |> Element.textArea TextInput [ onInput <| ValueInput path, width <| fill 1 ]
                ]
        else
            row None
                []
                [ stringValue
                    |> Element.inputText TextInput [ onInput <| StringInput path, Attributes.list listId, width <| fill 1 ]
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

        x ->
            [ text ("something else (" ++ (toString x) ++ ")") ]
    )
        |> column None [ paddingLeft 20, spacing 10, width <| fill 1 ]


(=>) : a -> b -> ( a, b )
(=>) a b =
    ( a, b )

module StatefulComponent.Form exposing (Model, Msg, init, update, view)

import Ports exposing (save)
import Dict
import Ref
import Json.Decode as Decode exposing (decodeValue)
import Json.Encode as Encode exposing (Value)
import JsonValue exposing (JsonValue(..))
import Json.Schema.Definitions as Schema
    exposing
        ( Schemata(Schemata)
        , Schema(ObjectSchema, BooleanSchema)
        , Items(NoItems, ItemDefinition, ArrayOfItems)
        , blankSchema
        , blankSubSchema
        )
import Element.Events as Events exposing (onInput, onClick)
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
        )
import Element exposing (Element, el, row, text, column, paragraph, empty)
import Styles
    exposing
        ( Styles
            ( None
            , Main
            , SourceCode
            , TextInput
            )
        , Variations
        , stylesheet
        )


type alias View =
    Element Styles Variations Msg


type alias Path =
    List String


type Msg
    = NoOp
    | ValueInput Path String
    | StringInput Path String
    | DeletePath Path
    | ExpandNode Path
    | CollapseNode Path


type alias Model =
    { value : JsonValue
    , schema : Schema
    , expandedNodes : List (List String)
    }


init : Schema -> Value -> Model
init schema value =
    { value =
        value
            -- |> Debug.log "incoming value"
            |>
                decodeValue JsonValue.decoder
            |> Result.withDefault JsonValue.NullValue
    , schema = schema
    , expandedNodes = [ [] ]
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []

        ValueInput path str ->
            { model
                | value =
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
            }
                ! []

        StringInput path str ->
            { model
                | value =
                    model.value
                        |> JsonValue.setIn path (JsonValue.StringValue str)
                        |> Result.mapError (Debug.log "StringInput")
                        |> Result.withDefault model.value
            }
                ! []

        DeletePath path ->
            let
                value =
                    model.value
                        |> JsonValue.deleteIn path
                        |> Result.mapError (Debug.log "DeletePath")
                        |> Result.withDefault model.value
            in
                { model | value = value } ! [ value |> JsonValue.encode |> save ]

        ExpandNode path ->
            { model | expandedNodes = path :: model.expandedNodes } ! []

        CollapseNode path ->
            { model
                | expandedNodes =
                    model.expandedNodes
                        |> List.filter ((/=) path)
            }
                ! []


view : Model -> View
view model =
    el None [ inlineStyle [ ( "font-family", "Menlo, monospace" ), ( "font-size", "12px" ), ( "line-height", "1.4" ) ], width <| percent 50 ] <|
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
            ]


isBlankSchema : Schema -> Bool
isBlankSchema =
    Schema.encode >> (Encode.encode 0) >> ((==) "{}")


viewObject : Model -> Schema -> List ( String, JsonValue ) -> Bool -> Path -> List View
viewObject model schema props isArray path =
    let
        viewProperty key rawSubSchema value =
            let
                deeperLevelPath =
                    path ++ [ key ]

                ( _, subSchema ) =
                    case rawSubSchema of
                        ObjectSchema os ->
                            os.ref
                                |> Maybe.andThen (Ref.resolveReference "" Ref.defaultPool model.schema)
                                |> Maybe.withDefault (( "", rawSubSchema ))

                        _ ->
                            ( "", rawSubSchema )

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
                    []
                    [ row None
                        [ verticalCenter, spacing 5 ]
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

        iterateOverSchemata propsDict required (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        propsDict
                            |> Dict.get propName
                            |> Maybe.map (viewProperty propName subSchema)
                            |> Maybe.withDefault
                                (case required of
                                    Just names ->
                                        if List.member propName names then
                                            viewProperty propName subSchema JsonValue.NullValue
                                        else
                                            empty

                                    Nothing ->
                                        empty
                                )
                    )

        iterateOverProps list schema =
            list
                |> List.map (\( key, value ) -> viewProperty key schema value)
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
                |> Element.inputText TextInput [ onInput <| StringInput path, width <| fill 1 ]
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

        _ ->
            [ text "something else" ]
    )
        |> column None [ paddingLeft 20, spacing 5, width <| fill 1 ]

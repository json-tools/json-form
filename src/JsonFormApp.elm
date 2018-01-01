module JsonFormApp exposing (main)

import Dict exposing (Dict)
import Ports exposing (expandedNodes)
import Html exposing (Html, programWithFlags)
import Json.Encode as Encode exposing (Value)
import Json.Decode as Decode exposing (Decoder, decodeValue)
import Json.Schemata as Schemata
import Json.Schema.Definitions exposing (Schema)
import Element exposing (Element, el, row, text, column, paragraph, empty)
import Element.Attributes exposing (width, height, percent, fill)
import Styles
    exposing
        ( Styles
            ( None
            , Main
            , SourceCode
            )
        , Variations
        , stylesheet
        )
import StatefulComponent.Form as Form exposing (ExternalMsg(UpdateValue, SaveExpandedNodes))


type alias View =
    Element Styles Variations Msg


type Msg
    = SchemaFormMsg Form.Msg
    | ValueFormMsg Form.Msg


type alias Model =
    { schemaForm : Form.Model
    , schema : Maybe Schema
    , valueForm : Maybe Form.Model
    , value : Maybe Value
    , expandedNodes : Dict String (List Path)
    }


defaultValue : Value
defaultValue =
    Encode.object [ ( "hello", Encode.string "mr" ), ( "world", Encode.string "mr" ) ]


type alias SessionData =
    { value : Value
    , expandedNodes : Dict String (List Path)
    }


type alias Path =
    List String


sessionDataDecoder : Decoder SessionData
sessionDataDecoder =
    Decode.map2 SessionData
        (Decode.field "value" Decode.value)
        (Decode.field "expandedNodes" (Decode.keyValuePairs (Decode.list (Decode.list Decode.string)) |> Decode.map Dict.fromList))


getExpandedNodes : String -> Dict String (List Path) -> List Path
getExpandedNodes name storage =
    storage
        |> Dict.get name
        |> Maybe.withDefault [ [] ]


init : Value -> ( Model, Cmd Msg )
init v =
    v
        |> decodeValue sessionDataDecoder
        |> Result.mapError (Debug.log "hello")
        |> Result.withDefault { value = Encode.null, expandedNodes = Dict.empty }
        |> \{ value, expandedNodes } ->
            { schemaForm = Form.init Schemata.draft6 (getExpandedNodes "schema" expandedNodes) value
            , expandedNodes = expandedNodes
            , schema =
                value
                    |> decodeValue Json.Schema.Definitions.decoder
                    |> Result.toMaybe
            , valueForm =
                value
                    |> decodeValue Json.Schema.Definitions.decoder
                    |> Result.mapError (Debug.log "LoadingSchemaError")
                    |> Result.toMaybe
                    |> Maybe.map (\s -> Form.init s (getExpandedNodes "value" expandedNodes) defaultValue)
            , value = Just defaultValue
            }
                ! []


view : Model -> Html Msg
view model =
    Element.viewport stylesheet <|
        row Main
            [ width <| fill 1, height <| fill 1 ]
            [ model.schemaForm
                |> Form.view
                |> Element.map SchemaFormMsg
                |> el None [ width <| percent 50 ]
            , model.valueForm
                |> Maybe.map Form.view
                |> Maybe.withDefault empty
                |> Element.map ValueFormMsg
                |> el None [ width <| percent 50 ]
            ]


xx : String -> ExternalMsg -> Cmd Msg
xx name msg =
    case msg of
        SaveExpandedNodes en ->
            expandedNodes ( name, en )

        _ ->
            Cmd.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SchemaFormMsg m ->
            let
                ( ( fm, fc ), exMsg ) =
                    Form.update m model.schemaForm

                ( schema, valueForm ) =
                    case exMsg of
                        UpdateValue v ->
                            let
                                maybeSchema =
                                    v
                                        |> decodeValue Json.Schema.Definitions.decoder
                                        |> Result.toMaybe
                            in
                                ( maybeSchema
                                , maybeSchema
                                    |> Maybe.map
                                        (\s ->
                                            Form.init s (getExpandedNodes "value" model.expandedNodes) (model.value |> Maybe.withDefault Encode.null)
                                        )
                                )

                        _ ->
                            ( model.schema, model.valueForm )
            in
                { model
                    | schemaForm = fm
                    , schema = schema
                    , valueForm = valueForm
                }
                    ! [ fc |> Cmd.map SchemaFormMsg, xx "schema" exMsg ]

        ValueFormMsg m ->
            case model.valueForm of
                Nothing ->
                    model ! []

                Just valueForm ->
                    let
                        ( ( fm, fc ), exMsg ) =
                            Form.update m valueForm

                        value =
                            case exMsg of
                                UpdateValue v ->
                                    Just v

                                _ ->
                                    model.value
                    in
                        { model
                            | valueForm = Just fm
                            , value = value
                        }
                            ! [ fc |> Cmd.map ValueFormMsg, xx "value" exMsg ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Value Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

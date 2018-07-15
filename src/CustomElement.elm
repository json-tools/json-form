port module CustomElement exposing (init, update, view, subscriptions)

import Html exposing (Html, div, text, h3)


--import Html.Attributes exposing (class, classList)
--import Html.Events exposing (onClick)

import Json.Decode exposing (Value, decodeValue)
import Json.Encode as Encode
import JsonValue exposing (decoder)
import Json.Form
import Json.Schema.Definitions


type alias Model =
    { form : Json.Form.Model
    , schema : Json.Schema.Definitions.Schema
    , editedValue : Maybe JsonValue.JsonValue
    }


init : Value -> ( Model, Cmd Msg )
init v =
    let
        schema =
            v
                |> decodeValue (Json.Decode.at [ "schema" ] Json.Schema.Definitions.decoder)
                |> Result.mapError Debug.log
                |> Result.withDefault Json.Schema.Definitions.blankSchema

        value =
            v
                |> decodeValue (Json.Decode.at [ "value" ] JsonValue.decoder)
                |> Result.toMaybe
    in
        { form = Json.Form.init schema value
        , editedValue = value
        , schema = schema
        }
            ! []


type Msg
    = JsonFormMsg Json.Form.Msg
    | ChangeValue Value
    | ChangeSchema Value


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        ChangeSchema v ->
            let
                schema =
                    v
                        |> decodeValue Json.Schema.Definitions.decoder
                        |> Result.withDefault Json.Schema.Definitions.blankSchema
            in
                { model
                    | schema = schema
                    , form = Json.Form.init schema model.editedValue
                }
                    ! []

        ChangeValue v ->
            let
                value =
                    v
                        |> decodeValue JsonValue.decoder
                        |> Result.toMaybe
            in
                { model
                    | editedValue = value
                    , form = Json.Form.init model.schema value
                }
                    ! []

        JsonFormMsg msg ->
            let
                ( ( m, cmd ), exMsg ) =
                    Json.Form.update msg model.form

                ( editedValue, exCmd ) =
                    case exMsg of
                        Json.Form.UpdateValue v isValid ->
                            ( v
                            , Encode.object
                                [ ( "value"
                                  , v
                                        |> Maybe.withDefault JsonValue.NullValue
                                        |> JsonValue.encode
                                  )
                                , ( "isValid", Encode.bool isValid )
                                ]
                                |> value
                            )

                        _ ->
                            ( model.editedValue, Cmd.none )
            in
                { model
                    | form = m
                    , editedValue = editedValue
                }
                    ! [ cmd |> Cmd.map JsonFormMsg, exCmd ]


view : Model -> Html Msg
view model =
    model.form
        |> Json.Form.view
        |> Html.map JsonFormMsg


port valueChange : (Value -> msg) -> Sub msg


port value : Value -> Cmd msg


port schemaChange : (Value -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ valueChange ChangeValue
        , schemaChange ChangeSchema
        ]

port module CustomElement exposing (init, update, view, subscriptions)

import Html exposing (Html, div, text, h3)


--import Html.Attributes exposing (class, classList)
--import Html.Events exposing (onClick)

import Json.Decode exposing (Value, decodeValue)
import JsonValue exposing (decoder)
import Json.Form
import Json.Schema.Definitions


type alias Model =
    { form : Json.Form.Model
    , editedValue : Maybe JsonValue.JsonValue
    }


init : Value -> ( Model, Cmd Msg )
init v =
    let
        schema = v
            |> decodeValue (Json.Decode.at [ "schema" ] Json.Schema.Definitions.decoder)
            |> Result.withDefault Json.Schema.Definitions.blankSchema

        value = v
            |> decodeValue (Json.Decode.at [ "value" ] JsonValue.decoder)
            |> Result.toMaybe
    in
        { form = Json.Form.init schema value
        , editedValue = value
        }
            ! [ loadSnippet "traveller" ]


type Msg
    = JsonFormMsg Json.Form.Msg
    | ChangeValue Value


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        ChangeValue v ->
            { model | editedValue = v |> decodeValue JsonValue.decoder |> Result.toMaybe
            }
                ! []

        JsonFormMsg msg ->
            let
                ( ( m, cmd ), exMsg ) =
                    Json.Form.update msg model.form
            in
                { model
                    | form = m
                    , editedValue =
                        case exMsg of
                            Json.Form.UpdateValue v ->
                                v

                            _ ->
                                model.editedValue
                }
                    ! [ cmd |> Cmd.map JsonFormMsg ]


view : Model -> Html Msg
view model =
    model.form
        |> Json.Form.view
        |> Html.map JsonFormMsg


port loadSnippet : String -> Cmd msg


port valueChange : (Value -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions _ =
    valueChange ChangeValue

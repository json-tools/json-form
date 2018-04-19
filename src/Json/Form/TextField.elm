module Json.Form.TextField exposing (view)

import Json.Form.Definitions exposing (..)
import Json.Schema.Definitions exposing (Schema, getCustomKeywordValue)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onFocus, onBlur, onInput)
import JsonValue exposing (JsonValue)
import Util exposing (..)
import Json.Form.Helper as Helper
import Json.Decode as Decode


view : Model -> Schema -> Path -> Html Msg
view model schema path =
    let
        editedValue =
            model.value
                |> Maybe.map (JsonValue.getIn path)
                |> Maybe.andThen Result.toMaybe
                |> Maybe.map jsonValueToString
                |> Maybe.withDefault ""

        ( hasError, helperText ) =
            Helper.view model schema path

        isPassword =
            schema
                |> getCustomKeywordValue "ui"
                |> Maybe.andThen
                    (\settings ->
                        settings
                            |> Decode.decodeValue
                                (Decode.field "widget" Decode.string
                                    |> Decode.map (\widget -> widget == "password")
                                )
                            |> Result.toMaybe
                    )
                |> Maybe.withDefault False
    in
        div
            [ classList
                [ ( "jf-textfield", True )
                , ( "jf-textfield--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
                , ( "jf-textfield--empty", editedValue == "" )
                , ( "jf-textfield--invalid", hasError )
                ]
            ]
            [ input
                [ class "jf-textfield__input"
                , onFocus <| FocusInput (Just path)
                , onBlur <| FocusInput Nothing
                , onInput <| (\str -> EditValue path (JsonValue.StringValue str))
                , value <| editedValue
                , if isPassword then
                    type_ "password"
                  else
                    type_ "text"
                ]
                []
            , label [ class "jf-textfield__label" ] [ schema |> getTitle |> text ]
            , div [ class "jf-textfield__helper-text" ] [ helperText ]
            ]

module Json.Form.TextField exposing (view, viewNumeric)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onBlur, onFocus, onInput)
import Json.Decode as Decode
import Json.Encode as Encode
import Json.Form.Definitions exposing (..)
import Json.Form.Helper as Helper
import Json.Form.UiSpec exposing (Rule(..), UiSpec, WidgetType(..))
import Json.Schema
import Json.Schema.Definitions exposing (Schema(ObjectSchema), getCustomKeywordValue)
import Json.Value as JsonValue exposing (JsonValue)
import JsonFormUtil as Util exposing (getTitle, getUiSpec, jsonValueToString)


view : Model -> Schema -> Bool -> Path -> Html Msg
view model schema isRequired path =
    let
        editedValue =
            model.value
                |> Maybe.map (JsonValue.getIn path)
                |> Maybe.andThen Result.toMaybe
                |> Maybe.map jsonValueToString
                |> Maybe.withDefault ""

        ( hasError, helperText ) =
            Helper.view model schema path

        uiSpec =
            schema |> getUiSpec

        isPassword =
            uiSpec.widgetType == Just PasswordField

        getDefaultValue s =
            case s of
                ObjectSchema os ->
                    os.default
                        |> Maybe.withDefault Encode.null
                        |> JsonValue.decodeValue

                _ ->
                    JsonValue.NullValue

        referencedValue subPath s =
            model.value
                |> Maybe.andThen (JsonValue.getIn subPath >> Result.toMaybe)
                |> Maybe.withDefault (s |> getDefaultValue)
                |> JsonValue.encode

        validate subPath s =
            s
                |> Json.Schema.validateValue { applyDefaults = True } (referencedValue subPath s)
                |> Result.map (\_ -> True)
                |> Result.withDefault False

        disabled =
            case uiSpec.rule of
                Just (Disable subPath s) ->
                    validate subPath s

                Just (Enable subPath s) ->
                    validate subPath s |> not

                _ ->
                    False

        hidden =
            case uiSpec.rule of
                Just (Hide subPath s) ->
                    validate subPath s

                Just (Show subPath s) ->
                    validate subPath s |> not

                _ ->
                    False
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            , ( "jf-textfield--disabled", disabled )
            , ( "jf-textfield--hidden", hidden )
            ]
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusInput (Just path)
            , onBlur <| FocusInput Nothing
            , onInput <| \str -> EditValue path (JsonValue.StringValue str)
            , value <| editedValue
            , Html.Attributes.disabled disabled
            , if isPassword then
                type_ "password"

              else
                type_ "text"
            ]
            []
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]


viewNumeric : Model -> Schema -> Bool -> Path -> Html Msg
viewNumeric model schema isRequired path =
    let
        isFocused =
            model.focused
                |> Maybe.map ((==) path)
                |> Maybe.withDefault False

        editedValue =
            if isFocused then
                model.editedNumber

            else
                model.value
                    |> Maybe.map (JsonValue.getIn path)
                    |> Maybe.andThen Result.toMaybe
                    |> Maybe.map Util.jsonValueToString
                    |> Maybe.withDefault ""

        ( hasError, helperText ) =
            Helper.view model schema path
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--focused", isFocused )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            ]
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusNumericInput (Just path)
            , onBlur <| FocusNumericInput Nothing
            , onInput <| EditNumber
            , value <| editedValue
            , type_ "number"
            ]
            []
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]

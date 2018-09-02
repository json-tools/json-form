module Json.Form.TextField exposing (view, viewNumeric)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onBlur, onFocus, onInput)
import Json.Form.Definitions exposing (..)
import Json.Form.Helper as Helper
import Json.Form.UiSpec exposing (Rule(..), UiSpec, WidgetType(..), applyRule)
import Json.Schema.Definitions exposing (Schema(ObjectSchema), getCustomKeywordValue)
import Json.Value as JsonValue exposing (JsonValue)
import JsonFormUtil as Util exposing (getTitle, getUiSpec, jsonValueToString)


view : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
view model schema isRequired isDisabled path =
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

        ( disabled, hidden ) =
            applyRule model.value path uiSpec.rule
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            , ( "jf-textfield--disabled", isDisabled || disabled )
            , ( "jf-textfield--hidden", hidden )
            ]
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusInput (Just path)
            , onBlur <| FocusInput Nothing
            , onInput <| \str -> EditValue path (JsonValue.StringValue str)
            , value <| editedValue
            , Html.Attributes.disabled (isDisabled || disabled)
            , if isPassword then
                type_ "password"

              else
                type_ "text"
            ]
            []
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]


viewNumeric : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewNumeric model schema isRequired isDisabled path =
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

        uiSpec =
            schema |> getUiSpec

        ( disabled, hidden ) =
            applyRule model.value path uiSpec.rule
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--focused", isFocused )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            , ( "jf-textfield--disabled", isDisabled || disabled )
            , ( "jf-textfield--hidden", hidden )
            ]
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusNumericInput (Just path)
            , onBlur <| FocusNumericInput Nothing
            , onInput <| EditNumber
            , value <| editedValue
            , type_ "number"
            , Html.Attributes.disabled (isDisabled || disabled)
            ]
            []
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]

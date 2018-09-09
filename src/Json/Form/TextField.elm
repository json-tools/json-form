module Json.Form.TextField exposing (view, viewNumeric)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onBlur, onFocus, onInput)
import Icons exposing (errorIcon, eye, eyeOff)
import Json.Form.Config exposing (TextFieldStyle(Outlined))
import Json.Form.Definitions exposing (..)
import Json.Form.Helper as Helper
import Json.Form.UiSpec exposing (Rule(..), UiSpec, WidgetType(..), applyRule)
import Json.Schema.Definitions exposing (Schema(ObjectSchema), getCustomKeywordValue)
import Json.Value as JsonValue exposing (JsonValue)
import JsonFormUtil as Util exposing (getTitle, getUiSpec, jsonValueToString)


view : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
view model schema isRequired isDisabled path =
    let
        id =
            path |> String.join "_"

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

        icon =
            if isPassword then
                if model.showPassword then
                    eyeOff ToggleShowPassword

                else
                    eye ToggleShowPassword

            else if hasError then
                errorIcon

            else
                text ""

        actuallyDisabled =
            isDisabled || disabled
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--outlined", model.config.textFieldStyle == Outlined )
            , ( "jf-textfield--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            , ( "jf-textfield--disabled", actuallyDisabled )
            , ( "jf-textfield--hidden", hidden )
            ]

        -- , onFocus <| FocusTextInput path
        -- , Html.Attributes.tabindex -1
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusInput (Just path)
            , onBlur <| FocusInput Nothing
            , onInput <| \str -> EditValue path (JsonValue.StringValue str)
            , value <| editedValue
            , Html.Attributes.id id
            , Html.Attributes.name id
            , Html.Attributes.autocomplete False
            , Html.Attributes.disabled actuallyDisabled
            , if isPassword && not model.showPassword then
                type_ "password"

              else
                type_ "text"
            ]
            []
        , icon
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]


viewNumeric : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewNumeric model schema isRequired isDisabled path =
    let
        id =
            path |> String.join "_"

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

        actuallyDisabled =
            isDisabled || disabled
    in
    div
        [ classList
            [ ( "jf-textfield", True )
            , ( "jf-textfield--outlined", model.config.textFieldStyle == Outlined )
            , ( "jf-textfield--focused", isFocused )
            , ( "jf-textfield--empty", editedValue == "" )
            , ( "jf-textfield--invalid", hasError )
            , ( "jf-textfield--disabled", actuallyDisabled )
            , ( "jf-textfield--hidden", hidden )
            ]
        ]
        [ input
            [ class "jf-textfield__input"
            , onFocus <| FocusNumericInput (Just path)
            , onBlur <| FocusNumericInput Nothing
            , onInput <| EditNumber
            , Html.Attributes.id id
            , Html.Attributes.name id
            , value <| editedValue
            , type_ "number"
            , Html.Attributes.disabled actuallyDisabled
            ]
            []
        , label [ class "jf-textfield__label" ] [ schema |> getTitle isRequired |> text ]
        , div [ class "jf-textfield__helper-text" ] [ helperText ]
        ]

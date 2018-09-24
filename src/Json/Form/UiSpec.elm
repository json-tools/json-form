module Json.Form.UiSpec exposing (MultilineTextFieldConfig, Rule(..), UiSpec, Widget(..), applyRule, blank, decoder, defaultMultilineTextFieldConfig)

import Json.Decode as Decode exposing (Decoder, Value, fail, field, int, maybe, string, succeed)
import Json.Encode as Encode
import Json.Schema exposing (validateValue)
import Json.Schema.Definitions exposing (Schema(..))
import Json.Value as JsonValue exposing (JsonValue)


type alias UiSpec =
    { widget : Maybe Widget
    , rule : Maybe Rule
    }


type Widget
    = PasswordField
    | Switch
    | MultilineTextField MultilineTextFieldConfig


type alias MultilineTextFieldConfig =
    { minRows : Int
    , maxRows : Int
    }


defaultMultilineTextFieldConfig =
    { minRows = 1
    , maxRows = 5
    }


type Rule
    = Enable String Schema
    | Disable String Schema
    | Show String Schema
    | Hide String Schema


blank : UiSpec
blank =
    { widget = Nothing
    , rule = Nothing
    }


decoder : Decoder UiSpec
decoder =
    Decode.map2 UiSpec
        (field "widget" widgetDecoder |> maybe)
        (field "rule" ruleDecoder |> maybe)


widgetDecoder : Decoder Widget
widgetDecoder =
    Decode.oneOf
        [ string
            |> Decode.andThen
                (\widget ->
                    if widget == "password" then
                        succeed <| PasswordField

                    else if widget == "switch" then
                        succeed <| Switch

                    else if widget == "multiline" then
                        succeed <| MultilineTextField defaultMultilineTextFieldConfig

                    else
                        fail ""
                )
        , Decode.field "type" string
            |> Decode.andThen
                (\t ->
                    case t of
                        "multiline" ->
                            Decode.map2 MultilineTextFieldConfig
                                (Decode.field "minRows" int)
                                (Decode.field "maxRows" int)
                                |> Decode.map MultilineTextField

                        "password" ->
                            succeed PasswordField

                        "switch" ->
                            succeed Switch

                        _ ->
                            fail "Unknown widget"
                )
        ]


ruleDecoder : Decoder Rule
ruleDecoder =
    Decode.map3
        (\action ref condition -> action ref condition)
        (Decode.field "action" string
            |> Decode.andThen
                (\action ->
                    if action == "enable" then
                        succeed Enable

                    else if action == "disable" then
                        succeed Disable

                    else if action == "show" then
                        succeed Show

                    else if action == "hide" then
                        succeed Hide

                    else
                        fail <| "Expected one of 'disable', 'enabled', 'show', 'hide', but got unknown action: '" ++ action ++ "'"
                )
        )
        (Decode.field "path" string)
        (Decode.field "condition" Json.Schema.Definitions.decoder)


applyRule : Maybe JsonValue -> List String -> Maybe Rule -> ( Bool, Bool )
applyRule value path rule =
    let
        resolvePath subPath =
            subPath
                |> String.split "/"
                |> List.foldl
                    (\token currentPath ->
                        if token == "" then
                            []

                        else if token == "." then
                            currentPath

                        else if token == ".." then
                            currentPath |> List.take ((currentPath |> List.length) - 1)

                        else
                            currentPath ++ [ token ]
                    )
                    path

        getDefaultValue s =
            case s of
                ObjectSchema os ->
                    os.default
                        |> Maybe.withDefault Encode.null
                        |> JsonValue.decodeValue

                _ ->
                    JsonValue.NullValue

        referencedValue subPath s =
            value
                |> Maybe.andThen (JsonValue.getIn subPath >> Result.toMaybe)
                |> Maybe.withDefault (s |> getDefaultValue)
                |> JsonValue.encode

        validate subPath s =
            s
                |> validateValue { applyDefaults = True } (referencedValue subPath s)
                |> Result.map (\_ -> True)
                |> Result.withDefault False

        disabled =
            case rule of
                Just (Disable subPath s) ->
                    validate (resolvePath subPath) s

                Just (Enable subPath s) ->
                    validate (resolvePath subPath) s |> not

                _ ->
                    False

        hidden =
            case rule of
                Just (Hide subPath s) ->
                    validate (resolvePath subPath) s

                Just (Show subPath s) ->
                    validate (resolvePath subPath) s |> not

                _ ->
                    False
    in
    ( disabled, hidden )

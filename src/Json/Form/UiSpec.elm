module Json.Form.UiSpec exposing (Rule(..), UiSpec, WidgetType(..), applyRule, blank, decoder)

import Json.Decode as Decode exposing (Decoder, Value, fail, field, maybe, succeed)
import Json.Encode as Encode
import Json.Schema exposing (validateValue)
import Json.Schema.Definitions exposing (Schema(ObjectSchema))
import Json.Value as JsonValue exposing (JsonValue)


type alias UiSpec =
    { widgetType : Maybe WidgetType
    , rule : Maybe Rule
    }


type WidgetType
    = PasswordField
    | Switch
    | MultilineTextField


type Rule
    = Enable String Schema
    | Disable String Schema
    | Show String Schema
    | Hide String Schema


blank : UiSpec
blank =
    { widgetType = Nothing
    , rule = Nothing
    }


decoder : Decoder UiSpec
decoder =
    Decode.map2 UiSpec
        (field "widget" Decode.string
            |> Decode.andThen
                (\widget ->
                    if widget == "password" then
                        succeed <| PasswordField

                    else if widget == "switch" then
                        succeed <| Switch

                    else if widget == "multiline" then
                        succeed <| MultilineTextField

                    else
                        fail ""
                )
            |> maybe
        )
        (field "rule" ruleDecoder |> maybe)


ruleDecoder : Decoder Rule
ruleDecoder =
    Decode.map3
        (\action ref condition -> action ref condition)
        (Decode.field "action" Decode.string
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
        (Decode.field "path" Decode.string)
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

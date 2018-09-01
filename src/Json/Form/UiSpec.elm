module Json.Form.UiSpec exposing (Rule(..), UiSpec, WidgetType(..), blank, decoder)

import Json.Decode as Decode exposing (Decoder, Value, fail, field, maybe, succeed)
import Json.Schema.Definitions exposing (Schema)


type alias UiSpec =
    { widgetType : Maybe WidgetType
    , rule : Maybe Rule
    }


type WidgetType
    = PasswordField
    | Switch


type Rule
    = Enable (List String) Schema
    | Disable (List String) Schema
    | Show (List String) Schema
    | Hide (List String) Schema


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
        (Decode.field "path" (Decode.list Decode.string))
        (Decode.field "condition" Json.Schema.Definitions.decoder)

module Util exposing (..)

import JsonValue exposing (JsonValue)
import Json.Encode as Encode
import Json.Decode as Decode
import Json.Form.UiSpec exposing (UiSpec, decoder)
import Json.Schema.Definitions exposing (Schema(..), SubSchema, getCustomKeywordValue)


jsonValueToString : JsonValue -> String
jsonValueToString jv =
    case jv of
        JsonValue.StringValue s ->
            s

        JsonValue.NumericValue n ->
            toString n

        _ ->
            ""


getTitle : Bool -> Schema -> String
getTitle isRequired schema =
    getTextProp schema .title ""
        |> (\title ->
                if isRequired then
                    title ++ " *"
                else
                    title
           )


getDescription : Schema -> String
getDescription schema =
    getTextProp schema .description ""


getTextProp : Schema -> (SubSchema -> Maybe String) -> String -> String
getTextProp schema prop def =
    case schema of
        ObjectSchema os ->
            os
                |> prop
                |> Maybe.withDefault def

        _ ->
            def


getUiSpec : Schema -> UiSpec
getUiSpec schema =
    schema
        |> getCustomKeywordValue "ui"
        |> Maybe.andThen
            (\settings ->
                settings
                    |> Decode.decodeValue decoder
                    |> Result.toMaybe
            )
        |> Maybe.withDefault (Json.Form.UiSpec.Unknown Encode.null)


(=>) : a -> b -> ( a, b )
(=>) a b =
    ( a, b )

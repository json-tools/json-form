module Util exposing (..)

import JsonValue exposing (JsonValue)
import Json.Schema.Definitions exposing (Schema(..), SubSchema)


jsonValueToString : JsonValue -> String
jsonValueToString jv =
    case jv of
        JsonValue.StringValue s ->
            s

        JsonValue.NumericValue n ->
            toString n

        _ ->
            ""


getTitle : Schema -> String
getTitle schema =
    getTextProp schema .title ""


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

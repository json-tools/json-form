module Snippets exposing (Snippet(..), getSnippet, getSnippetTitle)

import Json.Schema.Definitions exposing (Schema(..), blankSchema, blankSubSchema, Type(..), SingleType(..))
import Json.Schema.Builder exposing (..)


type Snippet
    = SimpleField
    | FlatObject


getSnippetTitle : Snippet -> String
getSnippetTitle ds =
    case ds of
        SimpleField ->
            "Simple Text Field"

        FlatObject ->
            "Flat Object"


getSnippet : Snippet -> Schema
getSnippet ds =
    case ds of
        SimpleField ->
            ObjectSchema
                { blankSubSchema
                    | type_ = SingleType StringType
                    , title = Just "First name"
                    , description = Just "First (given) name of a travelling person"
                }

        FlatObject ->
            buildSchema
                |> withType "object"
                |> withProperties
                    [ ( "firstName"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "First name"
                            |> withDescription "First (given) name of a travelling person"
                            |> withMinLength 2
                      )
                    , ( "middleName"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Middle name"
                      )
                    , ( "lastName"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Last name"
                            |> withDescription "Last (family) name of a travelling person"
                      )
                    ]
                |> withAdditionalProperties (boolSchema False)
                |> toSchema
                |> Result.withDefault blankSchema

module Snippets exposing (Snippet(..), getSnippet, getSnippetTitle)

import Json.Schema.Definitions exposing (Schema(..), blankSchema, blankSubSchema, Type(..), SingleType(..))
import Json.Schema.Builder exposing (..)
import Json.Encode exposing (string)


type Snippet
    = SimpleField
    | FlatObject
    | FlightBooking


getSnippetTitle : Snippet -> String
getSnippetTitle ds =
    case ds of
        SimpleField ->
            "Simple Text Field"

        FlatObject ->
            "Flat Object"

        FlightBooking ->
            "Flight Booking"


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

        FlightBooking ->
            buildSchema
                |> withType "object"
                |> withProperties
                    [ ( "pan"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Card Number"
                            |> withDescription "A card number. When not provided, this will be generated in the background"
                            |> withMinLength 10
                            |> withMaxLength 17
                      )
                    , ( "airlineCode"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Airline Code"
                            |> withDescription "Two letter IATA airline code"
                            |> withMinLength 2
                            |> withMaxLength 2
                      )
                    , ( "return"
                      , buildSchema
                            |> withType "boolean"
                            |> withTitle "Return"
                            |> withDescription "One way or return flight"
                      )
                    , ( "flightType"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Flight Type"
                            |> withDescription "Flight type is one of any/international/domestic"
                            |> withEnum
                                [ string "domestic"
                                , string "international"
                                , string "any"
                                ]
                            |> withDefault (string "any")
                      )
                    , ( "cabinClass"
                      , buildSchema
                            |> withType "string"
                            |> withTitle "Cabin Class"
                            |> withDescription "Specify a cabin class. One of economy/premium economy/business/first"
                            |> withEnum
                                [ string "economy"
                                , string "premium economy"
                                , string "business"
                                , string "first"
                                ]
                      )
                    , ( "earliestOffset"
                      , buildSchema
                            |> withType "number"
                            |> withTitle "Earliest Offset"
                            |> withDescription "Minutes before the first outbound flight may be chosen from the time of endpoint call"
                            |> withMinimum 0
                      )
                    , ( "latestOffset"
                      , buildSchema
                            |> withType "number"
                            |> withTitle "Latest Offset"
                            |> withDescription "Minutes after the earliest offset that the last outbound flight may be chosen"
                            |> withMinimum 0
                      )
                    , ( "minPassengers"
                      , buildSchema
                            |> withType "number"
                            |> withTitle "Minimum Passengers"
                            |> withDescription "No less than specified number of passengers will be generated"
                            |> withMinimum 0
                      )
                    , ( "maxPassengers"
                      , buildSchema
                            |> withType "number"
                            |> withTitle "Maximum Passengers"
                            |> withDescription "No more than specified number of passengers will be generated"
                            |> withMinimum 0
                      )
                    ]
                |> withAdditionalProperties (boolSchema False)
                |> toSchema
                |> Result.withDefault blankSchema

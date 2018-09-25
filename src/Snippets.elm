module Snippets exposing (Snippet(..), getSnippet, getSnippetTitle, index)

import Json.Encode as Encode exposing (int, list, object, string)
import Json.Schema.Builder exposing (..)
import Json.Schema.Definitions exposing (Schema(..), SingleType(..), Type(..), blankSchema, blankSubSchema)


type Snippet
    = InputTypes
    | Rules


index : List Snippet
index =
    [ InputTypes
    , Rules
    ]


getSnippetTitle : Snippet -> String
getSnippetTitle ds =
    case ds of
        InputTypes ->
            "Types"

        Rules ->
            "Rules"


getSnippet : Snippet -> List Schema
getSnippet ds =
    case ds of
        InputTypes ->
            [ buildSchema
                |> withType "string"
                |> withTitle "Text field"
                |> withDescription "Single line text field"
                |> toSchema
                |> Result.withDefault blankSchema
            , buildSchema
                |> withType "string"
                |> withTitle "Multiline"
                |> withDescription "Multi-line text field"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "multiline" ) ])
                |> toSchema
                |> Result.withDefault blankSchema
            , buildSchema
                |> withType "string"
                |> withTitle "Multiline"
                |> withDescription "Configurable multi-line text field"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", object [ ( "type", string "multiline" ), ( "minRows", int 5 ), ( "maxRows", int 10 ) ] ) ])
                |> toSchema
                |> Result.withDefault blankSchema
            , buildSchema
                |> withType "string"
                |> withTitle "Password"
                |> withDescription "Must contain enough various symbols"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "password" ) ])
                |> toSchema
                |> Result.withDefault blankSchema
            , buildSchema
                |> withType "boolean"
                |> withTitle "Boolean as checkbox"
                |> toSchema
                |> Result.withDefault blankSchema
            , buildSchema
                |> withType "boolean"
                |> withTitle "Boolean as switch"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
                |> toSchema
                |> Result.withDefault blankSchema
            ]

        Rules ->
            let
                withRule name =
                    withCustomKeyword "ui"
                        (object
                            [ ( "rule"
                              , object
                                    [ ( "action", string name )
                                    , ( "path", string "/enabled" )
                                    , ( "condition"
                                      , object
                                            [ ( "const", Encode.bool False )
                                            , ( "default", Encode.bool False )
                                            ]
                                      )
                                    ]
                              )
                            ]
                        )

                withRuleAndWidget name widget =
                    withCustomKeyword "ui"
                        (object
                            [ ( "rule"
                              , object
                                    [ ( "action", string name )
                                    , ( "path", string "/enabled" )
                                    , ( "condition"
                                      , object
                                            [ ( "const", Encode.bool False )
                                            , ( "default", Encode.bool False )
                                            ]
                                      )
                                    ]
                              )
                            , ( "widget", string widget )
                            ]
                        )

                enableToggle =
                    ( "enabled"
                    , buildSchema
                        |> withType "boolean"
                        |> withDefault (Encode.bool False)
                        |> withTitle "enable"
                        |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
                    )
            in
            [ buildSchema
                |> withType "object"
                |> withProperties
                    [ enableToggle
                    , ( "disableDemo"
                      , buildSchema
                            |> withTitle "Rule: disable text field"
                            |> withType "string"
                            |> withDescription "Will be enabled when switch turned on"
                            |> withRule "disable"
                      )
                    ]
            , buildSchema
                |> withType "object"
                |> withProperties
                    [ ( "enabled"
                      , buildSchema
                            |> withType "boolean"
                            |> withTitle "show"
                            |> withDefault (Encode.bool False)
                            |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
                      )
                    , ( "hideDemo"
                      , buildSchema
                            |> withTitle "Rule: hide text field"
                            |> withType "string"
                            |> withDescription "Will be shown when switch turned on"
                            |> withRule "hide"
                      )
                    ]
            , buildSchema
                |> withType "object"
                |> withProperties
                    [ enableToggle
                    , ( "disableCheckboxDemo"
                      , buildSchema
                            |> withTitle "Rule: disable checkbox"
                            |> withType "boolean"
                            |> withDescription "Will be enabled when switch turned on"
                            |> withRuleAndWidget "disable" "checkbox"
                      )
                    , ( "disableSwitchDemo"
                      , buildSchema
                            |> withTitle "Rule: disable switch"
                            |> withType "boolean"
                            |> withDescription "Will be enabled when switch turned on"
                            |> withRuleAndWidget "disable" "switch"
                      )
                    ]
            , buildSchema
                |> withType "object"
                |> withProperties
                    [ enableToggle
                    , ( "form"
                      , buildSchema
                            |> withType "object"
                            |> withProperties
                                [ ( "nestedForm"
                                  , buildSchema
                                        |> withType "object"
                                        |> withProperties
                                            [ ( "disableDemo"
                                              , buildSchema
                                                    |> withTitle "Rule: disable nested form"
                                                    |> withType "string"
                                                    |> withDescription "Will be enabled when switch turned on"
                                              )
                                            ]
                                        |> withRule "disable"
                                  )
                                ]
                      )
                    ]
            , buildSchema
                |> withType "array"
                |> withItem
                    (buildSchema
                        |> withType "object"
                        |> withProperties
                            [ ( "enabled"
                              , buildSchema
                                    |> withType "boolean"
                                    -- |> withDefault (Encode.bool True)
                                    |> withTitle "enable"
                                    |> withDescription "Enable editing"
                                    |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
                              )
                            , ( "hideDemo"
                              , buildSchema
                                    |> withTitle "Rule: disable based on local condition"
                                    |> withType "string"
                                    |> withDescription "Local condition demo"
                                    |> withCustomKeyword "ui"
                                        (object
                                            [ ( "rule"
                                              , object
                                                    [ ( "action", string "disable" )
                                                    , ( "path", string "../enabled" )
                                                    , ( "condition"
                                                      , object
                                                            [ ( "const", Encode.bool False )
                                                            , ( "default", Encode.bool False )
                                                            ]
                                                      )
                                                    ]
                                              )
                                            ]
                                        )
                              )
                            ]
                    )
            ]
                |> List.map (toSchema >> Result.withDefault blankSchema)



{-
   FlightBooking ->
       [ buildSchema
           |> withType "object"
           |> withRequired [ "airlineCode" ]
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
                       |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
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
       ]
-}

module Showcase exposing (Example, Showcase(..), getShowcase, getShowcaseById, getShowcaseId, getShowcaseTitle, index)

import Json.Encode as Encode exposing (int, list, object, string)
import Json.Schema
import Json.Schema.Builder exposing (..)
import Json.Schema.Definitions exposing (Schema(..), SingleType(..), Type(..), blankSchema, blankSubSchema)


type Showcase
    = InputTypes
    | Rules
    | Validation
    | FormLayout


type alias Example =
    { schema : Schema
    , title : String
    }


index : List Showcase
index =
    [ InputTypes
    , Rules
    , Validation
    , FormLayout
    ]


getShowcaseById : String -> Maybe Showcase
getShowcaseById id =
    case id of
        "types" ->
            Just InputTypes

        "rules" ->
            Just Rules

        "validation" ->
            Just Validation

        "form" ->
            Just FormLayout

        _ ->
            Nothing


getShowcaseId : Showcase -> String
getShowcaseId s =
    case s of
        InputTypes ->
            "types"

        Rules ->
            "rules"

        Validation ->
            "validation"

        FormLayout ->
            "form"


getShowcaseTitle : Showcase -> String
getShowcaseTitle ds =
    case ds of
        InputTypes ->
            "Types"

        Rules ->
            "Rules"

        Validation ->
            "Validation"

        FormLayout ->
            "Form Layout"


makeExample : String -> SchemaBuilder -> Example
makeExample title sb =
    { schema =
        sb
            |> toSchema
            |> Result.withDefault blankSchema
    , title = title
    }


getShowcase : Showcase -> List Example
getShowcase ds =
    case ds of
        InputTypes ->
            [ buildSchema
                |> withType "string"
                |> withTitle "Text field"
                |> withDescription "Single line text field"
                |> makeExample "Single line text field"
            , buildSchema
                |> withType "string"
                |> withTitle "Multiline"
                |> withDescription "Multi-line text field"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "multiline" ) ])
                |> makeExample "Multiline text field"
            , buildSchema
                |> withType "string"
                |> withTitle "Multiline"
                |> withDescription "Configurable multi-line text field"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", object [ ( "type", string "multiline" ), ( "minRows", int 5 ), ( "maxRows", int 10 ) ] ) ])
                |> makeExample "Configured multiline text field"
            , buildSchema
                |> withType "string"
                |> withTitle "Password"
                |> withDescription "Must contain enough various symbols"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "password" ) ])
                |> makeExample "Password field"
            , buildSchema
                |> withType "boolean"
                |> withTitle "Boolean as checkbox"
                |> withDescription "Booleans default to checkboxes"
                |> makeExample "Checkbox"
            , buildSchema
                |> withType "boolean"
                |> withTitle "Boolean as switch"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", string "switch" ) ])
                |> withDescription "Booleans can be configured to look like switch"
                |> makeExample "Switch"
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
                        |> withTitle "Enable"
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
                |> makeExample "Disable input"
            , buildSchema
                |> withType "object"
                |> withProperties
                    [ ( "enabled"
                      , buildSchema
                            |> withType "boolean"
                            |> withTitle "Show"
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
                |> makeExample "Hide input"
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
                |> makeExample "Disable selection conrols"
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
                |> makeExample "Disable nested form"
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
                |> makeExample "Local scope"
            ]

        Validation ->
            [ buildSchema
                |> withType "string"
                |> withTitle "Name"
                |> withDescription "Enter name between 2 and 10 characters"
                |> withMaxLength 10
                |> withMinLength 2
                |> withPattern "^\\D"
                |> makeExample "Single field validation"
            , buildSchema
                |> withType "string"
                |> withTitle "Bio"
                |> withCustomKeyword "ui" (Encode.object [ ( "widget", object [ ( "type", string "multiline" ), ( "minRows", int 3 ), ( "maxRows", int 6 ) ] ) ])
                |> withDescription "Enter you bio"
                |> withMinLength 40
                |> makeExample "Multiline field validation"
            ]

        FormLayout ->
            [ { schema = flightBookingInputGeneratorSchema, title = "Fligth booking input generator" }
            ]


flightBookingInputGeneratorSchema : Schema
flightBookingInputGeneratorSchema =
    """
{
    "type": "object",
    "properties": {
        "payment": {
            "ui": {
                "expandable": true
            },
            "title": "Payment",
            "type": "object",
            "properties": {
                "person": {
                    "type": "object",
                    "title": "Person",
                    "properties": {
                        "title": {
                            "type": "string",
                            "title": "Title",
                            "enum": [
                                "mr",
                                "ms",
                                "mrs",
                                "miss"
                            ]
                        },
                        "firstName": {
                            "type": "string",
                            "title": "First name"
                        },
                        "middleName": {
                            "type": "string",
                            "title": "Middle name"
                        },
                        "lastName": {
                            "type": "string",
                            "title": "Last name"
                        }
                    }
                },
                "card": {
                    "type": "object",
                    "title": "Card",
                    "properties": {
                        "type": {
                            "title": "Card type",
                            "type": "string",
                            "enum": [
                                "debit",
                                "credit"
                            ]
                        },
                        "holderType": {
                            "title": "Holder type",
                            "type": "string",
                            "enum": [
                                "personal",
                                "corporate"
                            ]
                        },
                        "brand": {
                            "title": "Brand",
                            "type": "string",
                            "enum": [
                                "visa",
                                "mastercard",
                                "amex",
                                "discover"
                            ]
                        },
                        "expirationDate": {
                            "title": "Expiration date",
                            "type": "string",
                            "format": "YYYY-MM"
                        },
                        "name": {
                            "title": "Name",
                            "type": "string"
                        },
                        "pan": {
                            "title": "Card Number (PAN)",
                            "type": "string"
                        },
                        "cvv": {
                            "title": "CVV",
                            "type": "string",
                            "minLength": 3,
                            "maxLength": 4
                        }
                    }
                },
                "address": {
                    "type": "object",
                    "title": "Address",
                    "properties": {
                        "line1": {
                            "title": "Address line 1",
                            "type": "string"
                        },
                        "postcode": {
                            "title": "Postcode",
                            "type": "string"
                        },
                        "countryCode": {
                            "title": "Country code",
                            "type": "string",
                            "const": "gb"
                        }
                    }
                }
            }
        },
        "account": {
            "ui": {
                "expandable": true
            },
            "type": "object",
            "title": "Account",
            "properties": {
                "email": {
                    "title": "Email",
                    "type": "string"
                },
                "password": {
                    "title": "Password",
                    "type": "string"
                },
                "passwordSpecification": {
                    "type": "object",
                    "title": "Password specification",
                    "properties": {
                        "length": {
                            "title": "Length",
                            "type": "string",
                            "default": 12
                        },
                        "numbers": {
                            "title": "Numbers",
                            "type": "integer",
                            "default": 1
                        },
                        "upper": {
                            "title": "Upper",
                            "type": "integer",
                            "default": 1
                        },
                        "lower": {
                            "title": "Lower",
                            "type": "integer",
                            "default": 1
                        },
                        "special": {
                            "title": "Special",
                            "type": "integer",
                            "default": 1
                        },
                        "specialCharacters": {
                            "title": "Special characters list",
                            "type": "array",
                            "item": {
                                "type": "string",
                                "maxLength": 1,
                                "minLength": 1
                            },
                            "default": [
                                "#",
                                "$",
                                "%"
                            ]
                        }
                    }
                },
                "isExisting": {
                    "title": "Is existing",
                    "type": "boolean",
                    "default": false
                },
                "phone": {
                    "title": "Phone",
                    "type": "string",
                    "properties": {
                        "countryCode": {
                            "title": "Country code",
                            "type": "string",
                            "const": "gb"
                        },
                        "number": {
                            "title": "Number",
                            "type": "string"
                        }
                    }
                }
            }
        },
        "passengers": {
            "ui": {
                "expandable": true
            },
            "title": "Passengers",
            "type": "object",
            "properties": {
                "minItems": {
                    "title": "Min items",
                    "type": "integer",
                    "min": 0
                },
                "maxItems": {
                    "title": "Max items",
                    "type": "integer",
                    "min": 0
                },
                "items": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "title": "Flight passenger",
                        "properties": {
                            "person": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "title": "Title",
                                        "enum": [
                                            "mr",
                                            "ms",
                                            "mrs",
                                            "miss"
                                        ]
                                    },
                                    "firstName": {
                                        "type": "string",
                                        "title": "First name"
                                    },
                                    "middleName": {
                                        "type": "string",
                                        "title": "Middle name"
                                    },
                                    "lastName": {
                                        "type": "string",
                                        "title": "Last name"
                                    }
                                }
                            },
                            "dateOfBirth": {
                                "title": "Random date config",
                                "oneOf": [
                                    {
                                        "type": "object",
                                        "properties": {
                                            "static": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "static"
                                        ],
                                        "additionalProperties": false
                                    },
                                    {
                                        "type": "object",
                                        "properties": {
                                            "age": {
                                                "type": "integer"
                                            }
                                        },
                                        "required": [
                                            "age"
                                        ],
                                        "additionalProperties": false
                                    },
                                    {
                                        "type": "integer"
                                    }
                                ]
                            },
                            "addAdditionalLuggage": {
                                "title": "Random integer configuration",
                                "type": "object",
                                "properties": {
                                    "min": {
                                        "title": "Min",
                                        "type": "integer"
                                    },
                                    "max": {
                                        "title": "Max",
                                        "type": "integer"
                                    }
                                }
                            },
                            "document": {
                                "type": "object",
                                "title": "Identity Document",
                                "properties": {
                                    "type": {
                                        "title": "Type",
                                        "enum": [
                                            "passport"
                                        ]
                                    },
                                    "number": {
                                        "title": "Number",
                                        "type": "string"
                                    },
                                    "issueDate": {
                                        "title": "Issue date",
                                        "type": "string",
                                        "format": "date"
                                    },
                                    "expirationDate": {
                                        "title": "Expiration date",
                                        "type": "string",
                                        "format": "date"
                                    },
                                    "issueCountryCode": {
                                        "title": "Country code",
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "outboundMonthYear": {
            "title": "Outbound month year",
            "oneOf": [
                {
                    "type": "object",
                    "properties": {
                        "static": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "static"
                    ],
                    "additionalProperties": false
                },
                {
                    "type": "object",
                    "properties": {
                        "age": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "age"
                    ],
                    "additionalProperties": false
                },
                {
                    "type": "integer"
                }
            ]
        },
        "inboundMonthYear": {
            "title": "Inbound month year",
            "oneOf": [
                {
                    "type": "object",
                    "properties": {
                        "static": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "static"
                    ],
                    "additionalProperties": false
                },
                {
                    "type": "object",
                    "properties": {
                        "age": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "age"
                    ],
                    "additionalProperties": false
                },
                {
                    "type": "integer"
                }
            ]
        }
    }
}
""" |> Json.Schema.fromString |> Result.withDefault blankSchema



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

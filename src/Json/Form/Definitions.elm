module Json.Form.Definitions exposing (EditingMode(..), Model, Msg(..), Path, init)

import Dict exposing (Dict)
import ErrorMessages exposing (stringifyError)
import Json.Schema
import Json.Schema.Definitions exposing (..)
import Json.Schema.Validation exposing (Error)
import Json.Value as JsonValue exposing (JsonValue)


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    , editedNumber : String
    }


init : Schema -> Maybe JsonValue -> Model
init schema v =
    let
        someValue =
            v
                |> Maybe.withDefault JsonValue.NullValue
                |> JsonValue.encode

        ( value, errors ) =
            schema
                |> Json.Schema.validateValue { applyDefaults = True } someValue
                |> (\res ->
                        case res of
                            Ok updValue ->
                                ( updValue
                                    |> JsonValue.decodeValue
                                    |> Just
                                , Dict.empty
                                )

                            Err x ->
                                ( v, dictFromListErrors x )
                   )
    in
    { schema = schema
    , focused = Nothing
    , value = value
    , errors = Dict.empty
    , beingEdited = []
    , editedNumber = ""
    }


type Msg
    = FocusInput (Maybe Path)
    | FocusNumericInput (Maybe Path)
    | EditValue Path JsonValue
    | EditNumber String
    | AddItem Path Int


type EditingMode
    = TextField
    | NumberField
    | Switch
    | Checkbox
    | JsonEditor
    | Object
    | Array


type alias Path =
    List String


dictFromListErrors : List Error -> Dict Path (List String)
dictFromListErrors list =
    list
        |> List.foldl
            (\error dict ->
                dict
                    |> Dict.update error.jsonPointer.path
                        (\listDetails ->
                            (case listDetails of
                                Just l ->
                                    l ++ [ error.details |> stringifyError ]

                                Nothing ->
                                    [ error.details |> stringifyError ]
                            )
                                |> Just
                        )
            )
            Dict.empty

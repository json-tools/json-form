module Json.Form.Definitions exposing (EditingMode(..), Model, Msg(..), Path, init)

import Dict exposing (Dict)
import ErrorMessages exposing (stringifyError)
import Json.Form.Config exposing (Config)
import Json.Schema
import Json.Schema.Definitions exposing (..)
import Json.Schema.Validation exposing (Error)
import Json.Value as JsonValue exposing (JsonValue)


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , config : Config
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    , editedNumber : String
    , showPassword : Bool
    }


init : Config -> Schema -> Maybe JsonValue -> Model
init config schema v =
    let
        someValue =
            v
                |> Maybe.withDefault (JsonValue.ObjectValue [])
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
    , config = config
    , value = value
    , errors = errors
    , beingEdited = []
    , editedNumber = ""
    , showPassword = False
    }


type Msg
    = NoOp
    | FocusInput (Maybe Path)
    | FocusTextInput Path
    | FocusNumericInput (Maybe Path)
    | EditValue Path JsonValue
    | EditNumber String
    | AddItem Path Int
    | ToggleShowPassword


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

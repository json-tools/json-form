module Json.Form.Definitions exposing (Model, Msg(..), Path, EditingMode(..), init)

import Json.Schema.Definitions exposing (..)
import JsonValue exposing (JsonValue)
import Dict exposing (Dict)


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    , editedNumber : String
    }


init : Schema -> Model
init s =
    { schema = s
    , focused = Nothing
    , value = Nothing
    , errors = Dict.empty
    , beingEdited = []
    , editedNumber = ""
    }


type Msg
    = FocusInput (Maybe Path)
    | FocusNumericInput (Maybe Path)
    | EditValue Path JsonValue
    | EditNumber String


type EditingMode
    = TextField
    | NumberField
    | Switch
    | Checkbox
    | JsonEditor
    | Object


type alias Path =
    List String

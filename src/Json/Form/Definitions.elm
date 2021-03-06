module Json.Form.Definitions exposing (EditingMode(..), Model, Msg(..), Path)

import Browser.Dom exposing (Viewport)
import Dict exposing (Dict)
import ErrorMessages exposing (stringifyError)
import Json.Encode as Encode
import Json.Form.Config exposing (Config)
import Json.Schema
import Json.Schema.Definitions exposing (..)
import Json.Schema.Validation exposing (Error)
import Json.Value as JsonValue exposing (JsonValue)
import Set exposing (Set)
import Task


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , config : Config
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    , beingFocused : List Path
    , editedJson : String
    , showPassword : Bool
    , fieldHeights : Dict Path Float
    , expandedNodes : Set Path
    }


type Msg
    = NoOp
    | FocusInput (Maybe Path)
    | FocusTextInput Path
    | FocusFragileInput Bool (Maybe Path)
    | EditValue Path JsonValue
    | EditNumber String
    | EditJson Path Float String
    | EditMultiline Path Float String
    | AddItem Path Int Schema
    | ToggleShowPassword
    | DeleteProperty Path
    | GetViewport Path (Result Browser.Dom.Error Viewport)
    | ToggleNode Path


type EditingMode
    = TextField
    | NumberField
    | Switch
    | Checkbox
    | JsonEditor
    | Object Schemata
    | Array


type alias Path =
    List String

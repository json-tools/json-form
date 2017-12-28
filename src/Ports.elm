port module Ports exposing (save)

import Json.Encode as Encode exposing (Value)


port save : Value -> Cmd msg

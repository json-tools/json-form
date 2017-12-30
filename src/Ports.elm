port module Ports exposing (save, expandedNodes)

import Json.Encode as Encode exposing (Value)


port save : Value -> Cmd msg


port expandedNodes : ( String, List (List String) ) -> Cmd msg

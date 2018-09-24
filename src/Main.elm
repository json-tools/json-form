module Main exposing (main)

import Browser
import Demo exposing (init, update, view)
import Html


main =
    Browser.document
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }

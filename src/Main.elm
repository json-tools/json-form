module Main exposing (main)

import Browser
import Demo exposing (Msg(..), init, update, view)
import Html
import Route


main =
    Browser.application
        { view = view
        , init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , onUrlRequest = UrlRequested
        , onUrlChange = Route.fromLocation >> SetRoute
        }

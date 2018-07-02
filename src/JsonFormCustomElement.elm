module JsonFormCustomElement exposing (main)

import Html
import CustomElement exposing (init, update, view, subscriptions)


main =
    Html.programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }

module Route exposing (Route(..), fromLocation, href)

import Html exposing (Attribute)
import Html.Attributes as Attr
import Showcase exposing (Showcase)
import Url exposing (Url)
import Url.Parser exposing ((</>), Parser, custom, oneOf, parse, s, string)



-- ROUTING --


type Route
    = ShowcasePage Showcase


route : Parser (Route -> a) a
route =
    oneOf
        [ Url.Parser.map ShowcasePage (s "showcase" </> showcaseParser)
        ]


showcaseParser =
    custom "SHOWCASE" Showcase.getShowcaseById



-- INTERNAL --


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                ShowcasePage sc ->
                    [ "showcase", sc |> Showcase.getShowcaseId ]
    in
    "/" ++ String.join "/" pieces



-- PUBLIC HELPERS --


href : Route -> Attribute msg
href =
    routeToString >> Attr.href


fromLocation : Url -> Maybe Route
fromLocation url =
    parse route url

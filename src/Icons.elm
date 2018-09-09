module Icons exposing (errorIcon, eye, eyeOff)

import Html exposing (Html)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Svg.Events exposing (onClick)


svgFeatherIcon : String -> Maybe msg -> List (Svg msg) -> Html msg
svgFeatherIcon className onClickHandler =
    let
        attrs =
            [ class <| "feather feather-" ++ className
            , fill "none"
            , height "24"
            , stroke "currentColor"
            , strokeLinecap "round"
            , strokeLinejoin "round"
            , strokeWidth "2"
            , viewBox "0 0 24 24"
            , width "24"
            ]
    in
    case onClickHandler of
        Just handler ->
            onClick handler :: Svg.Attributes.style "cursor: pointer" :: attrs |> svg

        Nothing ->
            svg attrs


errorIcon : Html msg
errorIcon =
    svgFeatherIcon "alert-circle"
        Nothing
        [ Svg.circle [ cx "12", cy "12", r "10" ] []
        , Svg.line [ x1 "12", y1 "8", x2 "12", y2 "12" ] []
        , Svg.line [ x1 "12", y1 "16", x2 "12", y2 "16" ] []
        ]


eye : msg -> Html msg
eye msg =
    svgFeatherIcon "eye"
        (Just msg)
        [ Svg.path [ d "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" ] []
        , Svg.circle [ cx "12", cy "12", r "3" ] []
        ]


eyeOff : msg -> Html msg
eyeOff msg =
    svgFeatherIcon "eye-off"
        (Just msg)
        [ Svg.path [ d "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" ] []
        , Svg.line [ x1 "1", y1 "1", x2 "23", y2 "23" ] []
        ]

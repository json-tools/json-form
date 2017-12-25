module StatefulComponent.Form exposing (Model, Msg, init, update, view)

import Json.Encode as Encode exposing (Value)
import Element.Attributes as Attributes
    exposing
        ( center
        , vary
        , inlineStyle
        , spacing
        , padding
        , height
        , minWidth
        , width
        , yScrollbar
        , fill
        , px
        , percent
        )
import Element exposing (Element, el, row, text, column, paragraph, empty)
import Styles
    exposing
        ( Styles
            ( None
            , Main
            , SourceCode
            )
        , Variations
        , stylesheet
        )


type alias View =
    Element Styles Variations Msg


type Msg
    = NoOp


type alias Model =
    { value : Value }


init : Value -> Model
init value =
    { value = value }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []


view : Model -> View
view model =
    row None [ width <| fill 1 ] [ text "Form" ]

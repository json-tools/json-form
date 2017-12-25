module JsonFormApp exposing (main)

import Html exposing (Html, programWithFlags)
import Json.Encode as Encode exposing (Value)
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
import StatefulComponent.Form as Form


type alias View =
    Element Styles Variations Msg


type Msg
    = FormMsg Form.Msg


type alias Model =
    { form : Form.Model
    }


init : Value -> ( Model, Cmd Msg )
init v =
    { form = Form.init v
    }
        ! []


view : Model -> Html Msg
view model =
    Element.viewport stylesheet
        (Form.view model.form |> Element.map FormMsg)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FormMsg m ->
            let
                ( fm, fc ) =
                    Form.update m model.form
            in
                { model | form = fm } ! [ fc |> Cmd.map FormMsg ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Value Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

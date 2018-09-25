module Demo exposing (init, update, view)

import Browser exposing (Document)
import Html exposing (Html, div, h3, h4, pre, text)
import Html.Attributes exposing (class, classList, style)
import Html.Events exposing (onClick)
import Json.Encode as Encode exposing (Value)
import Json.Form
import Json.Form.Config exposing (TextFieldStyle(..))
import Json.Schema.Definitions exposing (Schema)
import Json.Value exposing (JsonValue(..))
import Snippets exposing (Snippet(..), getSnippet, getSnippetTitle)


type alias Model =
    { showcase : Snippet
    , forms : List Json.Form.Model
    }


initialShowcase : Snippet
initialShowcase =
    InputTypes


init : Value -> ( Model, Cmd Msg )
init _ =
    { showcase = initialShowcase
    , forms = []
    }
        |> update (SetShowcase initialShowcase)


type Msg
    = SetShowcase Snippet
    | JsonFormMsg Int Json.Form.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        JsonFormMsg index msg ->
            let
                ( forms, cmds ) =
                    model.forms
                        |> List.indexedMap
                            (\i form ->
                                if i == index then
                                    Json.Form.update msg form
                                        |> Tuple.first
                                        |> Tuple.mapSecond (Cmd.map (JsonFormMsg index))

                                else
                                    ( form, Cmd.none )
                            )
                        |> List.unzip
            in
            ( { model
                | forms = forms
              }
            , Cmd.batch cmds
            )

        SetShowcase s ->
            let
                ( forms, cmds ) =
                    getSnippet s
                        |> List.indexedMap
                            (\index schema ->
                                let
                                    config =
                                        { name = "form" ++ String.fromInt index
                                        , dense = True
                                        , textFieldStyle = Outlined
                                        }
                                in
                                Json.Form.init config schema Nothing
                                    |> Tuple.mapSecond (Cmd.map (JsonFormMsg index))
                            )
                        |> List.unzip
            in
            ( { model
                | showcase = s
                , forms = forms
              }
            , Cmd.batch cmds
            )


view : Model -> Document Msg
view model =
    { title = "Demo"
    , body =
        [ topbar model
        , content model
        ]
    }


topbar : Model -> Html Msg
topbar model =
    Snippets.index
        |> List.map (snippetTab model.showcase)
        |> div [ class "app-topbar" ]


snippetTab : Snippet -> Snippet -> Html Msg
snippetTab activeSnippet snippet =
    div
        [ classList
            [ ( "tab", True )
            , ( "tab--active", snippet == activeSnippet )
            ]
        , onClick <| SetShowcase snippet
        ]
        [ snippet
            |> getSnippetTitle
            |> text
        ]


content : Model -> Html Msg
content model =
    let
        generatedForm index form =
            div [ class "example-section" ]
                [ div [ style "width" "50%", style "display" "inline-block", style "max-width" "300px" ]
                    [ form
                        |> Json.Form.view
                        |> Html.map (JsonFormMsg index)
                    ]
                , form.schema |> viewSchema
                ]
    in
    div [ class "app-content" ]
        [ h3 [ style "padding" "8px", style "border-bottom" "1px solid #e8e8e8" ] [ text <| "Showcase: " ++ getSnippetTitle model.showcase ]
        , div []
            [ model.forms |> List.indexedMap generatedForm |> div []
            ]
        ]


viewSchema : Schema -> Html msg
viewSchema s =
    let
        code =
            s
                |> Json.Schema.Definitions.encode
                |> Json.Encode.encode 2
    in
    Html.node "code-sample" [ class "schema-source", Html.Attributes.attribute "code" code ] []

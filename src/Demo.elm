module Demo exposing (init, update, view)

import Html exposing (Html, div, h3, h4, pre, text)
import Html.Attributes exposing (class, classList, style)
import Html.Events exposing (onClick)
import Json.Encode
import Json.Form
import Json.Schema.Definitions
import Json.Value as JsonValue exposing (JsonValue)
import JsonViewer
import Snippets exposing (Snippet(..), getSnippet, getSnippetTitle)


type alias Model =
    { showcase : Snippet
    , form : Json.Form.Model
    , editedValue : Maybe JsonValue
    , expandedNodes : JsonViewer.ExpandedNodes
    }


initialShowcase : Snippet
initialShowcase =
    Rules


init : ( Model, Cmd Msg )
init =
    { showcase = initialShowcase
    , form = Json.Form.init (getSnippet initialShowcase) Nothing
    , editedValue = Nothing
    , expandedNodes = [ [] ]
    }
        ! []


type Msg
    = SetShowcase Snippet
    | JsonFormMsg Json.Form.Msg
    | ToggleNode JsonViewer.Path


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        JsonFormMsg msg ->
            let
                ( ( m, cmd ), exMsg ) =
                    Json.Form.update msg model.form
            in
            { model
                | form = m
                , editedValue =
                    case exMsg of
                        Json.Form.UpdateValue v _ ->
                            v

                        _ ->
                            model.editedValue
            }
                ! [ cmd |> Cmd.map JsonFormMsg ]

        ToggleNode path ->
            { model
                | expandedNodes =
                    model.expandedNodes
                        |> JsonViewer.toggle path
            }
                ! []

        SetShowcase s ->
            { model | showcase = s, form = Json.Form.init (getSnippet s) Nothing, editedValue = Nothing } ! []


view : Model -> Html Msg
view model =
    div []
        [ topbar model
        , content model
        ]


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
        jsonSchema =
            div [ style [ ( "width", "50%" ), ( "vertical-align", "top" ), ( "display", "inline-block" ), ( "min-width", "300px" ), ( "max-width", "80ch" ), ( "overflow", "auto" ) ] ]
                [ h4 [] [ text <| "JSON Schema" ]
                , pre [ style [ ( "line-height", "1.3" ) ] ] [ getSnippet model.showcase |> Json.Schema.Definitions.encode |> Json.Encode.encode 4 |> text ]
                ]

        generatedForm =
            div [ style [ ( "width", "50%" ), ( "display", "inline-block" ), ( "min-width", "300px" ) ] ]
                [ model.form
                    |> Json.Form.view
                    |> Html.map JsonFormMsg
                , h4 [] [ text <| "Result" ]
                , model.editedValue
                    |> Maybe.map
                        (JsonViewer.view
                            { expandedNodes = model.expandedNodes
                            , onToggle = ToggleNode
                            }
                            []
                        )
                    |> Maybe.withDefault (text "")
                ]
    in
    div [ class "app-content" ]
        [ h3 [ style [ ( "padding", "8px" ), ( "border-bottom", "1px solid #e8e8e8" ) ] ] [ text <| "Showcase: " ++ getSnippetTitle model.showcase ]
        , div [ style [] ]
            [ generatedForm
            , jsonSchema
            ]
        ]

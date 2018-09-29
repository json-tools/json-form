module Demo exposing (init, update, view)

import Browser exposing (Document)
import Html exposing (Html, div, span, text)
import Html.Attributes exposing (class, classList, style)
import Html.Events exposing (onClick)
import Json.Encode as Encode exposing (Value)
import Json.Form
import Json.Form.Config exposing (TextFieldStyle(..))
import Json.Schema.Definitions exposing (Schema)
import Json.Value exposing (JsonValue(..))
import Snippets exposing (Example, Snippet(..), getSnippet, getSnippetTitle)


type alias ExampleDemo =
    { form : Json.Form.Model
    , example : Example
    }


type alias Model =
    { showcase : Snippet
    , examples : List ExampleDemo
    }


initialShowcase : Snippet
initialShowcase =
    InputTypes


init : Value -> ( Model, Cmd Msg )
init _ =
    { showcase = initialShowcase
    , examples = []
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
                ( examples, cmds ) =
                    model.examples
                        |> List.indexedMap
                            (\i { form, example } ->
                                if i == index then
                                    Json.Form.update msg form
                                        |> Tuple.first
                                        |> Tuple.mapFirst (\f -> { form = f, example = example })
                                        |> Tuple.mapSecond (JsonFormMsg index |> Cmd.map)

                                else
                                    ( { form = form, example = example }, Cmd.none )
                            )
                        |> List.unzip
            in
            ( { model
                | examples = examples
              }
            , Cmd.batch cmds
            )

        SetShowcase s ->
            let
                ( examples, cmds ) =
                    getSnippet s
                        |> List.indexedMap
                            (\index example ->
                                let
                                    config =
                                        { name = "form" ++ String.fromInt index
                                        , dense = True
                                        , textFieldStyle = Outlined
                                        }
                                in
                                Json.Form.init config example.schema Nothing
                                    |> Tuple.mapFirst (\form -> { form = form, example = example })
                                    |> Tuple.mapSecond (JsonFormMsg index |> Cmd.map)
                            )
                        |> List.unzip
            in
            ( { model
                | showcase = s
                , examples = examples
              }
            , Cmd.batch cmds
            )


view : Model -> Document Msg
view model =
    { title = "Json Form Demo"
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
        viewExample index { form, example } =
            div [ class "example-section" ]
                [ Html.h3 [ class "example-section__heading" ] [ text example.title ]
                , div [ class "example-section__content" ]
                    [ div [ style "display" "inline-block", style "max-width" "300px", style "min-width" "300px" ]
                        [ div [ style "padding" "10px", style "background" "var(--form-background)" ]
                            [ form
                                |> Json.Form.view
                                |> Html.map (JsonFormMsg index)
                            ]
                            |> cardWithTitle "Form"
                        , form.value
                            |> Maybe.map viewValue
                            |> Maybe.withDefault (text " ")
                            |> (\x -> div [ class "json-view" ] [ x ])
                            |> cardWithTitle "Data"
                            |> (\x -> div [ style "margin-top" "20px" ] [ x ])
                        ]
                    , div [ style "width" "100%", style "min-width" "300px" ] [ example.schema |> viewSchema ]
                    ]
                ]
    in
    div [ class "app-content" ]
        [ model.examples |> List.indexedMap viewExample |> div []
        ]


viewValue : JsonValue -> Html msg
viewValue v =
    let
        str c =
            Encode.string >> Encode.encode 0 >> val c

        val c s =
            span [ class <| "json-view__" ++ c ] [ text s ]
    in
    case v of
        NumericValue n ->
            n
                |> String.fromFloat
                |> val "number"

        NullValue ->
            "null"
                |> val "null"

        BoolValue b ->
            (if b then
                "true"

             else
                "false"
            )
                |> val "bool"

        StringValue s ->
            s |> str "string"

        ObjectValue props ->
            let
                lastIndex =
                    List.length props - 1
            in
            [ text "{"
            , props
                |> List.indexedMap
                    (\index ( key, vv ) ->
                        span []
                            [ key |> str "attr"
                            , text ": "
                            , viewValue vv
                            , if index == lastIndex then
                                text "\n"

                              else
                                text ",\n"
                            ]
                    )
                |> div [ class "json-view__nested-props" ]
            , text "}"
            ]
                |> span []

        ArrayValue items ->
            let
                lastIndex =
                    List.length items - 1
            in
            [ text "["
            , items
                |> List.indexedMap
                    (\index vv ->
                        span []
                            [ index |> String.fromInt |> val "attr"
                            , text ": "
                            , viewValue vv
                            , if index == lastIndex then
                                text "\n"

                              else
                                text ",\n"
                            ]
                    )
                |> div [ class "json-view__nested-props" ]
            , text "]"
            ]
                |> span []


viewSchema : Schema -> Html msg
viewSchema s =
    let
        code =
            s
                |> Json.Schema.Definitions.encode
                |> Json.Value.decodeValue
    in
    viewValue code
        |> (\x -> div [ class "json-view" ] [ x ])
        |> cardWithTitle "Schema"


cardWithTitle : String -> Html msg -> Html msg
cardWithTitle title cardContent =
    div [ class "card", style "width" "100%" ]
        [ span [ class "card__title" ] [ text title ]
        , cardContent
        ]

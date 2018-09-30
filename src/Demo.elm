module Demo exposing (Msg(..), init, update, view)

import Browser exposing (Document, UrlRequest(..))
import Browser.Navigation exposing (Key)
import Html exposing (Html, div, span, text)
import Html.Attributes exposing (class, classList, style)
import Html.Events exposing (onClick)
import Json.Encode as Encode exposing (Value)
import Json.Form
import Json.Form.Config exposing (TextFieldStyle(..))
import Json.Schema.Definitions exposing (Schema)
import Json.Value exposing (JsonValue(..))
import Route exposing (Route(..))
import Showcase exposing (Example, Showcase(..), getShowcase, getShowcaseTitle)
import Url exposing (Url)


type alias ExampleDemo =
    { form : Json.Form.Model
    , example : Example
    }


type alias Model =
    { showcase : Showcase
    , examples : List ExampleDemo
    , key : Key
    }


defaultShowcase : Showcase
defaultShowcase =
    InputTypes


init : Value -> Url -> Key -> ( Model, Cmd Msg )
init _ url key =
    { showcase = defaultShowcase
    , examples = []
    , key = key
    }
        |> update (url |> Route.fromLocation |> SetRoute)


type Msg
    = SetShowcase Showcase
    | JsonFormMsg Int Json.Form.Msg
    | SetRoute (Maybe Route)
    | UrlRequested UrlRequest


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        UrlRequested urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model
                    , Browser.Navigation.pushUrl model.key (Url.toString url)
                    )

                External url ->
                    ( model
                    , Browser.Navigation.load url
                    )

        SetRoute route ->
            case route of
                Just (ShowcasePage sc) ->
                    model |> update (SetShowcase sc)

                _ ->
                    model |> update (SetShowcase defaultShowcase)

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
                    getShowcase s
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
    Showcase.index
        |> List.map (snippetTab model.showcase)
        |> div [ class "app-topbar" ]


snippetTab : Showcase -> Showcase -> Html Msg
snippetTab activeShowcase showcase =
    div
        [ classList
            [ ( "tab", True )
            , ( "tab--active", showcase == activeShowcase )
            ]
        ]
        [ Html.a [ Route.href <| ShowcasePage showcase ]
            [ showcase
                |> getShowcaseTitle
                |> text
            ]
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

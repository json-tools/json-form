module StatefulComponent.Form exposing (Model, Msg, init, update, view)

import Json.Decode as Decode exposing (decodeValue)
import Json.Encode as Encode exposing (Value)
import JsonValue exposing (JsonValue(..))
import Json.Schema.Definitions exposing (Schema(ObjectSchema, BooleanSchema))
import Element.Events as Events exposing (onInput, onClick)
import FeatherIcons as Icons
import Element.Attributes as Attributes
    exposing
        ( center
        , verticalCenter
        , vary
        , inlineStyle
        , spacing
        , padding
        , paddingLeft
        , height
        , minWidth
        , width
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
            , TextInput
            )
        , Variations
        , stylesheet
        )


type alias View =
    Element Styles Variations Msg


type alias Path =
    List String


type Msg
    = NoOp
    | StringInput Path String
    | DeleteKey Path String


type alias Model =
    { value : JsonValue
    , schema : Schema
    }


init : Schema -> Value -> Model
init schema value =
    { value =
        value
            |> decodeValue JsonValue.decoder
            |> Result.withDefault JsonValue.NullValue
    , schema = schema
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []

        StringInput path str ->
            { model
                | value =
                    model.value
                        |> JsonValue.setIn path (StringValue str)
                        |> Result.mapError (Debug.log "StringInput")
                        |> Result.withDefault model.value
            }
                ! []

        DeleteKey path str ->
            { model
                | value =
                    model.value
                        |> JsonValue.deleteIn (path ++ [ str ])
                        |> Result.mapError (Debug.log "DeleteKey")
                        |> Result.withDefault model.value
            }
                ! []


view : Model -> View
view model =
    viewValue model model.value []


delete : Path -> String -> View
delete path key =
    Icons.xCircle
        |> Icons.withStrokeWidth 1
        |> Icons.withSize 18
        |> Icons.toHtml []
        |> Element.html
        |> el None
            [ onClick <| DeleteKey path key
            , width <| px 18
            , height <| px 18
            ]


viewObject : Model -> List ( String, JsonValue ) -> Path -> View
viewObject model props path =
    props
        |> List.map
            (\( key, value ) ->
                column None
                    []
                    [ row None
                        [ verticalCenter, spacing 5, width <| px 200 ]
                        [ text key
                        , delete path key
                        ]
                    , row None
                        []
                        [ viewValue model value (path ++ [ key ])
                        ]
                    ]
            )
        |> column None [ paddingLeft 10 ]


viewArray : Model -> List JsonValue -> Path -> View
viewArray model list path =
    list
        |> List.indexedMap
            (\index value ->
                column None
                    []
                    [ row None
                        [ verticalCenter, spacing 5, width <| px 200 ]
                        [ text <| toString index
                        , delete path (toString index)
                        ]
                    , row None
                        [ verticalCenter, spacing 5, width <| fill 1 ]
                        [ viewValue model value (path ++ [ toString index ])
                        ]
                    ]
            )
        |> column None [ paddingLeft 10 ]


viewString : Model -> String -> Path -> View
viewString model stringValue path =
    row None
        []
        [ stringValue
            |> Element.inputText TextInput [ onInput <| StringInput path ]
        ]


viewValue : Model -> JsonValue -> Path -> View
viewValue model value path =
    case value of
        ObjectValue ov ->
            viewObject model ov path

        ArrayValue av ->
            viewArray model av path

        StringValue sv ->
            viewString model sv path

        _ ->
            text "something else"

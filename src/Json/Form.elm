module Json.Form
    exposing
        ( Model
        , Msg(..)
        , ExternalMsg(..)
        , init
        , update
        , view
        )

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Schema.Definitions exposing (..)
import Json.Schema
import Json.Schema.Validation exposing (Error)
import JsonValue exposing (JsonValue)
import Json.Decode exposing (decodeValue)
import ErrorMessages exposing (stringifyError)
import Dict exposing (Dict)


type Msg
    = FocusInput (Maybe Path)
    | EditValue Path JsonValue


type ExternalMsg
    = None
    | UpdateValue (Maybe JsonValue)


type EditingMode
    = TextField
    | JsonEditor
    | Object


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    }


type alias Path =
    List String


init : Schema -> Model
init s =
    { schema = s
    , focused = Nothing
    , value = Nothing
    , errors = Dict.empty
    , beingEdited = []
    }


view : Model -> Html Msg
view model =
    viewNode model model.schema []


viewNode : Model -> Schema -> Path -> Html Msg
viewNode model schema path =
    case editingMode model schema of
        TextField ->
            viewTextField model schema path

        Object ->
            viewObject model schema path

        _ ->
            text "Not implemented"


editingMode : Model -> Schema -> EditingMode
editingMode model schema =
    case schema of
        ObjectSchema os ->
            case os.type_ of
                SingleType StringType ->
                    TextField

                SingleType ObjectType ->
                    Object

                _ ->
                    JsonEditor

        _ ->
            JsonEditor


viewTextField : Model -> Schema -> Path -> Html Msg
viewTextField model schema path =
    let
        jsonValueToString jv =
            case jv of
                JsonValue.StringValue s ->
                    s

                JsonValue.NumericValue n ->
                    toString n

                _ ->
                    ""

        editedValue =
            model.value
                |> Maybe.map (JsonValue.getIn path)
                |> Maybe.andThen Result.toMaybe
                |> Maybe.map jsonValueToString
                |> Maybe.withDefault ""

        errors =
            model.errors
                |> Dict.get path

        hasError =
            errors /= Nothing && List.member path model.beingEdited
    in
        div
            [ classList
                [ ( "jf-textfield", True )
                , ( "jf-textfield--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
                , ( "jf-textfield--empty", editedValue == "" )
                , ( "jf-textfield--invalid", hasError )
                ]
            ]
            [ input
                [ class "jf-textfield__input"
                , onFocus <| FocusInput (Just path)
                , onBlur <| FocusInput Nothing
                , onInput <| (\str -> EditValue path (JsonValue.StringValue str))
                , value <| editedValue
                ]
                []
            , label [ class "jf-textfield__label" ] [ schema |> getTitle |> text ]
            , div [ class "jf-textfield__helper-text" ]
                [ if hasError then
                    errors
                        |> Maybe.withDefault []
                        |> String.join ", "
                        |> (++) "Error: "
                        |> text
                  else
                    schema
                        |> getDescription
                        |> text
                ]
            ]


viewObject : Model -> Schema -> Path -> Html Msg
viewObject model schema path =
    let
        iterateOverSchemata propsDict required (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        viewNode model subSchema (path ++ [ propName ])
                    )
    in
        case schema of
            ObjectSchema os ->
                os.properties
                    |> Maybe.map (iterateOverSchemata Dict.empty os.required)
                    |> Maybe.withDefault []
                    |> div []

            _ ->
                text ""


update : Msg -> Model -> ( ( Model, Cmd Msg ), ExternalMsg )
update msg model =
    case msg of
        FocusInput focused ->
            { model
                | focused = focused
                , beingEdited =
                    if focused == Nothing then
                        model.beingEdited
                            |> (::) (model.focused |> Maybe.withDefault [])
                    else
                        model.beingEdited
            }
                ! []
                => None

        EditValue path val ->
            let
                updatedJsonValue =
                    model.value
                        |> Maybe.withDefault JsonValue.NullValue
                        |> JsonValue.setIn path val
                        |> Result.toMaybe
                        |> Maybe.withDefault JsonValue.NullValue

                updatedValue =
                    updatedJsonValue
                        |> JsonValue.encode

                validationResult =
                    model.schema
                        |> Json.Schema.validateValue { applyDefaults = False } updatedValue
            in
                (case validationResult of
                    Ok v ->
                        { model
                            | value =
                                v
                                    |> decodeValue JsonValue.decoder
                                    |> Result.toMaybe
                            , errors = Dict.empty
                        }
                            ! []

                    Err e ->
                        { model
                            | value = Just updatedJsonValue
                            , errors = dictFromListErrors e
                        }
                            ! []
                )
                    => UpdateValue (Just updatedJsonValue)


dictFromListErrors : List Error -> Dict Path (List String)
dictFromListErrors list =
    list
        |> List.foldl
            (\error dict ->
                dict
                    |> Dict.update error.jsonPointer.path
                        (\listDetails ->
                            (case listDetails of
                                Just l ->
                                    l ++ [ error.details |> stringifyError ]

                                Nothing ->
                                    [ error.details |> stringifyError ]
                            )
                                |> Just
                        )
            )
            Dict.empty


getTitle : Schema -> String
getTitle schema =
    getTextProp schema .title ""


getDescription : Schema -> String
getDescription schema =
    getTextProp schema .description ""


getTextProp : Schema -> (SubSchema -> Maybe String) -> String -> String
getTextProp schema prop def =
    case schema of
        ObjectSchema os ->
            os
                |> prop
                |> Maybe.withDefault def

        _ ->
            def


(=>) : a -> b -> ( a, b )
(=>) a b =
    ( a, b )

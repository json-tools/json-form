module Json.Form exposing
    ( ExternalMsg(..)
    , Model
    , Msg
    , init
    , update
    , updateConfig
    , view
    )

import Dict exposing (Dict)
import Dom
import ErrorMessages exposing (stringifyError)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (decodeValue)
import Json.Form.Config exposing (Config)
import Json.Form.Definitions as Definitions exposing (EditingMode(..), Msg(..), Path)
import Json.Form.Selection as Selection
import Json.Form.TextField as TextField
import Json.Form.UiSpec as UiSpec exposing (applyRule)
import Json.Schema
import Json.Schema.Definitions exposing (..)
import Json.Schema.Validation exposing (Error)
import Json.Value as JsonValue exposing (JsonValue(..))
import JsonFormUtil as Util exposing ((=>), getUiSpec, jsonValueToString)
import Task


type ExternalMsg
    = None
    | UpdateValue (Maybe JsonValue) Bool


type alias Model =
    Definitions.Model


type alias Msg =
    Definitions.Msg


init : Config -> Schema -> Maybe JsonValue -> Model
init =
    Definitions.init


view : Model -> Html Msg
view model =
    viewNode model model.schema False False []


viewNode : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewNode model schema isRequired isDisabled path =
    case editingMode model schema of
        TextField ->
            TextField.view model schema isRequired isDisabled path

        NumberField ->
            TextField.viewNumeric model schema isRequired isDisabled path

        Switch ->
            Selection.switch model schema isRequired isDisabled path

        Checkbox ->
            Selection.checkbox model schema isRequired isDisabled path

        Object ->
            viewObject model schema isRequired isDisabled path

        Array ->
            viewArray model schema isRequired isDisabled path

        x ->
            text (toString x ++ ": not implemented")


editingMode : Model -> Schema -> EditingMode
editingMode model schema =
    case schema of
        ObjectSchema os ->
            case os.type_ of
                SingleType NumberType ->
                    NumberField

                SingleType StringType ->
                    TextField

                SingleType BooleanType ->
                    getBooleanUiWidget schema

                SingleType ObjectType ->
                    Object

                SingleType ArrayType ->
                    Array

                _ ->
                    JsonEditor

        _ ->
            JsonEditor


getBooleanUiWidget : Schema -> EditingMode
getBooleanUiWidget schema =
    case schema |> getUiSpec |> .widgetType of
        Just UiSpec.Switch ->
            Switch

        _ ->
            Checkbox


viewArray : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewArray model schema isRequired isDisabled path =
    let
        ( disabled, hidden ) =
            schema
                |> getUiSpec
                |> .rule
                |> applyRule model.value path

        list =
            model.value
                |> Maybe.withDefault JsonValue.NullValue
                |> JsonValue.getIn path
                |> Result.withDefault (JsonValue.ArrayValue [])
                |> (\list ->
                        case list of
                            ArrayValue items ->
                                items

                            _ ->
                                []
                   )
    in
    if hidden then
        text ""

    else
        case schema of
            ObjectSchema os ->
                case os.items of
                    ItemDefinition itemSchema ->
                        [ list
                            |> List.indexedMap
                                (\index item ->
                                    let
                                        propName =
                                            index |> toString

                                        isRequired =
                                            case itemSchema of
                                                ObjectSchema itemSchemaObject ->
                                                    itemSchemaObject.required
                                                        |> Maybe.withDefault []
                                                        |> List.member propName

                                                _ ->
                                                    False
                                    in
                                    viewNode model itemSchema isRequired (isDisabled || disabled) (path ++ [ propName ])
                                )
                            |> div []
                        , button [ class "button", onClick <| AddItem path (List.length list) ] [ text "ADD ITEM" ]
                        ]
                            |> div []

                    {-
                       div []
                           [ text "TODO: Implement array editing"
                           ]
                    -}
                    _ ->
                        text ""

            _ ->
                text ""


viewObject : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewObject model schema isRequired isDisabled path =
    let
        iterateOverSchemata propsDict required (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        viewNode model subSchema (required |> Maybe.withDefault [] |> List.member propName) (isDisabled || disabled) (path ++ [ propName ])
                    )

        ( disabled, hidden ) =
            schema
                |> getUiSpec
                |> .rule
                |> applyRule model.value path
    in
    if hidden then
        text ""

    else
        case schema of
            ObjectSchema os ->
                os.properties
                    |> Maybe.map (iterateOverSchemata Dict.empty os.required)
                    |> Maybe.withDefault []
                    |> div []

            _ ->
                text ""


updateConfig : Config -> Model -> Model
updateConfig config model =
    { model | config = config }


update : Msg -> Model -> ( ( Model, Cmd Msg ), ExternalMsg )
update msg model =
    case msg of
        NoOp ->
            model ! [] => None

        AddItem path index ->
            let
                newPropPath =
                    path ++ [ index |> toString ]

                updatedModel =
                    case model.value |> Maybe.andThen (JsonValue.getIn path >> Result.toMaybe) of
                        Just _ ->
                            model

                        Nothing ->
                            { model
                                | value =
                                    model.value
                                        |> Maybe.withDefault NullValue
                                        |> JsonValue.setIn path (ArrayValue [])
                                        |> Result.toMaybe
                            }
            in
            editValue updatedModel newPropPath JsonValue.NullValue

        FocusInput focused ->
            { model
                | focused = focused
                , beingEdited = touch focused model.focused model.beingEdited
            }
                ! []
                => None

        FocusNumericInput focused ->
            case focused of
                Nothing ->
                    editValue
                        { model | beingEdited = touch focused model.focused model.beingEdited, focused = focused }
                        (model.focused |> Maybe.withDefault [])
                        (case model.editedNumber |> String.toFloat of
                            Ok num ->
                                JsonValue.NumericValue num

                            _ ->
                                JsonValue.StringValue model.editedNumber
                        )

                Just somePath ->
                    { model
                        | focused = focused
                        , editedNumber =
                            model.value
                                |> Maybe.map (JsonValue.getIn somePath)
                                |> Maybe.andThen Result.toMaybe
                                |> Maybe.map jsonValueToString
                                |> Maybe.withDefault ""
                    }
                        ! []
                        => None

        EditValue path val ->
            editValue model path val

        EditNumber str ->
            case str |> String.toFloat of
                Ok num ->
                    editValue { model | editedNumber = str } (model.focused |> Maybe.withDefault []) (JsonValue.NumericValue num)

                _ ->
                    { model | editedNumber = str } ! [] => None


touch : Maybe Path -> Maybe Path -> List Path -> List Path
touch path focused beingEdited =
    if path == Nothing then
        beingEdited
            |> (::) (focused |> Maybe.withDefault [])

    else
        beingEdited


editValue : Model -> Path -> JsonValue -> ( ( Model, Cmd Msg ), ExternalMsg )
editValue model path val =
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
                |> Json.Schema.validateValue { applyDefaults = True } updatedValue
    in
    case validationResult of
        Ok v ->
            { model
                | value =
                    v
                        |> decodeValue JsonValue.decoder
                        |> Result.toMaybe
                , errors = Dict.empty
            }
                ! []
                => UpdateValue (Just updatedJsonValue) True

        Err e ->
            { model
                | value = Just updatedJsonValue
                , errors = dictFromListErrors e
            }
                ! []
                => UpdateValue (Just updatedJsonValue) False


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

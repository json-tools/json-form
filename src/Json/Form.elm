module Json.Form exposing
    ( ExternalMsg(..)
    , Model
    , Msg
    , init
    , update
    , updateConfig
    , view
    )

import Browser.Dom
import Dict exposing (Dict)
import ErrorMessages exposing (stringifyError)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Json.Decode as Decode exposing (decodeValue)
import Json.Encode as Encode
import Json.Form.Config exposing (Config)
import Json.Form.Definitions as Definitions exposing (EditingMode(..), Msg(..), Path)
import Json.Form.Selection as Selection
import Json.Form.TextField as TextField
import Json.Form.UiSpec as UiSpec exposing (Widget(..), applyRule)
import Json.Schema
import Json.Schema.Definitions exposing (..)
import Json.Schema.Validation exposing (Error)
import Json.Value as JsonValue exposing (JsonValue(..))
import JsonFormUtil as Util exposing (getUiSpec, jsonValueToString)
import Task


type ExternalMsg
    = None
    | UpdateValue (Maybe JsonValue) Bool


type alias Model =
    Definitions.Model


type alias Msg =
    Definitions.Msg


view : Model -> Html Msg
view model =
    Html.div [] [ viewNode model model.schema False False [] ]


viewNode : Model -> Schema -> Bool -> Bool -> Path -> Html Msg
viewNode model schema isRequired isDisabled path =
    case editingMode model schema of
        TextField ->
            TextField.view model schema False isRequired isDisabled path

        NumberField ->
            TextField.viewNumeric model schema isRequired isDisabled path

        Definitions.Switch ->
            Selection.switch model schema isRequired isDisabled path

        Checkbox ->
            Selection.checkbox model schema isRequired isDisabled path

        Object properties ->
            viewObject model schema properties isRequired isDisabled path

        Array ->
            viewArray model schema isRequired isDisabled path

        JsonEditor ->
            TextField.view model schema True isRequired isDisabled path


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
                    case os.properties of
                        Just schemata ->
                            Object schemata

                        Nothing ->
                            JsonEditor

                SingleType ArrayType ->
                    Array

                _ ->
                    JsonEditor

        _ ->
            JsonEditor


getBooleanUiWidget : Schema -> EditingMode
getBooleanUiWidget schema =
    case schema |> getUiSpec |> .widget of
        Just UiSpec.Switch ->
            Definitions.Switch

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
                |> (\l ->
                        case l of
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
                                            index |> String.fromInt

                                        isRequiredLocal =
                                            case itemSchema of
                                                ObjectSchema itemSchemaObject ->
                                                    itemSchemaObject.required
                                                        |> Maybe.withDefault []
                                                        |> List.member propName

                                                _ ->
                                                    False
                                    in
                                    viewNode model itemSchema isRequiredLocal (isDisabled || disabled) (path ++ [ propName ])
                                )
                            |> div []
                        , div [ class "array-item-add" ]
                            [ button [ class "button", onClick <| AddItem path (List.length list) ] [ text "ADD ITEM" ]
                            ]
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


viewObject : Model -> Schema -> Schemata -> Bool -> Bool -> Path -> Html Msg
viewObject model schema properties isRequired isDisabled path =
    let
        iterateOverSchemata (Schemata schemata) =
            schemata
                |> List.map
                    (\( propName, subSchema ) ->
                        viewNode model
                            subSchema
                            (required |> List.member propName)
                            (isDisabled || disabled)
                            (path ++ [ propName ])
                    )

        ( disabled, hidden ) =
            schema
                |> getUiSpec
                |> .rule
                |> applyRule model.value path

        required =
            case schema of
                ObjectSchema os ->
                    os.required |> Maybe.withDefault []

                _ ->
                    []
    in
    if hidden then
        text ""

    else
        properties
            |> iterateOverSchemata
            |> div []


updateConfig : Config -> Model -> Model
updateConfig config model =
    { model | config = config }


update : Msg -> Model -> ( ( Model, Cmd Msg ), ExternalMsg )
update msg model =
    case msg of
        NoOp ->
            ( model
            , Cmd.none
            )
                |> withExMsg None

        AddItem path index ->
            let
                newPropPath =
                    path ++ [ index |> String.fromInt ]

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
            ( { model
                | focused = focused
                , beingEdited = touch focused model.focused model.beingEdited
              }
            , Cmd.none
            )
                |> withExMsg None

        FocusTextInput focused ->
            ( { model
                | focused = Just focused
                , beingEdited = touch (Just focused) model.focused model.beingEdited
              }
            , focused |> String.join "_" |> Browser.Dom.focus |> Task.attempt (\_ -> NoOp)
            )
                |> withExMsg None

        FocusFragileInput isNumber focused ->
            case focused of
                Nothing ->
                    if isNumber then
                        editValue
                            { model | beingEdited = touch focused model.focused model.beingEdited, focused = Nothing }
                            (model.focused |> Maybe.withDefault [])
                            (case model.editedJson |> String.toFloat of
                                Just num ->
                                    JsonValue.NumericValue num

                                _ ->
                                    JsonValue.StringValue model.editedJson
                            )

                    else
                        ( { model | beingEdited = touch focused model.focused model.beingEdited, focused = Nothing }
                        , Cmd.none
                        )
                            |> withExMsg None

                Just somePath ->
                    ( { model
                        | focused = focused
                        , editedJson =
                            if isNumber then
                                model.value
                                    |> Maybe.map (JsonValue.getIn somePath)
                                    |> Maybe.andThen Result.toMaybe
                                    |> Maybe.map jsonValueToString
                                    |> Maybe.withDefault ""

                            else
                                model.value
                                    |> Maybe.withDefault (JsonValue.ObjectValue [])
                                    |> JsonValue.getIn somePath
                                    |> Result.toMaybe
                                    |> Maybe.map (JsonValue.encode >> Encode.encode 4)
                                    |> Maybe.withDefault ""
                      }
                    , Cmd.none
                    )
                        |> withExMsg None

        EditValue path val ->
            editValue model path val

        EditNumber str ->
            case str |> String.toFloat of
                Just num ->
                    editValue { model | editedJson = str } (model.focused |> Maybe.withDefault []) (JsonValue.NumericValue num)

                _ ->
                    ( { model | editedJson = str }
                    , Cmd.none
                    )
                        |> withExMsg None

        EditJson path height str ->
            case str |> Decode.decodeString JsonValue.decoder of
                Ok jv ->
                    editValue { model | editedJson = str, fieldHeights = model.fieldHeights |> Dict.insert path height } path jv

                _ ->
                    ( { model | editedJson = str }
                    , Cmd.none
                    )
                        |> withExMsg None

        EditMultiline path height str ->
            editValue { model | fieldHeights = model.fieldHeights |> Dict.insert path height } path (StringValue str)

        ToggleShowPassword ->
            ( { model | showPassword = not model.showPassword }
            , Cmd.none
            )
                |> withExMsg None

        GetViewport path res ->
            (case res of
                Ok viewport ->
                    ( { model | fieldHeights = model.fieldHeights |> Dict.insert path viewport.scene.height }
                    , Cmd.none
                    )

                Err _ ->
                    ( model
                    , Cmd.none
                    )
            )
                |> withExMsg None


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
            ( { model
                | value =
                    v
                        |> decodeValue JsonValue.decoder
                        |> Result.toMaybe
                , errors = Dict.empty
              }
            , Cmd.none
            )
                |> withExMsg (UpdateValue (Just updatedJsonValue) True)

        Err e ->
            ( { model
                | value = Just updatedJsonValue
                , errors = dictFromListErrors e
              }
            , Cmd.none
            )
                |> withExMsg (UpdateValue (Just updatedJsonValue) False)


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


withExMsg : a -> b -> ( b, a )
withExMsg a b =
    ( b, a )


init : Config -> Schema -> Maybe JsonValue -> ( Model, Cmd Msg )
init config schema v =
    let
        ( value, errors ) =
            case v of
                Just something ->
                    something |> JsonValue.encode |> initValue

                Nothing ->
                    case schema of
                        ObjectSchema os ->
                            case os.default of
                                Just def ->
                                    def |> initValue

                                Nothing ->
                                    case os.type_ of
                                        SingleType ObjectType ->
                                            Encode.object [] |> initValue

                                        _ ->
                                            ( Nothing, Dict.empty )

                        _ ->
                            ( Nothing, Dict.empty )

        initValue someValue =
            schema
                |> Json.Schema.validateValue { applyDefaults = True } someValue
                |> (\res ->
                        case res of
                            Ok updValue ->
                                ( updValue
                                    |> JsonValue.decodeValue
                                    |> Just
                                , Dict.empty
                                )

                            Err x ->
                                ( someValue |> JsonValue.decodeValue |> Just, dictFromListErrors x )
                   )

        multilineFieldsPaths =
            collectMultilinePaths [] [] schema
    in
    ( { schema = schema
      , focused = Nothing
      , config = config
      , value = value
      , errors = errors
      , beingEdited = []
      , editedJson = ""
      , showPassword = False
      , fieldHeights = Dict.empty
      }
    , multilineFieldsPaths
        |> List.map (\path -> Browser.Dom.getViewportOf (config.name ++ "_" ++ String.join "_" path) |> Task.attempt (GetViewport path))
        |> Cmd.batch
    )


collectMultilinePaths : List Path -> Path -> Schema -> List Path
collectMultilinePaths paths path schema =
    case schema of
        ObjectSchema os ->
            case os.type_ of
                SingleType NumberType ->
                    paths

                SingleType StringType ->
                    case schema |> getUiSpec |> .widget of
                        Just (UiSpec.MultilineTextField _) ->
                            path :: paths

                        _ ->
                            paths

                SingleType BooleanType ->
                    paths

                SingleType ObjectType ->
                    case os.properties of
                        Just (Schemata listProps) ->
                            listProps
                                |> List.foldl (\( key, propSchema ) res -> collectMultilinePaths res (path ++ [ key ]) propSchema) paths

                        _ ->
                            path :: paths

                SingleType ArrayType ->
                    paths

                _ ->
                    path :: paths

        _ ->
            path :: paths

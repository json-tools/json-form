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
import JsonValue exposing (JsonValue(..))
import Json.Decode as Decode exposing (decodeValue)
import ErrorMessages exposing (stringifyError)
import Dict exposing (Dict)


type Msg
    = FocusInput (Maybe Path)
    | FocusNumericInput (Maybe Path)
    | EditValue Path JsonValue
    | EditNumber String


type ExternalMsg
    = None
    | UpdateValue (Maybe JsonValue)


type EditingMode
    = TextField
    | NumberField
    | Switch
    | Checkbox
    | JsonEditor
    | Object


type alias Model =
    { schema : Schema
    , focused : Maybe Path
    , value : Maybe JsonValue
    , errors : Dict Path (List String)
    , beingEdited : List Path
    , editedNumber : String
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
    , editedNumber = ""
    }


view : Model -> Html Msg
view model =
    viewNode model model.schema []


viewNode : Model -> Schema -> Path -> Html Msg
viewNode model schema path =
    case editingMode model schema of
        TextField ->
            viewTextField model schema path

        NumberField ->
            viewNumericTextField model schema path

        Switch ->
            viewSwitch model schema path

        Checkbox ->
            viewCheckbox model schema path

        Object ->
            viewObject model schema path

        _ ->
            text "Not implemented"


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

                _ ->
                    JsonEditor

        _ ->
            JsonEditor


getBooleanUiWidget : Schema -> EditingMode
getBooleanUiWidget schema =
    schema
        |> getCustomKeywordValue "ui"
        |> Maybe.andThen
            (\settings ->
                settings
                    |> Decode.decodeValue
                        (Decode.field "booleanWidget" Decode.string
                            |> Decode.map
                                (\widget ->
                                    if widget == "switch" then
                                        Switch
                                    else
                                        Checkbox
                                )
                        )
                    |> Result.toMaybe
            )
        |> Maybe.withDefault Checkbox


viewSwitch : Model -> Schema -> Path -> Html Msg
viewSwitch model schema path =
    let
        isChecked =
            case model.value |> Maybe.andThen (JsonValue.getIn path >> Result.toMaybe) of
                Just (BoolValue x) ->
                    x

                _ ->
                    False

        ( hasError, helperText ) =
            renderHelper model schema path
    in
        label
            [ classList
                [ ( "jf-switch", True )
                , ( "jf-switch--on", isChecked )
                , ( "jf-switch--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
                , ( "jf-switch--invalid", hasError )
                ]
            ]
            [ input
                [ type_ "checkbox"
                , class "jf-switch__input"
                , checked isChecked
                , onFocus <| FocusInput (Just path)
                , onBlur <| FocusInput Nothing
                , onCheck <| (JsonValue.BoolValue >> EditValue path)
                ]
                []
            , span [ class "jf-switch__label" ] [ schema |> getTitle |> text ]
            , div [ class "jf-switch__track" ] []
            , div [ class "jf-switch__thumb" ] []
            , div [ class "jf-switch__helper-text" ] [ helperText ]
            ]


viewCheckbox : Model -> Schema -> Path -> Html Msg
viewCheckbox model schema path =
    let
        isChecked =
            case model.value |> Maybe.andThen (JsonValue.getIn path >> Result.toMaybe) of
                Just (BoolValue x) ->
                    x

                _ ->
                    False

        ( hasError, helperText ) =
            renderHelper model schema path
    in
        label
            [ classList
                [ ( "jf-checkbox", True )
                , ( "jf-checkbox--on", isChecked )
                , ( "jf-checkbox--focused", model.focused |> Maybe.map ((==) path) |> Maybe.withDefault False )
                , ( "jf-checkbox--invalid", hasError )
                ]
            ]
            [ input
                [ type_ "checkbox"
                , class "jf-checkbox__input"
                , checked isChecked
                , onFocus <| FocusInput (Just path)
                , onBlur <| FocusInput Nothing
                , onCheck <| (JsonValue.BoolValue >> EditValue path)
                ]
                []
            , span [ class "jf-checkbox__label" ] [ schema |> getTitle |> text ]
            , div [ class "jf-checkbox__box-outline" ]
                [ div [ class "jf-checkbox__tick-outline" ] []
                ]
            , div [ class "jf-checkbox__helper-text" ] [ helperText ]
            ]


jsonValueToString : JsonValue -> String
jsonValueToString jv =
    case jv of
        JsonValue.StringValue s ->
            s

        JsonValue.NumericValue n ->
            toString n

        _ ->
            ""


viewTextField : Model -> Schema -> Path -> Html Msg
viewTextField model schema path =
    let
        editedValue =
            model.value
                |> Maybe.map (JsonValue.getIn path)
                |> Maybe.andThen Result.toMaybe
                |> Maybe.map jsonValueToString
                |> Maybe.withDefault ""

        ( hasError, helperText ) =
            renderHelper model schema path
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
            , div [ class "jf-textfield__helper-text" ] [ helperText ]
            ]


viewNumericTextField : Model -> Schema -> Path -> Html Msg
viewNumericTextField model schema path =
    let
        isFocused =
            model.focused
                |> Maybe.map ((==) path)
                |> Maybe.withDefault False

        editedValue =
            if isFocused then
                model.editedNumber
            else
                model.value
                    |> Maybe.map (JsonValue.getIn path)
                    |> Maybe.andThen Result.toMaybe
                    |> Maybe.map jsonValueToString
                    |> Maybe.withDefault ""

        ( hasError, helperText ) =
            renderHelper model schema path
    in
        div
            [ classList
                [ ( "jf-textfield", True )
                , ( "jf-textfield--focused", isFocused )
                , ( "jf-textfield--empty", editedValue == "" )
                , ( "jf-textfield--invalid", hasError )
                ]
            ]
            [ input
                [ class "jf-textfield__input"
                , onFocus <| FocusNumericInput (Just path)
                , onBlur <| FocusNumericInput Nothing
                , onInput <| EditNumber
                , value <| editedValue
                , type_ "number"
                ]
                []
            , label [ class "jf-textfield__label" ] [ schema |> getTitle |> text ]
            , div [ class "jf-textfield__helper-text" ] [ helperText ]
            ]


renderHelper : Model -> Schema -> Path -> ( Bool, Html msg )
renderHelper model schema path =
    let
        errors =
            model.errors
                |> Dict.get path

        hasError =
            errors /= Nothing && List.member path model.beingEdited
    in
        ( hasError
        , if hasError then
            errors
                |> Maybe.withDefault []
                |> String.join ", "
                |> (++) "Error: "
                |> text
          else
            schema
                |> getDescription
                |> text
        )


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
                , beingEdited = touch focused model.focused model.beingEdited
            }
                ! []
                => None

        FocusNumericInput focused ->
            case focused of
                Nothing ->
                    editValue
                        { model | beingEdited = touch focused model.focused model.beingEdited }
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

module Json.Form.Config exposing (Config, TextFieldStyle(..), decoder, defaultConfig)

import Json.Decode as Decode exposing (Decoder, bool, fail, field, maybe, string, succeed)


type alias Config =
    { textFieldStyle : TextFieldStyle
    , dense : Bool
    , name : String
    , collapseNestedObjects : Bool
    }


type TextFieldStyle
    = Filled
    | Outlined


defaultConfig : Config
defaultConfig =
    { textFieldStyle = Outlined
    , dense = True
    , name = ""
    , collapseNestedObjects = False
    }


decoder : Decoder Config
decoder =
    Decode.map4 Config
        ((field "textFieldStyle" <|
            Decode.andThen
                (\x ->
                    if x == "filled" then
                        succeed Filled

                    else if x == "outlined" then
                        succeed Outlined

                    else
                        fail "Unknown text field style"
                )
            <|
                string
         )
            |> maybe
            |> Decode.map (Maybe.withDefault Outlined)
        )
        (field "dense" bool |> maybe |> Decode.map (Maybe.withDefault True))
        (field "name" string |> maybe |> Decode.map (Maybe.withDefault ""))
        (field "collapseNestedObjects" bool |> maybe |> Decode.map (Maybe.withDefault False))

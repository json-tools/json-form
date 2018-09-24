module Json.Form.Config exposing (Config, TextFieldStyle(..), decoder, defaultConfig)

import Json.Decode as Decode exposing (Decoder, bool, fail, field, maybe, string, succeed)


type alias Config =
    { textFieldStyle : TextFieldStyle
    , dense : Bool
    , name : String
    }


type TextFieldStyle
    = Filled
    | Outlined


defaultConfig : Config
defaultConfig =
    { textFieldStyle = Outlined
    , dense = True
    , name = ""
    }


decoder : Decoder Config
decoder =
    Decode.map3 Config
        (field "textFieldStyle" <|
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
        (field "dense" bool |> maybe |> Decode.map (Maybe.withDefault False))
        (field "name" string |> maybe |> Decode.map (Maybe.withDefault ""))

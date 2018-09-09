module Json.Form.Config exposing (Config, TextFieldStyle(..), decoder, defaultConfig)

import Json.Decode as Decode exposing (Decoder, bool, fail, field, string, succeed)


type alias Config =
    { textFieldStyle : TextFieldStyle
    , dense : Bool
    }


type TextFieldStyle
    = Filled
    | Outlined


defaultConfig : Config
defaultConfig =
    { textFieldStyle = Filled
    , dense = False
    }


decoder : Decoder Config
decoder =
    Decode.map2 Config
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
        (field "dense" bool)

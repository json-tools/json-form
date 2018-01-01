module Styles exposing (stylesheet, Styles(..), Variations(..))

import Style exposing (style, StyleSheet, hover)
import Color
import Style.Color as Color
import Style.Font as Font
import Style.Border as Border


type Styles
    = None
    | Main
    | PropertiesBlock
    | Bordered
    | Error
    | Button
    | NoOutline
    | MenuItem
    | HtmlAttribute
    | PropertyName
    | ItemIndex
    | PropertySeparator
    | PropertyValue
    | HtmlElement
    | SchemaHeader
    | JsonEditor
    | SourceCode
    | TextInput
    | InlineError
    | DataRowHint
    | InputRow
    | FocusedInputRow


type Variations
    = Active


sansSerifFont : Style.Property class variation
sansSerifFont =
    Style.prop "font-family" "'Libre Franklin', sans-serif"


fancyBlue : Color.Color
fancyBlue =
    Color.rgb 17 123 206


stylesheet : StyleSheet Styles Variations
stylesheet =
    Style.styleSheetWith []
        -- Style.unguarded ]
        [ style None []
          -- It's handy to have a blank style
        , style Main
            [ Color.text Color.darkCharcoal
            , Color.background Color.white
            , sansSerifFont
            , Font.size 14
            , Font.lineHeight 1.5
              -- line height, given as a ratio of current font size.
            ]
        , style PropertiesBlock
            [ Border.left 1
            , Style.prop "border-color" "transparent"
            , Style.prop "margin-left" "4ch"
            , Style.hover
                [ Style.prop "border-color" "rgba(0,0,0,0.05)"
                ]
            ]
        , style DataRowHint
            [ Style.cursor "text"
            , Style.prop "min-width" "1ch"
            , Style.prop "outline" "none"
              -- , Color.background Color.lightGreen
            ]
        , style Bordered
            [ Border.all 1
            , Color.border <| Color.rgb 230 230 230
            , Style.paddingHint 10
            ]
        , style Error
            [ Color.text Color.darkBrown
            , Color.background Color.white
            , Color.border Color.brown
            , Border.all 3
            , Border.rounded 3
            , Font.size 16
            , Style.paddingHint 5
            , Style.prop "margin" "10px"
            ]
        , style InlineError
            --[ Style.prop "border" "1px solid rgba(255,0,0,.5)"
            [ Style.prop "z-index" "1"
              --, Style.prop "background" "white"
            , Style.paddingHint 0
            , Color.text Color.red
            , sansSerifFont
              --, Style.prop "box-shadow" "0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)"
            ]
        , style HtmlAttribute
            [ Color.text Color.darkBlue
              --, Style.paddingLeftHint 5
            ]
        , style PropertyName
            [ Color.text Color.darkCharcoal
              --[ Style.prop "color" "#c80000"
            , Style.prop "outline" "none"
            , sansSerifFont
            , Font.size 14
            , Style.variation Active
                [ Color.text Color.lightBlue
                  --, Font.weight 700
                ]
            ]
        , style ItemIndex
            [ Color.text <| Color.rgb 160 160 160
            , Style.prop "outline" "none"
            ]
        , style PropertySeparator
            [ Color.text <| Color.rgb 120 120 120
              --, Style.prop "width" "2ch"
              --, Style.paddingRightHint 5
            , Style.prop "outline" "none"
            , Style.prop "white-space" "pre"
            ]
        , style PropertyValue
            [ Color.text Color.darkCharcoal
            , Style.prop "outline" "none"
            ]
        , style HtmlElement
            [ Font.typeface [ "Menlo", "monospace" ]
            , Font.size 11
            , Color.text Color.blue
            ]
        , style Button
            [ Font.bold
            , Font.typeface [ "Menlo", "monospace" ]
            , Font.size 11
            , Color.text Color.darkCharcoal
            , Color.background Color.white
            , Border.all 3
            , Border.solid
            , Border.rounded 3
            , Color.border Color.lightGrey
            , Style.paddingLeftHint 4
            , Style.paddingRightHint 4
            , Style.paddingTopHint 3
            , Style.paddingBottomHint 3
            ]
        , style NoOutline
            [ Style.prop "outline" "none"
            ]
        , style MenuItem
            [ Style.paddingHint 5
            , Style.prop "color" "black"
            , Style.prop "background " "white"
            , Style.cursor "pointer"
            , Border.rounded 2
              --, Style.prop "transition" "all .5s ease"
            , Style.hover
                [ Color.text Color.white
                , Style.prop "background " "#117bce"
                , Style.prop "text-decoration" "none"
                ]
            ]
        , style JsonEditor
            [ Style.prop "font-family" "Menlo, monospace"
            , Font.size 11
            , Border.all 0
            , Color.border Color.lightGrey
            , Style.prop "resize" "none"
            , Style.prop "box-shadow" "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
            , Style.prop "outline" "none"
            , Style.prop "display" "inline-block"
              --, Style.paddingHint 10
            ]
        , style SourceCode
            [ Style.prop "font-family" "Menlo, monospace"
            , Font.size 11
            , Style.paddingHint 10
            ]
        , style FocusedInputRow
            [ Style.pseudo ":before"
                [ Style.prop "content" "''"
                , Style.prop "border-bottom" "2px solid black"
                , Style.prop "position" "absolute"
                , Style.prop "left" "0"
                , Style.prop "bottom" "0"
                , Style.prop "z-index" "20"
                , Style.prop "height" "2px"
                , Style.prop "width" "100%"
                , Style.prop "visibility" "visible"
                ]
            ]
        , style InputRow
            [ Style.pseudo ":before"
                [ Style.prop "content" "''"
                , Style.prop "border-bottom" "2px solid black"
                , Style.prop "position" "absolute"
                , Style.prop "left" "45%"
                , Style.prop "bottom" "0"
                , Style.prop "z-index" "20"
                , Style.prop "height" "2px"
                , Style.prop "width" "20px"
                , Style.prop "transition-duration" "0.2s"
                , Style.prop "visibility" "hidden"
                ]
            , Style.variation Active
                [ Style.pseudo ":before"
                    [ Style.prop "width" "100%"
                    , Style.prop "left" "0"
                    , Style.prop "visibility" "visible"
                    ]
                ]
            ]
        , style TextInput
            [ Style.prop "font-family" "Menlo, monospace"
            , Border.bottom 1
            , Style.prop "outline" "none"
            , Color.border Color.darkGrey
            , Style.paddingHint 3
              --, Style.prop "transition" "border-color 0.2s linear"
            , Style.pseudo "focus"
                [ Color.border Color.lightBlue
                ]
            ]
        ]

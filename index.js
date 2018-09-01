/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/@ubio/css/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Franklin:100,200,300,400,500,600,700);", ""]);
exports.push([module.i, "@import url(https://universalbasket.github.io/css/static/fa/css/fontawesome-all.css);", ""]);

// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe, img, ins, kbd, q, s, samp, tt, var,\nfieldset, form, table, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n}\narticle, aside, footer, header, section {\n    display: block;\n}\ninput, textarea, button, select {\n    font: inherit;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\nblockquote, q {\n    quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\n:root {\n\n    /* Typography */\n\n    --font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;\n    --font-weight: 400;\n    --font-size: 12px;\n    --font-size--small: 10px;\n\n    --font-family--mono: 'Menlo', monospace;\n    --font-weight--mono: normal;\n    --font-size--mono: 11px;\n\n    /* Gaps */\n\n    --gap: 10px;\n    --gap--small: 5px;\n    --gap--large: 20px;\n\n    /* Base components */\n\n    --control-height: 2em;\n    --control-height--small: 1.75em;\n    --control-border-radius: 2px;\n    --control-border-color: rgba(0,0,0,0.1);\n\n    --badge-height: 1.75em;\n\n    --body-color: var(--color-mono--800);\n    --body-background: #fff;\n\n    /* UI Colours */\n\n    --ui-primary: var(--color-blue--500);\n    --ui-primary--inverse: #fff;\n\n    --ui-secondary: var(--color-cool--500);\n    --ui-secondary--inverse: #fff;\n\n    --ui-info: var(--color-blue--500);\n    --ui-info--inverse: #fff;\n\n    --ui-success: var(--color-green--500);\n    --ui-success--inverse: #fff;\n\n    --ui-warning: var(--color-yellow--500);\n    --ui-warning--inverse: #fff;\n\n    --ui-failure: var(--color-red--500);\n    --ui-failure--inverse: #fff;\n\n    --ui-production: var(--color-brand-red--500);\n    --ui-production--inverse: #fff;\n\n    --ui-staging: #829F59;\n    --ui-staging--inverse: #fff;\n\n    /* Color Palette */\n\n    --color-mono--000: #FCFCFC;\n    --color-mono--100: #F5F5F5;\n    --color-mono--200: #EDEDED;\n    --color-mono--300: #DBDBDB;\n    --color-mono--400: #C2C2C2;\n    --color-mono--500: #787878;\n    --color-mono--600: #4F4F4F;\n    --color-mono--700: #383838;\n    --color-mono--800: #262626;\n    --color-mono--900: #121212;\n\n    --color-warm--000: #FCFCFA;\n    --color-warm--100: #f7f7f5;\n    --color-warm--200: #F2F2ED;\n    --color-warm--300: #DEDED7;\n    --color-warm--400: #C7C7C1;\n    --color-warm--500: #808075;\n    --color-warm--600: #525245;\n    --color-warm--700: #33332B;\n    --color-warm--800: #1F1F1C;\n    --color-warm--900: #0D0D09;\n\n    --color-cool--000: #FAFBFC;\n    --color-cool--100: #F5F7FA;\n    --color-cool--200: #EBF0F5;\n    --color-cool--300: #D5DFE8;\n    --color-cool--400: #B8C8D9;\n    --color-cool--500: #6A7F94;\n    --color-cool--600: #364554;\n    --color-cool--700: #26303B;\n    --color-cool--800: #192129;\n    --color-cool--900: #090C0F;\n\n    --color-blue--000: #F5F9FA;\n    --color-blue--100: #EDF7FA;\n    --color-blue--200: #DFF1F7;\n    --color-blue--300: #C5E2ED;\n    --color-blue--400: #A0CCDE;\n    --color-blue--500: #489CC7;\n    --color-blue--600: #327FA6;\n    --color-blue--700: #1C6285;\n    --color-blue--800: #185370;\n    --color-blue--900: #124057;\n\n    --color-green--000: #F5FAF7;\n    --color-green--100: #F0FAF5;\n    --color-green--200: #E4F5EB;\n    --color-green--300: #CFE6D9;\n    --color-green--400: #AED1BE;\n    --color-green--500: #6BA360;\n    --color-green--600: #548C54;\n    --color-green--700: #396B3F;\n    --color-green--800: #2E5726;\n    --color-green--900: #23421D;\n\n    --color-yellow--000: #FFFFF2;\n    --color-yellow--100: #FFFFD9;\n    --color-yellow--200: #FFFAB3;\n    --color-yellow--300: #FFEE80;\n    --color-yellow--400: #FFDE59;\n    --color-yellow--500: #FFBB00;\n    --color-yellow--600: #E69900;\n    --color-yellow--700: #B36B00;\n    --color-yellow--800: #8C4B00;\n    --color-yellow--900: #663000;\n\n    --color-red--000: #FCFAFA;\n    --color-red--100: #FAF5F5;\n    --color-red--200: #F7EBEB;\n    --color-red--300: #F0D1D2;\n    --color-red--400: #F0B4B6;\n    --color-red--500: #D95559;\n    --color-red--600: #B3393D;\n    --color-red--700: #802629;\n    --color-red--800: #661A1C;\n    --color-red--900: #4D1315;\n\n    --color-brand-red--000: #FFFAFA;\n    --color-brand-red--100: #FFF5F5;\n    --color-brand-red--200: #FFEDEE;\n    --color-brand-red--300: #FFD6D8;\n    --color-brand-red--400: #FFB3B5;\n    --color-brand-red--500: #FF5A5F;\n    --color-brand-red--600: #E6353B;\n    --color-brand-red--700: #C72227;\n    --color-brand-red--800: #A12024;\n    --color-brand-red--900: #871B1F;\n\n    --color-brand-blue--000: #F7FEFF;\n    --color-brand-blue--100: #F0FDFF;\n    --color-brand-blue--200: #E1F7FA;\n    --color-brand-blue--300: #C2EAF0;\n    --color-brand-blue--400: #9DD9E0;\n    --color-brand-blue--500: #27B9CC;\n    --color-brand-blue--600: #0C8999;\n    --color-brand-blue--700: #0D626E;\n    --color-brand-blue--800: #09545E;\n    --color-brand-blue--900: #073E45;\n\n}\nh1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big,\ncite, code, del, dfn, em, small, strike, strong, sub, sup, b, u, i,\ndl, dt, dd, ol, ul, li, label, legend {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n}\np {\n    margin: var(--gap) 0;\n    font-size: 12px;\n    line-height: 1.35;\n}\na {\n    cursor: pointer;\n    color: var(--ui-primary);\n    text-decoration: none;\n}\na:hover {\n    text-decoration: none;\n}\np a {\n    color: var(--ui-prod);\n    text-decoration: underline;\n}\nb {\n    font-weight: 700;\n}\nstrong {\n    font-weight: 500;\n}\nh1 {\n    font-size: 26px;\n    line-height: 1;\n    font-weight: 100;\n    margin: var(--gap--large) 0;\n}\nh2 {\n    font-size: 21px;\n    line-height: 1;\n    font-weight: 200;\n    margin: var(--gap--large) 0;\n}\nh3 {\n    font-size: 18px;\n    line-height: 1;\n    font-weight: 300;\n    margin: var(--gap--large) 0 var(--gap);\n}\nh4 {\n    font-size: 13px;\n    line-height: 1;\n    font-weight: 400;\n    margin: var(--gap--large) 0 var(--gap);\n    color: var(--color-cool--500);\n    text-transform: uppercase;\n}\nh5 {\n    font-size: 130%;\n    line-height: 1.5;\n    font-weight: 400;\n    margin: var(--gap) 0;\n}\nh6 {\n    font-size: 12px;\n    line-height: 1.25;\n    font-weight: 400;\n    margin: var(--gap) 0;\n    text-transform: uppercase;\n    color: var(--color-cool--500);\n}\nsmall {\n    line-height: 1;\n    font-size: 80%;\n}\nhtml, body {\n    height: 100%;\n}\nbody {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    line-height: 1;\n    background: var(--body-background);\n    color: var(--body-color);\n}\nol, ul {\n    list-style: none;\n}\nhr {\n    margin: var(--gap) 0;\n    border: 1px dashed var(--color-warm--300);\n    border-width: 1px 0 0 0;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\ntime, code, pre {\n    font-family: var(--font-family--mono);\n    font-size: var(--font-size--mono);\n    line-height: var(--font__line-height--mono);\n    word-wrap: break-word;\n    word-break: break-word;\n}\nimg {\n    max-width: 100%;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    display: inline-block;\n    height: auto;\n    vertical-align: middle;\n    margin: 0;\n}\ninput,\ntextarea {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    border: 1px solid var(--control-border-color);\n    border-radius: var(--control-border-radius);\n}\ninput[readonly],\ntextarea[readonly] {\n    background: var(--color-warm--100);\n}\nselect {\n    border: 0;\n    box-shadow: 0 0 0 1px var(--control-border-color);\n    font-family: var(--font-family);\n}\nselect[multiple] {\n    height: auto;\n}\nbutton {\n    cursor: pointer;\n}\n.button {\n    display: inline-flex;\n    align-items: center;\n    align-self: center;\n\n    box-sizing: border-box;\n    height: var(--control-height);\n    padding: 0 var(--gap);\n\n    border-radius: var(--control-border-radius);\n    border: 1px solid rgba(0,0,0,0.1);\n    background: transparent;\n    color: inherit;\n\n    font-size: var(--font-size);\n    font-family: var(--font-family);\n\n    line-height: 1;\n    text-decoration: none;\n    text-align: center;\n    letter-spacing: 0.025em;\n    white-space: nowrap;\n\n    cursor: pointer;\n}\n.button:hover {\n    text-decoration: none;\n}\n.button--active, .button:active {\n    box-shadow: 0 3px 8px rgba(0,0,0,.2) inset;\n    border-color: rgba(0,0,0,.2);\n}\n.button__icon {\n    color: inherit;\n    margin-right: var(--gap--small);\n    text-align: center;\n}\n/* Sizes */\n.button--small {\n    height: var(--control-height--small);\n    padding: 2px 4px;\n    font-size: var(--font-size--small);\n}\n.button--large {\n    font-size: 18px;\n    padding: 8px 15px;\n    border-radius: calc(var(--control-border-radius) * 1.5);\n}\n/* Colors */\n.button--primary {\n    background: var(--ui-primary);\n    color: var(--ui-primary--inverse);\n}\n.button--secondary {\n    background: var(--ui-secondary);\n    color: var(--ui-secondary--inverse);\n}\n.button--outlined-primary {\n    color: var(--ui-primary);\n    border: 1px solid var(--ui-primary);\n    background: #fff;\n}\n.button--outlined-secondary {\n    color: var(--ui-secondary);\n    border: 1px solid var(--ui-secondary);\n    background: #fff;\n}\n/* Disabled */\n.button[disabled] {\n    background: var(--color-mono--400);\n    color: #fff;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.input {\n    display: inline-flex;\n    box-sizing: border-box;\n    padding: 0 var(--gap--small);\n    height: var(--control-height);\n    border-radius: var(--control-border-radius);\n    border: 1px solid rgba(0,0,0,0.1);\n    box-shadow: none;\n\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    line-height: 1;\n    letter-spacing: 0.025em;\n\n    cursor: pointer;\n}\n.input--block {\n    display: block;\n    width: 100%;\n}\n.input[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n.input--small {\n    height: var(--control-height--small);\n    padding: 2px 4px;\n    font-size: var(--font-size--small);\n}\ntextarea.input {\n    height: auto;\n    line-height: 1.35;\n}\n.group {\n    display: inline-flex;\n    align-items: center;\n    flex-wrap: nowrap;\n}\n.group--block {\n    display: flex;\n}\n.group--gap > * + * {\n    margin-left: var(--gap);\n}\n.group--gap-small > * + * {\n    margin-left: var(--gap--small);\n}\n.group--merged {\n    flex-wrap: nowrap;\n    align-items: stretch;\n    white-space: nowrap;\n}\n.group--merged > *:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.group--merged > * + * {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.group--separated {\n    display: flex;\n    justify-content: space-between;\n}\n.block {\n    margin: var(--gap) 0;\n}\n.block--small {\n    margin: var(--gap--small) 0;\n}\n.block--large {\n    margin: var(--gap--large) 0;\n}\n.tabs {\n    --slider-size: 2px;\n\n    display: flex;\n    align-items: baseline;\n    list-style: none;\n    border-bottom: var(--slider-size) solid var(--color-warm--100);\n    margin: 0;\n}\n.tabs__item {\n    position: relative;\n    top: var(--slider-size);\n    padding: var(--gap);\n    margin: 0 var(--gap--small) 0 0;\n    border-bottom: var(--slider-size) solid var(--color-warm--100);\n    color: inherit;\n    font-size: 13px;\n    font-weight: 300;\n    text-decoration: none;\n}\n.tabs__item:after {\n    content: '';\n    position: absolute;\n    display: block;\n    bottom: calc(-1 * var(--slider-size));\n    left: 0;\n    height: var(--slider-size);\n    width: 0%;\n    background: transparent;\n    border-radius: var(--slider-size);\n    transition: width 0.4s;\n}\n.tabs__item--active {\n    font-weight: 500;\n}\n.tabs__item--active:after {\n    background: var(--ui-primary);\n    width: 100%;\n}\n.tab {\n    padding: var(--gap);\n}\n.badge {\n    display: inline-block;\n    padding: 4px;\n    height: var(--badge-height);\n    box-sizing: border-box;\n    border-radius: var(--control-border-radius);\n\n    text-align: center;\n    white-space: nowrap;\n    font-size: 10px;\n}\n.badge--round {\n    min-width: 2em;\n    padding: 4px 6px;\n    border-radius: 2em;\n}\n.badge--info {\n    background: var(--ui-info);\n    color: var(--ui-info--inverse);\n}\n.badge--success {\n    background: var(--ui-success);\n    color: var(--ui-success--inverse);\n}\n.badge--warning {\n    background: var(--ui-warning);\n    color: var(--ui-warning--inverse);\n}\n.badge--failure {\n    background: var(--ui-failure);\n    color: var(--ui-failure--inverse);\n}\n.badge--outlined-info {\n    box-shadow: 0 0 0 1px var(--ui-info) inset;\n    color: var(--ui-info);\n    background: transparent;\n}\n.badge--outlined-success {\n    box-shadow: 0 0 0 1px var(--ui-success) inset;\n    color: var(--ui-success);\n    background: transparent;\n}\n.badge--outlined-warning {\n    box-shadow: 0 0 0 1px var(--ui-warning) inset;\n    color: var(--ui-warning);\n    background: transparent;\n}\n.badge--outlined-failure {\n    box-shadow: 0 0 0 1px var(--ui-failure) inset;\n    color: var(--ui-failure);\n    background: transparent;\n}\n.badge--staging {\n    background: var(--ui-staging);\n    color: var(--ui-staging--inverse);\n}\n.badge--production {\n    background: var(--ui-production);\n    color: var(--ui-production--inverse);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-topbar {\n  background-color: var(--color-mono--700);\n  color: var(--color-mono--300);\n  font-size: 14px;\n}\n\n.app-content {\n  padding: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/checkbox.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jf-checkbox {\n    width: 300px;\n    max-width: 100%;\n    position: relative;\n    font-size: 16px;\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 0;\n    margin-left: 16px;\n    margin-bottom: 16px;\n    height: 75px;\n    padding: 20px 0;\n    font-size: 16px;\n    vertical-align: top;\n}\n\n.jf-checkbox__input {\n    margin: 0;\n    padding: 0;\n    width: 0;\n    height: 0;\n    position: absolute;\n    border: 0;\n    appearance: none;\n    opacity: 0;\n}\n\n.jf-checkbox__label {\n    top: calc(50% - 8px);\n    position: absolute;\n    left: 24px;\n    cursor: pointer;\n}\n\n.jf-checkbox__box-outline {\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    top: calc(50% - 8px);\n    left: 0;\n    border-radius: 2px;\n    border: 2px solid #0000008a;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.jf-checkbox__tick-outline {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    mask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==);\n    background: 0 0;\n    transition-duration: .28s;\n    transition-timing-function: cubic-bezier(.4,0,.2,1);\n    transition-property: background;\n}\n\n\n.jf-checkbox--on .jf-checkbox__tick-outline {\n    background: #009688 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K);\n}\n\n\n.jf-checkbox--on .jf-checkbox__box-outline {\n    border: 2px solid #009688;\n}\n\n\n.jf-checkbox__helper-text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    position: absolute;\n    bottom: 0;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.jf-checkbox--invalid .jf-checkbox__helper-text {\n    color: var(--color-red--500);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./node_modules/@ubio/css/index.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/app.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/tab.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/json-viewer.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/json-form.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/json-form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/textfield.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/switch.css"), "");
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./stylesheets/checkbox.css"), "");

// module
exports.push([module.i, ":root {\n    --color-active: #2a79ff;\n    --color-inactive: #8a8a8a;\n    --color-swatch--500: #009688;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/json-viewer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".json-viewer {\n  font-family: var(--font-family--mono);\n  line-height: 1.6;\n}\n\n.json-viewer--collapsed {\n  color: grey;\n  cursor: pointer;\n  background-color: var(--color-blue--100);\n}\n\n.json-viewer__object-property {\n  margin-left: 4ch;\n}\n\n.json-viewer__array-item {\n  margin-left: 4ch;\n}\n\n.json-viewer__key--object {\n  color: var(--color-mono--700);\n}\n\n.json-viewer__key:after {\n  content: ': ';\n}\n\n.json-viewer__key--array {\n  color: royalblue;\n}\n\n.json-viewer--string {\n  color: var(--color-yellow--700);\n}\n\n.json-viewer--number {\n  color: var(--color-blue--700);\n}\n\n.json-viewer--null {\n  color: var(--color-red--700);\n}\n\n.json-viewer--bool {\n  color: var(--color-brand-blue--600);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/switch.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jf-switch {\n    width: 300px;\n    max-width: 100%;\n    position: relative;\n    font-size: 16px;\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 0;\n    margin-left: 16px;\n    margin-bottom: 16px;\n    height: 75px;\n    padding: 20px 0;\n    font-size: 16px;\n    vertical-align: top;\n}\n\n.jf-switch__input {\n    margin: 0;\n    padding: 0;\n    width: 0;\n    height: 0;\n    position: absolute;\n    border: 0;\n    appearance: none;\n    opacity: 0;\n}\n\n.jf-switch__label {\n    top: calc(50% - 8px);\n    position: absolute;\n    left: 50px;\n    cursor: pointer;\n}\n\n.jf-switch__track {\n    background-color: lightgrey;\n    width: 40px;\n    height: 14px;\n    position: absolute;\n    top: calc(50% - 7px);\n    left: 0;\n    border-radius: 14px;\n    cursor: pointer;\n}\n\n.jf-switch__thumb {\n    background-color: #fafafa;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: calc(50% - 10px);\n    left: 0;\n    cursor: pointer;\n    border-radius: 50%;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.4,0,.2,1);\n    box-shadow: 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.2), 0 1px 8px 0 rgba(0,0,0,.12);\n}\n\n.jf-switch--on .jf-switch__thumb {\n    left: 20px;\n}\n\n.jf-switch--on .jf-switch__thumb {\n    background-color: var(--color-swatch--500);\n}\n\n.jf-switch__helper-text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    position: absolute;\n    bottom: 0;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.jf-switch--invalid .jf-textfield__helper-text {\n    color: var(--color-red--500);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/tab.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab {\n  border-bottom: 3px solid transparent;\n  display: inline-block;\n  font-size: 14px;\n  min-width: 160px;\n  padding-top: 0;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-bottom: 20px;\n  height: 48px;\n  line-height: 48px;\n  color: rgba(255,255,255,.7);\n  text-transform: uppercase;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.tab--active {\n  color: white;\n  cursor: default;\n  border-bottom: 3px solid var(--color-red--500);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./stylesheets/textfield.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jf-textfield {\n    position: relative;\n    font-size: 16px;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 300px;\n    max-width: 100%;\n    margin: 0;\n    padding: 20px 0;\n    margin-left: 16px;\n    margin-bottom: 16px;\n}\n\n.jf-textfield__input {\n    border: none;\n    border-radius: 0;\n    outline: none;\n    display: block;\n    font-size: 16px;\n    font-family: var(--font-family);\n    margin: 0;\n    padding: 8px 0;\n    width: 100%;\n    background: 0 0;\n    text-align: left;\n    color: inherit;\n}\n\n.jf-textfield--focused .jf-textfield__input {\n    color: var(--color-active);\n}\n\n.jf-textfield--empty .jf-textfield__label {\n    top: 29px;\n    font-size: 16px;\n}\n\n.jf-textfield--focused .jf-textfield__label {\n    color: var(--color-active);\n    visibility: visible;\n    font-size: 12px;\n    top: 10px;\n}\n\n.jf-textfield__label {\n    color: var(--color-inactive);\n    font-size: 12px;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    position: absolute;\n    display: block;\n    bottom: 0;\n    top: 10px;\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: left;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n}\n\n/*\n.jf-textfield__bottom-border  {\n    border-bottom: 2px solid var(--color-active);\n    height: 0;\n    position: absolute;\n    top: 46px;\n    transition: width .1s ease-in 0s;\n    width: 0;\n}\n\n.jf-textfield--focused .jf-textfield__bottom-border {\n    width: 100%;\n}\n*/\n\n.jf-textfield__label:after {\n    background-color: var(--color-active);\n    bottom: 20px;\n    content: '';\n    height: 2px;\n    left: 45%;\n    position: absolute;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.4,0,.2,1);\n    visibility: hidden;\n    width: 10px;\n}\n\n.jf-textfield--focused .jf-textfield__label:after {\n    left: 0;\n    visibility: visible;\n    width: 100%;\n}\n\n/*\n.jf-textfield:before {\n  content: '';\n  background-color: rgba(0,0,0,0.06);\n  position: absolute;\n  top: 0;\n  bottom: 20px;\n  width: calc(100% + 32px);\n  z-index: -1;\n  border-radius: 4px;\n  margin-left: -16px;\n}\n*/\n\n.jf-textfield:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    bottom: 20px;\n    background-color: var(--color-inactive);\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.4,0,.2,1);\n}\n\n.jf-textfield--focused:after {\n    background-color: transparent;\n}\n\n.jf-textfield:hover:after {\n    background-color: #222;\n    bottom: 20px;\n    height: 2px;\n}\n\n.jf-textfield--focused:hover:after {\n    background-color: transparent;\n}\n\n\n.jf-textfield__helper-text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    position: absolute;\n    bottom: 0;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.54);\n}\n\n\n.jf-textfield--invalid .jf-textfield__label:after {\n    background-color: var(--color-red--500);\n}\n\n.jf-textfield--invalid .jf-textfield__helper-text {\n    color: var(--color-red--500);\n}\n\n.jf-textfield--invalid .jf-textfield__label {\n    color: var(--color-red--500);\n}\n\n.jf-textfield--invalid:after {\n    background-color: var(--color-red--500) !important;\n}\n\n.jf-textfield--disabled {\n    color: var(--color-inactive);\n}\n\n.jf-textfield--disabled:hover:after {\n    background-color: transparent;\n}\n\n.jf-textfield--disabled:after {\n    background-color: transparent;\n    border-bottom: 1px dotted var(--color-inactive);\n}\n\n.jf-textfield--hidden {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Main.elm":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _zwilias$elm_utf_tools$String_UTF32$byteToString = function ($int) {
	if (_elm_lang$core$Native_Utils.cmp($int, 65536) < 1) {
		return _elm_lang$core$String$fromChar(
			_elm_lang$core$Char$fromCode($int));
	} else {
		var c = $int - 65536;
		return _elm_lang$core$String$fromList(
			{
				ctor: '::',
				_0: _elm_lang$core$Char$fromCode(55296 | (c >>> 10)),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Char$fromCode(56320 | (1023 & c)),
					_1: {ctor: '[]'}
				}
			});
	}
};
var _zwilias$elm_utf_tools$String_UTF32$utf8ToUtf32 = F3(
	function (add, $char, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._1;
		var _p2 = _p1._2;
		var shiftAndAdd = function ($int) {
			return (63 & $int) | (_p1._0 << 6);
		};
		return _elm_lang$core$Native_Utils.eq(_p3, 0) ? (_elm_lang$core$Native_Utils.eq(128 & $char, 0) ? {
			ctor: '_Tuple3',
			_0: 0,
			_1: 0,
			_2: A2(add, $char, _p2)
		} : (_elm_lang$core$Native_Utils.eq(224 & $char, 192) ? {ctor: '_Tuple3', _0: 31 & $char, _1: 1, _2: _p2} : (_elm_lang$core$Native_Utils.eq(240 & $char, 224) ? {ctor: '_Tuple3', _0: 15 & $char, _1: 2, _2: _p2} : {ctor: '_Tuple3', _0: 7 & $char, _1: 3, _2: _p2}))) : (_elm_lang$core$Native_Utils.eq(_p3, 1) ? {
			ctor: '_Tuple3',
			_0: 0,
			_1: 0,
			_2: A2(
				add,
				shiftAndAdd($char),
				_p2)
		} : {
			ctor: '_Tuple3',
			_0: shiftAndAdd($char),
			_1: _p3 - 1,
			_2: _p2
		});
	});
var _zwilias$elm_utf_tools$String_UTF32$foldlUTF8 = F3(
	function (op, acc, input) {
		var _p4 = A3(
			_elm_lang$core$List$foldl,
			_zwilias$elm_utf_tools$String_UTF32$utf8ToUtf32(op),
			{ctor: '_Tuple3', _0: 0, _1: 0, _2: acc},
			input);
		if ((_p4.ctor === '_Tuple3') && (_p4._1 === 0)) {
			return _elm_lang$core$Result$Ok(_p4._2);
		} else {
			return _elm_lang$core$Result$Err('invalid UTF-8 sequence');
		}
	});
var _zwilias$elm_utf_tools$String_UTF32$utf16ToUtf32 = F3(
	function (add, $char, _p5) {
		var _p6 = _p5;
		var _p8 = _p6._0;
		var _p7 = _p6._1;
		if (_p7.ctor === 'Nothing') {
			return ((_elm_lang$core$Native_Utils.cmp($char, 55296) > -1) && (_elm_lang$core$Native_Utils.cmp($char, 57344) < 0)) ? {
				ctor: '_Tuple2',
				_0: _p8,
				_1: _elm_lang$core$Maybe$Just($char)
			} : {
				ctor: '_Tuple2',
				_0: A2(add, $char, _p8),
				_1: _elm_lang$core$Maybe$Nothing
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: A3(
					_elm_lang$core$Basics$flip,
					add,
					_p8,
					A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						65536,
						(1023 & $char) | ((1023 & _p7._0) << 10))),
				_1: _elm_lang$core$Maybe$Nothing
			};
		}
	});
var _zwilias$elm_utf_tools$String_UTF32$foldl = F3(
	function (op, acc, input) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$String$foldl,
				function (_p9) {
					return A2(
						_zwilias$elm_utf_tools$String_UTF32$utf16ToUtf32,
						op,
						_elm_lang$core$Char$toCode(_p9));
				},
				{ctor: '_Tuple2', _0: acc, _1: _elm_lang$core$Maybe$Nothing},
				input));
	});
var _zwilias$elm_utf_tools$String_UTF32$toBytes = function (_p10) {
	return _elm_lang$core$List$reverse(
		A3(
			_zwilias$elm_utf_tools$String_UTF32$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			{ctor: '[]'},
			_p10));
};
var _zwilias$elm_utf_tools$String_UTF32$length = function (input) {
	return A3(
		_zwilias$elm_utf_tools$String_UTF32$foldl,
		_elm_lang$core$Basics$always(
			F2(
				function (x, y) {
					return x + y;
				})(1)),
		0,
		input);
};
var _zwilias$elm_utf_tools$String_UTF32$toString = function (bytes) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function ($char, string) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					string,
					_zwilias$elm_utf_tools$String_UTF32$byteToString($char));
			}),
		'',
		bytes);
};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _1602$json_schema$Util$indexOfFirstDuplicate = function (list) {
	return function (_p0) {
		var _p1 = _p0;
		return _p1._1;
	}(
		A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, _p2) {
					var _p3 = _p2;
					var _p6 = _p3._2;
					var _p5 = _p3._1;
					var _p4 = _p3._0;
					return {
						ctor: '_Tuple3',
						_0: _p4 + 1,
						_1: (_elm_lang$core$Native_Utils.cmp(_p5, -1) > 0) ? _p5 : (A2(_elm_lang$core$List$member, x, _p6) ? _p4 : -1),
						_2: A2(_elm_lang$core$List$drop, 1, _p6)
					};
				}),
			{
				ctor: '_Tuple3',
				_0: 0,
				_1: -1,
				_2: A2(_elm_lang$core$List$drop, 1, list)
			},
			list));
};
var _1602$json_schema$Util$isUnique = function (list) {
	return _elm_lang$core$Native_Utils.eq(
		_1602$json_schema$Util$indexOfFirstDuplicate(list),
		-1);
};
var _1602$json_schema$Util$getAt = function (index) {
	return function (_p7) {
		return _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, index, _p7));
	};
};
var _1602$json_schema$Util$uncons = function (l) {
	var _p8 = l;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p8._0, _1: _p8._1});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _1602$json_schema$Util$isInt = function (x) {
	return _elm_lang$core$Native_Utils.eq(
		x,
		function (_p9) {
			return _elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$round(_p9));
		}(x));
};
var _1602$json_schema$Util$resultToDecoder = function (res) {
	var _p10 = res;
	if (_p10.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p10._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p10._0);
	}
};
var _1602$json_schema$Util$foldResults = function (results) {
	return A2(
		_elm_lang$core$Result$map,
		_elm_lang$core$List$reverse,
		A3(
			_elm_lang$core$List$foldl,
			function (t) {
				return _elm_lang$core$Result$andThen(
					function (r) {
						return A2(
							_elm_lang$core$Result$map,
							A2(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								r),
							t);
					});
			},
			_elm_lang$core$Result$Ok(
				{ctor: '[]'}),
			results));
};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = F2(
	function (decoder, wrapped) {
		return A3(
			_elm_lang$core$Json_Decode$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			wrapped,
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
	return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
		_elm_lang$core$Json_Decode$succeed(_p0));
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: decoder,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(fallback),
						_1: {ctor: '[]'}
					}
				});
		};
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				var _p2 = A2(
					_elm_lang$core$Json_Decode$decodeValue,
					nullOr(valDecoder),
					_p1._0);
				if (_p2.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p2._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p2._0);
				}
			} else {
				var _p3 = A2(
					_elm_lang$core$Json_Decode$decodeValue,
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					input);
				if (_p3.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(fallback);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p3._0);
				}
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
			decoder);
	});

var _1602$json_schema$Json_Schema_Definitions$getCustomKeywordValue = F2(
	function (key, schema) {
		var _p0 = schema;
		if (_p0.ctor === 'ObjectSchema') {
			return _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filterMap,
					function (_p1) {
						var _p2 = _p1;
						return _elm_lang$core$Native_Utils.eq(_p2._0, key) ? _elm_lang$core$Maybe$Just(_p2._1) : _elm_lang$core$Maybe$Nothing;
					},
					A2(
						_elm_lang$core$Result$withDefault,
						{ctor: '[]'},
						A2(
							_elm_lang$core$Json_Decode$decodeValue,
							_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
							_p0._0.source))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _1602$json_schema$Json_Schema_Definitions$nonNegativeInt = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (x) {
		return ((_elm_lang$core$Native_Utils.cmp(x, 0) > -1) && _1602$json_schema$Util$isInt(x)) ? _elm_lang$core$Json_Decode$succeed(x) : _elm_lang$core$Json_Decode$fail('Expected non-negative int');
	},
	_elm_lang$core$Json_Decode$int);
var _1602$json_schema$Json_Schema_Definitions$failIfEmpty = function (l) {
	return _elm_lang$core$List$isEmpty(l) ? _elm_lang$core$Json_Decode$fail('List is empty') : _elm_lang$core$Json_Decode$succeed(l);
};
var _1602$json_schema$Json_Schema_Definitions$failIfValuesAreNotUnique = function (l) {
	return _elm_lang$core$Json_Decode$succeed(l);
};
var _1602$json_schema$Json_Schema_Definitions$nonEmptyUniqueArrayOfValuesDecoder = A2(
	_elm_lang$core$Json_Decode$andThen,
	_1602$json_schema$Json_Schema_Definitions$failIfEmpty,
	A2(
		_elm_lang$core$Json_Decode$andThen,
		_1602$json_schema$Json_Schema_Definitions$failIfValuesAreNotUnique,
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value)));
var _1602$json_schema$Json_Schema_Definitions$encode = function (s) {
	var source = function (os) {
		return A2(
			_elm_lang$core$Result$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Json_Decode$decodeValue,
				_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
				os.source));
	};
	var encodeExclusiveBoundary = function (eb) {
		var _p3 = eb;
		if (_p3.ctor === 'BoolBoundary') {
			return _elm_lang$core$Json_Encode$bool(_p3._0);
		} else {
			return _elm_lang$core$Json_Encode$float(_p3._0);
		}
	};
	var encodeSchemata = function (_p4) {
		var _p5 = _p4;
		return _elm_lang$core$Json_Encode$object(
			A2(
				_elm_lang$core$List$map,
				function (_p6) {
					var _p7 = _p6;
					return {
						ctor: '_Tuple2',
						_0: _p7._0,
						_1: _1602$json_schema$Json_Schema_Definitions$encode(_p7._1)
					};
				},
				_p5._0));
	};
	var encodeListSchemas = function (l) {
		return _elm_lang$core$Json_Encode$list(
			A2(_elm_lang$core$List$map, _1602$json_schema$Json_Schema_Definitions$encode, l));
	};
	var singleTypeToString = function (st) {
		var _p8 = st;
		switch (_p8.ctor) {
			case 'StringType':
				return 'string';
			case 'IntegerType':
				return 'integer';
			case 'NumberType':
				return 'number';
			case 'BooleanType':
				return 'boolean';
			case 'ObjectType':
				return 'object';
			case 'ArrayType':
				return 'array';
			default:
				return 'null';
		}
	};
	var encodeType = F2(
		function (t, res) {
			var _p9 = t;
			switch (_p9.ctor) {
				case 'SingleType':
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'type',
							_1: _elm_lang$core$Json_Encode$string(
								singleTypeToString(_p9._0))
						},
						_1: res
					};
				case 'NullableType':
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'type',
							_1: _elm_lang$core$Json_Encode$list(
								{
									ctor: '::',
									_0: _elm_lang$core$Json_Encode$string('null'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Json_Encode$string(
											singleTypeToString(_p9._0)),
										_1: {ctor: '[]'}
									}
								})
						},
						_1: res
					};
				case 'UnionType':
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'type',
							_1: _elm_lang$core$Json_Encode$list(
								A2(
									_elm_lang$core$List$map,
									function (_p10) {
										return _elm_lang$core$Json_Encode$string(
											singleTypeToString(_p10));
									},
									_p9._0))
						},
						_1: res
					};
				default:
					return res;
			}
		});
	var encodeDependency = function (dep) {
		var _p11 = dep;
		if (_p11.ctor === 'PropSchema') {
			return _1602$json_schema$Json_Schema_Definitions$encode(_p11._0);
		} else {
			return _elm_lang$core$Json_Encode$list(
				A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p11._0));
		}
	};
	var encodeDependencies = F2(
		function (deps, res) {
			return _elm_lang$core$List$isEmpty(deps) ? res : {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'dependencies',
					_1: _elm_lang$core$Json_Encode$object(
						A2(
							_elm_lang$core$List$map,
							function (_p12) {
								var _p13 = _p12;
								return {
									ctor: '_Tuple2',
									_0: _p13._0,
									_1: encodeDependency(_p13._1)
								};
							},
							deps))
				},
				_1: res
			};
		});
	var encodeItems = F2(
		function (items, res) {
			var _p14 = items;
			switch (_p14.ctor) {
				case 'ItemDefinition':
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'items',
							_1: _1602$json_schema$Json_Schema_Definitions$encode(_p14._0)
						},
						_1: res
					};
				case 'ArrayOfItems':
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'items',
							_1: _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _1602$json_schema$Json_Schema_Definitions$encode, _p14._0))
						},
						_1: res
					};
				default:
					return res;
			}
		});
	var optionally = F4(
		function (fn, val, key, res) {
			var result = A2(
				_elm_lang$core$List$filter,
				function (_p15) {
					var _p16 = _p15;
					return !_elm_lang$core$Native_Utils.eq(_p16._0, key);
				},
				res);
			var _p17 = val;
			if (_p17.ctor === 'Just') {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: key,
						_1: fn(_p17._0)
					},
					_1: result
				};
			} else {
				return result;
			}
		});
	var _p18 = s;
	if (_p18.ctor === 'BooleanSchema') {
		return _elm_lang$core$Json_Encode$bool(_p18._0);
	} else {
		var _p19 = _p18._0;
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					_elm_lang$core$Basics$identity,
					source(_p19),
					{
						ctor: '::',
						_0: encodeType(_p19.type_),
						_1: {
							ctor: '::',
							_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.id, '$id'),
							_1: {
								ctor: '::',
								_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.ref, '$ref'),
								_1: {
									ctor: '::',
									_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.title, 'title'),
									_1: {
										ctor: '::',
										_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.description, 'description'),
										_1: {
											ctor: '::',
											_0: A3(optionally, _elm_lang$core$Basics$identity, _p19.$default, 'default'),
											_1: {
												ctor: '::',
												_0: A3(optionally, _elm_lang$core$Json_Encode$list, _p19.examples, 'examples'),
												_1: {
													ctor: '::',
													_0: A3(optionally, encodeSchemata, _p19.definitions, 'definitions'),
													_1: {
														ctor: '::',
														_0: A3(optionally, _elm_lang$core$Json_Encode$float, _p19.multipleOf, 'multipleOf'),
														_1: {
															ctor: '::',
															_0: A3(optionally, _elm_lang$core$Json_Encode$float, _p19.maximum, 'maximum'),
															_1: {
																ctor: '::',
																_0: A3(optionally, encodeExclusiveBoundary, _p19.exclusiveMaximum, 'exclusiveMaximum'),
																_1: {
																	ctor: '::',
																	_0: A3(optionally, _elm_lang$core$Json_Encode$float, _p19.minimum, 'minimum'),
																	_1: {
																		ctor: '::',
																		_0: A3(optionally, encodeExclusiveBoundary, _p19.exclusiveMinimum, 'exclusiveMinimum'),
																		_1: {
																			ctor: '::',
																			_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.maxLength, 'maxLength'),
																			_1: {
																				ctor: '::',
																				_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.minLength, 'minLength'),
																				_1: {
																					ctor: '::',
																					_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.pattern, 'pattern'),
																					_1: {
																						ctor: '::',
																						_0: A3(optionally, _elm_lang$core$Json_Encode$string, _p19.format, 'format'),
																						_1: {
																							ctor: '::',
																							_0: encodeItems(_p19.items),
																							_1: {
																								ctor: '::',
																								_0: A3(optionally, _1602$json_schema$Json_Schema_Definitions$encode, _p19.additionalItems, 'additionalItems'),
																								_1: {
																									ctor: '::',
																									_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.maxItems, 'maxItems'),
																									_1: {
																										ctor: '::',
																										_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.minItems, 'minItems'),
																										_1: {
																											ctor: '::',
																											_0: A3(optionally, _elm_lang$core$Json_Encode$bool, _p19.uniqueItems, 'uniqueItems'),
																											_1: {
																												ctor: '::',
																												_0: A3(optionally, _1602$json_schema$Json_Schema_Definitions$encode, _p19.contains, 'contains'),
																												_1: {
																													ctor: '::',
																													_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.maxProperties, 'maxProperties'),
																													_1: {
																														ctor: '::',
																														_0: A3(optionally, _elm_lang$core$Json_Encode$int, _p19.minProperties, 'minProperties'),
																														_1: {
																															ctor: '::',
																															_0: A3(
																																optionally,
																																function (s) {
																																	return _elm_lang$core$Json_Encode$list(
																																		A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, s));
																																},
																																_p19.required,
																																'required'),
																															_1: {
																																ctor: '::',
																																_0: A3(optionally, encodeSchemata, _p19.properties, 'properties'),
																																_1: {
																																	ctor: '::',
																																	_0: A3(optionally, encodeSchemata, _p19.patternProperties, 'patternProperties'),
																																	_1: {
																																		ctor: '::',
																																		_0: A3(optionally, _1602$json_schema$Json_Schema_Definitions$encode, _p19.additionalProperties, 'additionalProperties'),
																																		_1: {
																																			ctor: '::',
																																			_0: encodeDependencies(_p19.dependencies),
																																			_1: {
																																				ctor: '::',
																																				_0: A3(optionally, _1602$json_schema$Json_Schema_Definitions$encode, _p19.propertyNames, 'propertyNames'),
																																				_1: {
																																					ctor: '::',
																																					_0: A3(optionally, _elm_lang$core$Json_Encode$list, _p19.$enum, 'enum'),
																																					_1: {
																																						ctor: '::',
																																						_0: A3(optionally, _elm_lang$core$Basics$identity, _p19.$const, 'const'),
																																						_1: {
																																							ctor: '::',
																																							_0: A3(optionally, encodeListSchemas, _p19.allOf, 'allOf'),
																																							_1: {
																																								ctor: '::',
																																								_0: A3(optionally, encodeListSchemas, _p19.anyOf, 'anyOf'),
																																								_1: {
																																									ctor: '::',
																																									_0: A3(optionally, encodeListSchemas, _p19.oneOf, 'oneOf'),
																																									_1: {
																																										ctor: '::',
																																										_0: A3(optionally, _1602$json_schema$Json_Schema_Definitions$encode, _p19.not, 'not'),
																																										_1: {ctor: '[]'}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					})));
	}
};
var _1602$json_schema$Json_Schema_Definitions$SubSchema = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return function (_7) {
																																	return function (_8) {
																																		return function (_9) {
																																			return function (_10) {
																																				return function (_11) {
																																					return function (_12) {
																																						return {type_: a, id: b, ref: c, title: d, description: e, $default: f, examples: g, definitions: h, multipleOf: i, maximum: j, exclusiveMaximum: k, minimum: l, exclusiveMinimum: m, maxLength: n, minLength: o, pattern: p, format: q, items: r, additionalItems: s, maxItems: t, minItems: u, uniqueItems: v, contains: w, maxProperties: x, minProperties: y, required: z, properties: _1, patternProperties: _2, additionalProperties: _3, dependencies: _4, propertyNames: _5, $enum: _6, $const: _7, allOf: _8, anyOf: _9, oneOf: _10, not: _11, source: _12};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _1602$json_schema$Json_Schema_Definitions$ObjectSchema = function (a) {
	return {ctor: 'ObjectSchema', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$BooleanSchema = function (a) {
	return {ctor: 'BooleanSchema', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$Schemata = function (a) {
	return {ctor: 'Schemata', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$ArrayOfItems = function (a) {
	return {ctor: 'ArrayOfItems', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$ItemDefinition = function (a) {
	return {ctor: 'ItemDefinition', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$NoItems = {ctor: 'NoItems'};
var _1602$json_schema$Json_Schema_Definitions$PropSchema = function (a) {
	return {ctor: 'PropSchema', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$ArrayPropNames = function (a) {
	return {ctor: 'ArrayPropNames', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$NumberBoundary = function (a) {
	return {ctor: 'NumberBoundary', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$BoolBoundary = function (a) {
	return {ctor: 'BoolBoundary', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$RowEncoder = F3(
	function (a, b, c) {
		return {ctor: 'RowEncoder', _0: a, _1: b, _2: c};
	});
var _1602$json_schema$Json_Schema_Definitions$UnionType = function (a) {
	return {ctor: 'UnionType', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$NullableType = function (a) {
	return {ctor: 'NullableType', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$SingleType = function (a) {
	return {ctor: 'SingleType', _0: a};
};
var _1602$json_schema$Json_Schema_Definitions$AnyType = {ctor: 'AnyType'};
var _1602$json_schema$Json_Schema_Definitions$blankSubSchema = {
	type_: _1602$json_schema$Json_Schema_Definitions$AnyType,
	id: _elm_lang$core$Maybe$Nothing,
	ref: _elm_lang$core$Maybe$Nothing,
	title: _elm_lang$core$Maybe$Nothing,
	description: _elm_lang$core$Maybe$Nothing,
	$default: _elm_lang$core$Maybe$Nothing,
	examples: _elm_lang$core$Maybe$Nothing,
	definitions: _elm_lang$core$Maybe$Nothing,
	multipleOf: _elm_lang$core$Maybe$Nothing,
	maximum: _elm_lang$core$Maybe$Nothing,
	exclusiveMaximum: _elm_lang$core$Maybe$Nothing,
	minimum: _elm_lang$core$Maybe$Nothing,
	exclusiveMinimum: _elm_lang$core$Maybe$Nothing,
	maxLength: _elm_lang$core$Maybe$Nothing,
	minLength: _elm_lang$core$Maybe$Nothing,
	pattern: _elm_lang$core$Maybe$Nothing,
	format: _elm_lang$core$Maybe$Nothing,
	items: _1602$json_schema$Json_Schema_Definitions$NoItems,
	additionalItems: _elm_lang$core$Maybe$Nothing,
	maxItems: _elm_lang$core$Maybe$Nothing,
	minItems: _elm_lang$core$Maybe$Nothing,
	uniqueItems: _elm_lang$core$Maybe$Nothing,
	contains: _elm_lang$core$Maybe$Nothing,
	maxProperties: _elm_lang$core$Maybe$Nothing,
	minProperties: _elm_lang$core$Maybe$Nothing,
	required: _elm_lang$core$Maybe$Nothing,
	properties: _elm_lang$core$Maybe$Nothing,
	patternProperties: _elm_lang$core$Maybe$Nothing,
	additionalProperties: _elm_lang$core$Maybe$Nothing,
	dependencies: {ctor: '[]'},
	propertyNames: _elm_lang$core$Maybe$Nothing,
	$enum: _elm_lang$core$Maybe$Nothing,
	$const: _elm_lang$core$Maybe$Nothing,
	allOf: _elm_lang$core$Maybe$Nothing,
	anyOf: _elm_lang$core$Maybe$Nothing,
	oneOf: _elm_lang$core$Maybe$Nothing,
	not: _elm_lang$core$Maybe$Nothing,
	source: _elm_lang$core$Json_Encode$object(
		{ctor: '[]'})
};
var _1602$json_schema$Json_Schema_Definitions$blankSchema = _1602$json_schema$Json_Schema_Definitions$ObjectSchema(_1602$json_schema$Json_Schema_Definitions$blankSubSchema);
var _1602$json_schema$Json_Schema_Definitions$NullType = {ctor: 'NullType'};
var _1602$json_schema$Json_Schema_Definitions$ObjectType = {ctor: 'ObjectType'};
var _1602$json_schema$Json_Schema_Definitions$ArrayType = {ctor: 'ArrayType'};
var _1602$json_schema$Json_Schema_Definitions$BooleanType = {ctor: 'BooleanType'};
var _1602$json_schema$Json_Schema_Definitions$StringType = {ctor: 'StringType'};
var _1602$json_schema$Json_Schema_Definitions$NumberType = {ctor: 'NumberType'};
var _1602$json_schema$Json_Schema_Definitions$IntegerType = {ctor: 'IntegerType'};
var _1602$json_schema$Json_Schema_Definitions$stringToType = function (s) {
	var _p20 = s;
	switch (_p20) {
		case 'integer':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$IntegerType);
		case 'number':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$NumberType);
		case 'string':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$StringType);
		case 'boolean':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$BooleanType);
		case 'array':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$ArrayType);
		case 'object':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$ObjectType);
		case 'null':
			return _elm_lang$core$Result$Ok(_1602$json_schema$Json_Schema_Definitions$NullType);
		default:
			return _elm_lang$core$Result$Err(
				A2(_elm_lang$core$Basics_ops['++'], 'Unknown type: ', s));
	}
};
var _1602$json_schema$Json_Schema_Definitions$singleTypeDecoder = function (s) {
	var _p21 = _1602$json_schema$Json_Schema_Definitions$stringToType(s);
	if (_p21.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p21._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p21._0);
	}
};
var _1602$json_schema$Json_Schema_Definitions$multipleTypesDecoder = function (lst) {
	var _p22 = lst;
	_v15_3:
	do {
		if (_p22.ctor === '::') {
			if (_p22._1.ctor === '::') {
				if (_p22._1._1.ctor === '[]') {
					if (_p22._1._0 === 'null') {
						return A2(
							_elm_lang$core$Json_Decode$map,
							_1602$json_schema$Json_Schema_Definitions$NullableType,
							_1602$json_schema$Json_Schema_Definitions$singleTypeDecoder(_p22._0));
					} else {
						if (_p22._0 === 'null') {
							return A2(
								_elm_lang$core$Json_Decode$map,
								_1602$json_schema$Json_Schema_Definitions$NullableType,
								_1602$json_schema$Json_Schema_Definitions$singleTypeDecoder(_p22._1._0));
						} else {
							break _v15_3;
						}
					}
				} else {
					break _v15_3;
				}
			} else {
				return A2(
					_elm_lang$core$Json_Decode$map,
					_1602$json_schema$Json_Schema_Definitions$SingleType,
					_1602$json_schema$Json_Schema_Definitions$singleTypeDecoder(_p22._0));
			}
		} else {
			break _v15_3;
		}
	} while(false);
	return _1602$json_schema$Util$resultToDecoder(
		A2(
			_elm_lang$core$Result$andThen,
			function (_p23) {
				return _elm_lang$core$Result$Ok(
					_1602$json_schema$Json_Schema_Definitions$UnionType(_p23));
			},
			_1602$json_schema$Util$foldResults(
				A2(
					_elm_lang$core$List$map,
					_1602$json_schema$Json_Schema_Definitions$stringToType,
					_elm_lang$core$List$sort(_p22)))));
};
var _1602$json_schema$Json_Schema_Definitions$decoder = function () {
	var exclusiveBoundaryDecoder = _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_schema$Json_Schema_Definitions$BoolBoundary, _elm_lang$core$Json_Decode$bool),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_schema$Json_Schema_Definitions$NumberBoundary, _elm_lang$core$Json_Decode$float),
				_1: {ctor: '[]'}
			}
		});
	var booleanSchemaDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (b) {
			return b ? _elm_lang$core$Json_Decode$succeed(
				_1602$json_schema$Json_Schema_Definitions$BooleanSchema(true)) : _elm_lang$core$Json_Decode$succeed(
				_1602$json_schema$Json_Schema_Definitions$BooleanSchema(false));
		},
		_elm_lang$core$Json_Decode$bool);
	var multipleTypes = A2(
		_elm_lang$core$Json_Decode$andThen,
		_1602$json_schema$Json_Schema_Definitions$multipleTypesDecoder,
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string));
	var singleType = A2(_elm_lang$core$Json_Decode$andThen, _1602$json_schema$Json_Schema_Definitions$singleTypeDecoder, _elm_lang$core$Json_Decode$string);
	var objectSchemaDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt,
		{ctor: '[]'},
		_elm_lang$core$Json_Decode$value,
		A4(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
			'not',
			_elm_lang$core$Json_Decode$nullable(
				_elm_lang$core$Json_Decode$lazy(
					function (_p24) {
						return _1602$json_schema$Json_Schema_Definitions$decoder;
					})),
			_elm_lang$core$Maybe$Nothing,
			A4(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
				'oneOf',
				_elm_lang$core$Json_Decode$nullable(
					_elm_lang$core$Json_Decode$lazy(
						function (_p25) {
							return _1602$json_schema$Json_Schema_Definitions$nonEmptyListOfSchemas;
						})),
				_elm_lang$core$Maybe$Nothing,
				A4(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
					'anyOf',
					_elm_lang$core$Json_Decode$nullable(
						_elm_lang$core$Json_Decode$lazy(
							function (_p26) {
								return _1602$json_schema$Json_Schema_Definitions$nonEmptyListOfSchemas;
							})),
					_elm_lang$core$Maybe$Nothing,
					A4(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
						'allOf',
						_elm_lang$core$Json_Decode$nullable(
							_elm_lang$core$Json_Decode$lazy(
								function (_p27) {
									return _1602$json_schema$Json_Schema_Definitions$nonEmptyListOfSchemas;
								})),
						_elm_lang$core$Maybe$Nothing,
						A4(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
							'const',
							A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value),
							_elm_lang$core$Maybe$Nothing,
							A4(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
								'enum',
								_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonEmptyUniqueArrayOfValuesDecoder),
								_elm_lang$core$Maybe$Nothing,
								A4(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
									'propertyNames',
									_elm_lang$core$Json_Decode$nullable(
										_elm_lang$core$Json_Decode$lazy(
											function (_p28) {
												return _1602$json_schema$Json_Schema_Definitions$decoder;
											})),
									_elm_lang$core$Maybe$Nothing,
									A4(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
										'dependencies',
										_elm_lang$core$Json_Decode$lazy(
											function (_p29) {
												return _1602$json_schema$Json_Schema_Definitions$dependenciesDecoder;
											}),
										{ctor: '[]'},
										A4(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
											'additionalProperties',
											_elm_lang$core$Json_Decode$nullable(
												_elm_lang$core$Json_Decode$lazy(
													function (_p30) {
														return _1602$json_schema$Json_Schema_Definitions$decoder;
													})),
											_elm_lang$core$Maybe$Nothing,
											A4(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
												'patternProperties',
												_elm_lang$core$Json_Decode$nullable(
													_elm_lang$core$Json_Decode$lazy(
														function (_p31) {
															return _1602$json_schema$Json_Schema_Definitions$schemataDecoder;
														})),
												_elm_lang$core$Maybe$Nothing,
												A4(
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
													'properties',
													_elm_lang$core$Json_Decode$nullable(
														_elm_lang$core$Json_Decode$lazy(
															function (_p32) {
																return _1602$json_schema$Json_Schema_Definitions$schemataDecoder;
															})),
													_elm_lang$core$Maybe$Nothing,
													A4(
														_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
														'required',
														_elm_lang$core$Json_Decode$nullable(
															_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
														_elm_lang$core$Maybe$Nothing,
														A4(
															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
															'minProperties',
															_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
															_elm_lang$core$Maybe$Nothing,
															A4(
																_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																'maxProperties',
																_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
																_elm_lang$core$Maybe$Nothing,
																A4(
																	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																	'contains',
																	_elm_lang$core$Json_Decode$nullable(
																		_elm_lang$core$Json_Decode$lazy(
																			function (_p33) {
																				return _1602$json_schema$Json_Schema_Definitions$decoder;
																			})),
																	_elm_lang$core$Maybe$Nothing,
																	A4(
																		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																		'uniqueItems',
																		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$bool),
																		_elm_lang$core$Maybe$Nothing,
																		A4(
																			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																			'minItems',
																			_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
																			_elm_lang$core$Maybe$Nothing,
																			A4(
																				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																				'maxItems',
																				_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
																				_elm_lang$core$Maybe$Nothing,
																				A4(
																					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																					'additionalItems',
																					_elm_lang$core$Json_Decode$nullable(
																						_elm_lang$core$Json_Decode$lazy(
																							function (_p34) {
																								return _1602$json_schema$Json_Schema_Definitions$decoder;
																							})),
																					_elm_lang$core$Maybe$Nothing,
																					A4(
																						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																						'items',
																						_elm_lang$core$Json_Decode$lazy(
																							function (_p35) {
																								return _1602$json_schema$Json_Schema_Definitions$itemsDecoder;
																							}),
																						_1602$json_schema$Json_Schema_Definitions$NoItems,
																						A4(
																							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																							'format',
																							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
																							_elm_lang$core$Maybe$Nothing,
																							A4(
																								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																								'pattern',
																								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
																								_elm_lang$core$Maybe$Nothing,
																								A4(
																									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																									'minLength',
																									_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
																									_elm_lang$core$Maybe$Nothing,
																									A4(
																										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																										'maxLength',
																										_elm_lang$core$Json_Decode$nullable(_1602$json_schema$Json_Schema_Definitions$nonNegativeInt),
																										_elm_lang$core$Maybe$Nothing,
																										A4(
																											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																											'exclusiveMinimum',
																											_elm_lang$core$Json_Decode$nullable(exclusiveBoundaryDecoder),
																											_elm_lang$core$Maybe$Nothing,
																											A4(
																												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																												'minimum',
																												_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$float),
																												_elm_lang$core$Maybe$Nothing,
																												A4(
																													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																													'exclusiveMaximum',
																													_elm_lang$core$Json_Decode$nullable(exclusiveBoundaryDecoder),
																													_elm_lang$core$Maybe$Nothing,
																													A4(
																														_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																														'maximum',
																														_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$float),
																														_elm_lang$core$Maybe$Nothing,
																														A4(
																															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																															'multipleOf',
																															_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$float),
																															_elm_lang$core$Maybe$Nothing,
																															A4(
																																_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																'definitions',
																																_elm_lang$core$Json_Decode$nullable(
																																	_elm_lang$core$Json_Decode$lazy(
																																		function (_p36) {
																																			return _1602$json_schema$Json_Schema_Definitions$schemataDecoder;
																																		})),
																																_elm_lang$core$Maybe$Nothing,
																																A4(
																																	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																	'examples',
																																	_elm_lang$core$Json_Decode$nullable(
																																		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value)),
																																	_elm_lang$core$Maybe$Nothing,
																																	A4(
																																		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																		'default',
																																		A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value),
																																		_elm_lang$core$Maybe$Nothing,
																																		A4(
																																			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																			'description',
																																			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
																																			_elm_lang$core$Maybe$Nothing,
																																			A4(
																																				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																				'title',
																																				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
																																				_elm_lang$core$Maybe$Nothing,
																																				A4(
																																					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																					'$ref',
																																					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
																																					_elm_lang$core$Maybe$Nothing,
																																					A2(
																																						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
																																						A3(
																																							_elm_lang$core$Json_Decode$map2,
																																							F2(
																																								function (a, b) {
																																									return _elm_lang$core$Native_Utils.eq(a, _elm_lang$core$Maybe$Nothing) ? b : a;
																																								}),
																																							_elm_lang$core$Json_Decode$maybe(
																																								A2(_elm_lang$core$Json_Decode$field, '$id', _elm_lang$core$Json_Decode$string)),
																																							_elm_lang$core$Json_Decode$maybe(
																																								A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string))),
																																						A4(
																																							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
																																							'type',
																																							_elm_lang$core$Json_Decode$oneOf(
																																								{
																																									ctor: '::',
																																									_0: multipleTypes,
																																									_1: {
																																										ctor: '::',
																																										_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_schema$Json_Schema_Definitions$SingleType, singleType),
																																										_1: {ctor: '[]'}
																																									}
																																								}),
																																							_1602$json_schema$Json_Schema_Definitions$AnyType,
																																							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_1602$json_schema$Json_Schema_Definitions$SubSchema)))))))))))))))))))))))))))))))))))))));
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: booleanSchemaDecoder,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Json_Decode$andThen,
					function (b) {
						return _elm_lang$core$Json_Decode$succeed(
							_1602$json_schema$Json_Schema_Definitions$ObjectSchema(b));
					},
					objectSchemaDecoder),
				_1: {ctor: '[]'}
			}
		});
}();
var _1602$json_schema$Json_Schema_Definitions$dependenciesDecoder = _elm_lang$core$Json_Decode$keyValuePairs(
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Json_Decode$map,
				_1602$json_schema$Json_Schema_Definitions$ArrayPropNames,
				_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_schema$Json_Schema_Definitions$PropSchema, _1602$json_schema$Json_Schema_Definitions$decoder),
				_1: {ctor: '[]'}
			}
		}));
var _1602$json_schema$Json_Schema_Definitions$itemsDecoder = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_lang$core$Json_Decode$map,
			_1602$json_schema$Json_Schema_Definitions$ArrayOfItems,
			_elm_lang$core$Json_Decode$list(_1602$json_schema$Json_Schema_Definitions$decoder)),
		_1: {
			ctor: '::',
			_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_schema$Json_Schema_Definitions$ItemDefinition, _1602$json_schema$Json_Schema_Definitions$decoder),
			_1: {ctor: '[]'}
		}
	});
var _1602$json_schema$Json_Schema_Definitions$nonEmptyListOfSchemas = A2(
	_elm_lang$core$Json_Decode$andThen,
	_1602$json_schema$Json_Schema_Definitions$failIfEmpty,
	_elm_lang$core$Json_Decode$list(
		_elm_lang$core$Json_Decode$lazy(
			function (_p37) {
				return _1602$json_schema$Json_Schema_Definitions$decoder;
			})));
var _1602$json_schema$Json_Schema_Definitions$schemataDecoder = A2(
	_elm_lang$core$Json_Decode$map,
	_1602$json_schema$Json_Schema_Definitions$Schemata,
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (x) {
			return _elm_lang$core$Json_Decode$succeed(
				_elm_lang$core$List$reverse(x));
		},
		_elm_lang$core$Json_Decode$keyValuePairs(
			_elm_lang$core$Json_Decode$lazy(
				function (_p38) {
					return _1602$json_schema$Json_Schema_Definitions$decoder;
				}))));

var _1602$json_schema$Json_Schemata$decodeUnsafe = function (_p0) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_1602$json_schema$Json_Schema_Definitions$blankSchema,
		A2(_elm_lang$core$Json_Decode$decodeString, _1602$json_schema$Json_Schema_Definitions$decoder, _p0));
};
var _1602$json_schema$Json_Schemata$draft6 = _1602$json_schema$Json_Schemata$decodeUnsafe('\n    {\n    \"$schema\": \"http://json-schema.org/draft-06/schema#\",\n    \"$id\": \"http://json-schema.org/draft-06/schema#\",\n    \"title\": \"Core schema meta-schema\",\n    \"definitions\": {\n        \"schemaArray\": {\n            \"type\": \"array\",\n            \"minItems\": 1,\n            \"items\": { \"$ref\": \"#\" }\n        },\n        \"nonNegativeInteger\": {\n            \"type\": \"integer\",\n            \"minimum\": 0\n        },\n        \"nonNegativeIntegerDefault0\": {\n            \"allOf\": [\n                { \"$ref\": \"#/definitions/nonNegativeInteger\" },\n                { \"default\": 0 }\n            ]\n        },\n        \"simpleTypes\": {\n            \"enum\": [\n                \"array\",\n                \"boolean\",\n                \"integer\",\n                \"null\",\n                \"number\",\n                \"object\",\n                \"string\"\n            ]\n        },\n        \"stringArray\": {\n            \"type\": \"array\",\n            \"items\": { \"type\": \"string\" },\n            \"uniqueItems\": true,\n            \"default\": []\n        }\n    },\n    \"type\": [\"object\", \"boolean\"],\n    \"properties\": {\n        \"$id\": {\n            \"type\": \"string\",\n            \"format\": \"uri-reference\",\n            \"description\": \"Identifier of schema\"\n        },\n        \"$schema\": {\n            \"type\": \"string\",\n            \"format\": \"uri\",\n            \"description\": \"Link to a schema which validates this object\"\n        },\n        \"$ref\": {\n            \"type\": \"string\",\n            \"format\": \"uri-reference\"\n        },\n        \"title\": {\n            \"type\": \"string\"\n        },\n        \"description\": {\n            \"type\": \"string\"\n        },\n        \"default\": {},\n        \"multipleOf\": {\n            \"type\": \"number\",\n            \"exclusiveMinimum\": 0\n        },\n        \"maximum\": {\n            \"type\": \"number\"\n        },\n        \"exclusiveMaximum\": {\n            \"type\": \"number\"\n        },\n        \"minimum\": {\n            \"type\": \"number\"\n        },\n        \"exclusiveMinimum\": {\n            \"type\": \"number\"\n        },\n        \"maxLength\": { \"$ref\": \"#/definitions/nonNegativeInteger\" },\n        \"minLength\": { \"$ref\": \"#/definitions/nonNegativeIntegerDefault0\" },\n        \"pattern\": {\n            \"type\": \"string\",\n            \"format\": \"regex\"\n        },\n        \"additionalItems\": { \"$ref\": \"#\" },\n        \"items\": {\n            \"anyOf\": [\n                { \"$ref\": \"#\" },\n                { \"$ref\": \"#/definitions/schemaArray\" }\n            ],\n            \"default\": {}\n        },\n        \"maxItems\": { \"$ref\": \"#/definitions/nonNegativeInteger\" },\n        \"minItems\": { \"$ref\": \"#/definitions/nonNegativeIntegerDefault0\" },\n        \"uniqueItems\": {\n            \"type\": \"boolean\",\n            \"default\": false\n        },\n        \"contains\": { \"$ref\": \"#\" },\n        \"maxProperties\": { \"$ref\": \"#/definitions/nonNegativeInteger\" },\n        \"minProperties\": { \"$ref\": \"#/definitions/nonNegativeIntegerDefault0\" },\n        \"required\": { \"$ref\": \"#/definitions/stringArray\" },\n        \"additionalProperties\": { \"$ref\": \"#\" },\n        \"definitions\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"properties\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"patternProperties\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"dependencies\": {\n            \"type\": \"object\",\n            \"additionalProperties\": {\n                \"anyOf\": [\n                    { \"$ref\": \"#\" },\n                    { \"$ref\": \"#/definitions/stringArray\" }\n                ]\n            }\n        },\n        \"propertyNames\": { \"$ref\": \"#\" },\n        \"const\": {},\n        \"enum\": {\n            \"type\": \"array\",\n            \"minItems\": 1,\n            \"uniqueItems\": true\n        },\n        \"type\": {\n            \"anyOf\": [\n                { \"$ref\": \"#/definitions/simpleTypes\" },\n                {\n                    \"type\": \"array\",\n                    \"items\": { \"$ref\": \"#/definitions/simpleTypes\" },\n                    \"minItems\": 1,\n                    \"uniqueItems\": true\n                }\n            ]\n        },\n        \"format\": { \"type\": \"string\" },\n        \"allOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"anyOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"oneOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"not\": { \"$ref\": \"#\" }\n    },\n    \"default\": {}\n    }\n    ');
var _1602$json_schema$Json_Schemata$draft4 = _1602$json_schema$Json_Schemata$decodeUnsafe('\n    {\n    \"id\": \"http://json-schema.org/draft-04/schema#\",\n    \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n    \"description\": \"Core schema meta-schema\",\n    \"definitions\": {\n        \"schemaArray\": {\n            \"type\": \"array\",\n            \"minItems\": 1,\n            \"items\": { \"$ref\": \"#\" }\n        },\n        \"positiveInteger\": {\n            \"type\": \"integer\",\n            \"minimum\": 0\n        },\n        \"positiveIntegerDefault0\": {\n            \"allOf\": [ { \"$ref\": \"#/definitions/positiveInteger\" }, { \"default\": 0 } ]\n        },\n        \"simpleTypes\": {\n            \"enum\": [ \"array\", \"boolean\", \"integer\", \"null\", \"number\", \"object\", \"string\" ]\n        },\n        \"stringArray\": {\n            \"type\": \"array\",\n            \"items\": { \"type\": \"string\" },\n            \"minItems\": 1,\n            \"uniqueItems\": true\n        }\n    },\n    \"type\": \"object\",\n    \"properties\": {\n        \"id\": {\n            \"type\": \"string\",\n            \"format\": \"uri\",\n            \"description\": \"Identifier of schema\"\n        },\n        \"$schema\": {\n            \"type\": \"string\",\n            \"format\": \"uri\",\n            \"description\": \"Link to a schema which validates this object\"\n        },\n        \"title\": {\n            \"type\": \"string\"\n        },\n        \"description\": {\n            \"type\": \"string\"\n        },\n        \"default\": {},\n        \"multipleOf\": {\n            \"type\": \"number\",\n            \"minimum\": 0,\n            \"exclusiveMinimum\": true\n        },\n        \"maximum\": {\n            \"type\": \"number\"\n        },\n        \"exclusiveMaximum\": {\n            \"type\": \"boolean\",\n            \"default\": false\n        },\n        \"minimum\": {\n            \"type\": \"number\"\n        },\n        \"exclusiveMinimum\": {\n            \"type\": \"boolean\",\n            \"default\": false\n        },\n        \"maxLength\": { \"$ref\": \"#/definitions/positiveInteger\" },\n        \"minLength\": { \"$ref\": \"#/definitions/positiveIntegerDefault0\" },\n        \"pattern\": {\n            \"type\": \"string\",\n            \"format\": \"regex\"\n        },\n        \"additionalItems\": {\n            \"anyOf\": [\n                { \"type\": \"boolean\" },\n                { \"$ref\": \"#\" }\n            ],\n            \"default\": {}\n        },\n        \"items\": {\n            \"anyOf\": [\n                { \"$ref\": \"#\" },\n                { \"$ref\": \"#/definitions/schemaArray\" }\n            ],\n            \"default\": {}\n        },\n        \"maxItems\": { \"$ref\": \"#/definitions/positiveInteger\" },\n        \"minItems\": { \"$ref\": \"#/definitions/positiveIntegerDefault0\" },\n        \"uniqueItems\": {\n            \"type\": \"boolean\",\n            \"default\": false\n        },\n        \"maxProperties\": { \"$ref\": \"#/definitions/positiveInteger\" },\n        \"minProperties\": { \"$ref\": \"#/definitions/positiveIntegerDefault0\" },\n        \"required\": { \"$ref\": \"#/definitions/stringArray\" },\n        \"additionalProperties\": {\n            \"anyOf\": [\n                { \"type\": \"boolean\" },\n                { \"$ref\": \"#\" }\n            ],\n            \"default\": {}\n        },\n        \"definitions\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"properties\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"patternProperties\": {\n            \"type\": \"object\",\n            \"additionalProperties\": { \"$ref\": \"#\" },\n            \"default\": {}\n        },\n        \"dependencies\": {\n            \"type\": \"object\",\n            \"additionalProperties\": {\n                \"anyOf\": [\n                    { \"$ref\": \"#\" },\n                    { \"$ref\": \"#/definitions/stringArray\" }\n                ]\n            }\n        },\n        \"enum\": {\n            \"type\": \"array\",\n            \"minItems\": 1,\n            \"uniqueItems\": true\n        },\n        \"type\": {\n            \"anyOf\": [\n                { \"$ref\": \"#/definitions/simpleTypes\" },\n                {\n                    \"type\": \"array\",\n                    \"items\": { \"$ref\": \"#/definitions/simpleTypes\" },\n                    \"minItems\": 1,\n                    \"uniqueItems\": true\n                }\n            ]\n        },\n        \"allOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"anyOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"oneOf\": { \"$ref\": \"#/definitions/schemaArray\" },\n        \"not\": { \"$ref\": \"#\" }\n    },\n    \"dependencies\": {\n        \"exclusiveMaximum\": [ \"maximum\" ],\n        \"exclusiveMinimum\": [ \"minimum\" ]\n    },\n    \"default\": {}\n    }\n    ');

var _1602$json_schema$Ref$whenObjectSchema = function (schema) {
	var _p0 = schema;
	if (_p0.ctor === 'ObjectSchema') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _1602$json_schema$Ref$removeTrailingSlash = function (s) {
	return A2(_elm_lang$core$String$endsWith, '#', s) ? A2(_elm_lang$core$String$dropRight, 1, s) : s;
};
var _1602$json_schema$Ref$makeJsonPointer = function (_p1) {
	var _p2 = _p1;
	var _p4 = _p2._2;
	var _p3 = _p2._1;
	return _p2._0 ? A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		_p3,
		A2(
			_elm_lang$core$String$join,
			'/',
			{ctor: '::', _0: '#', _1: _p4})) : (_elm_lang$core$List$isEmpty(_p4) ? _p3 : A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		A2(_elm_lang$core$Basics_ops['++'], _p3, '#'),
		A2(_elm_lang$core$String$join, '/', _p4)));
};
var _1602$json_schema$Ref$percent = _elm_lang$core$Regex$regex('%25');
var _1602$json_schema$Ref$slash = _elm_lang$core$Regex$regex('~1');
var _1602$json_schema$Ref$tilde = _elm_lang$core$Regex$regex('~0');
var _1602$json_schema$Ref$unescapeJsonPathFragment = function (s) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_1602$json_schema$Ref$percent,
		function (_p5) {
			return '%';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_1602$json_schema$Ref$slash,
			function (_p6) {
				return '/';
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_1602$json_schema$Ref$tilde,
				function (_p7) {
					return '~';
				},
				s)));
};
var _1602$json_schema$Ref$lastFragment = _elm_lang$core$Regex$regex('\\/[^\\/]*$');
var _1602$json_schema$Ref$absoluteUri = _elm_lang$core$Regex$regex('\\/\\/|^\\/');
var _1602$json_schema$Ref$parseJsonPointer = F2(
	function (pointer, currentNamespace) {
		var isAbsolute = _elm_lang$core$Regex$contains(_1602$json_schema$Ref$absoluteUri);
		var hasFragments = _elm_lang$core$Regex$contains(_1602$json_schema$Ref$lastFragment);
		var merge = F2(
			function (base, relative) {
				return (isAbsolute(base) && hasFragments(base)) ? A4(
					_elm_lang$core$Regex$replace,
					_elm_lang$core$Regex$All,
					_1602$json_schema$Ref$lastFragment,
					function (_p8) {
						return A2(_elm_lang$core$Basics_ops['++'], '/', relative);
					},
					base) : relative;
			});
		var _p9 = function () {
			var _p10 = A2(_elm_lang$core$String$split, '#', pointer);
			if (_p10.ctor === '[]') {
				return {ctor: '_Tuple2', _0: currentNamespace, _1: ''};
			} else {
				if (_p10._1.ctor === '[]') {
					var _p11 = _p10._0;
					return _elm_lang$core$Native_Utils.eq(_p11, '') ? {ctor: '_Tuple2', _0: currentNamespace, _1: ''} : (isAbsolute(_p11) ? {ctor: '_Tuple2', _0: _p11, _1: ''} : {
						ctor: '_Tuple2',
						_0: A2(merge, currentNamespace, _p11),
						_1: ''
					});
				} else {
					var _p13 = _p10._1._0;
					var _p12 = _p10._0;
					return _elm_lang$core$Native_Utils.eq(_p12, '') ? {ctor: '_Tuple2', _0: currentNamespace, _1: _p13} : (isAbsolute(_p12) ? {ctor: '_Tuple2', _0: _p12, _1: _p13} : {
						ctor: '_Tuple2',
						_0: A2(merge, currentNamespace, _p12),
						_1: _p13
					});
				}
			}
		}();
		var ns = _p9._0;
		var hash = _p9._1;
		var isPointer = hasFragments(hash);
		return {
			ctor: '_Tuple3',
			_0: isPointer,
			_1: ns,
			_2: isPointer ? A2(
				_elm_lang$core$List$map,
				_1602$json_schema$Ref$unescapeJsonPathFragment,
				A2(
					_elm_lang$core$List$drop,
					1,
					A2(_elm_lang$core$String$split, '/', hash))) : ((!_elm_lang$core$Native_Utils.eq(hash, '')) ? {
				ctor: '::',
				_0: hash,
				_1: {ctor: '[]'}
			} : {ctor: '[]'})
		};
	});
var _1602$json_schema$Ref$resolveReference = F4(
	function (ns, pool, schema, ref) {
		var resolveRecursively = F4(
			function (namespace, limit, schema, ref) {
				var a = _elm_lang$core$Dict$keys(pool);
				var _p14 = A2(_1602$json_schema$Ref$parseJsonPointer, ref, namespace);
				var isPointer = _p14._0;
				var ns = _p14._1;
				var path = _p14._2;
				var newJsonPointer = _1602$json_schema$Ref$makeJsonPointer(
					{ctor: '_Tuple3', _0: isPointer, _1: ns, _2: path});
				return (_elm_lang$core$Native_Utils.cmp(limit, 0) > 0) ? (isPointer ? A2(
					_elm_lang$core$Maybe$andThen,
					function (os) {
						return A2(
							_elm_lang$core$Maybe$andThen,
							function (def) {
								var _p15 = def;
								if (_p15.ctor === 'ObjectSchema') {
									var _p16 = _p15._0.ref;
									if (_p16.ctor === 'Just') {
										return A4(resolveRecursively, ns, limit - 1, schema, _p16._0);
									} else {
										return _elm_lang$core$Maybe$Just(
											{ctor: '_Tuple2', _0: ns, _1: def});
									}
								} else {
									return _elm_lang$core$Maybe$Just(
										{ctor: '_Tuple2', _0: ns, _1: def});
								}
							},
							_elm_lang$core$Result$toMaybe(
								A2(
									_elm_lang$core$Json_Decode$decodeValue,
									A2(_elm_lang$core$Json_Decode$at, path, _1602$json_schema$Json_Schema_Definitions$decoder),
									os.source)));
					},
					A2(
						_elm_lang$core$Maybe$andThen,
						_1602$json_schema$Ref$whenObjectSchema,
						_elm_lang$core$Native_Utils.eq(ns, '') ? _elm_lang$core$Maybe$Just(schema) : A2(_elm_lang$core$Dict$get, ns, pool))) : (_elm_lang$core$Native_Utils.eq(newJsonPointer, '') ? _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: '', _1: schema}) : A2(
					_elm_lang$core$Maybe$map,
					function (x) {
						return {ctor: '_Tuple2', _0: ns, _1: x};
					},
					A2(_elm_lang$core$Dict$get, newJsonPointer, pool)))) : _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: ns, _1: schema});
			});
		var rootNs = A2(
			_elm_lang$core$Maybe$withDefault,
			ns,
			A2(
				_elm_lang$core$Maybe$map,
				_1602$json_schema$Ref$removeTrailingSlash,
				A2(
					_elm_lang$core$Maybe$andThen,
					function (_) {
						return _.id;
					},
					_1602$json_schema$Ref$whenObjectSchema(schema))));
		return A4(resolveRecursively, rootNs, 10, schema, ref);
	});
var _1602$json_schema$Ref$defaultPool = A3(
	_elm_lang$core$Dict$insert,
	'http://json-schema.org/draft-04/schema',
	_1602$json_schema$Json_Schemata$draft4,
	A3(
		_elm_lang$core$Dict$insert,
		'http://json-schema.org/draft-06/schema#',
		_1602$json_schema$Json_Schemata$draft6,
		A3(_elm_lang$core$Dict$insert, 'http://json-schema.org/draft-06/schema', _1602$json_schema$Json_Schemata$draft6, _elm_lang$core$Dict$empty)));

var _1602$json_schema$Json_Schema_Validation$concatErrors = _elm_lang$core$List$foldl(
	F2(
		function (x, res) {
			var _p0 = x;
			if (_p0.ctor === 'Ok') {
				return res;
			} else {
				var _p1 = res;
				if (_p1.ctor === 'Ok') {
					return x;
				} else {
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$core$Basics_ops['++'], _p1._0, _p0._0));
				}
			}
		}));
var _1602$json_schema$Json_Schema_Validation$stringify = _elm_lang$core$Json_Encode$encode(0);
var _1602$json_schema$Json_Schema_Validation$canonical = function (v) {
	var _p2 = A2(
		_elm_lang$core$Json_Decode$decodeValue,
		_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
		v);
	if (_p2.ctor === 'Ok') {
		return _1602$json_schema$Json_Schema_Validation$stringify(
			_elm_lang$core$Json_Encode$object(
				A2(
					_elm_lang$core$List$sortBy,
					function (_p3) {
						var _p4 = _p3;
						return _p4._0;
					},
					_p2._0)));
	} else {
		return _1602$json_schema$Json_Schema_Validation$stringify(v);
	}
};
var _1602$json_schema$Json_Schema_Validation$defaultOptions = {applyDefaults: false};
var _1602$json_schema$Json_Schema_Validation$ValidationOptions = function (a) {
	return {applyDefaults: a};
};
var _1602$json_schema$Json_Schema_Validation$JsonPointer = F2(
	function (a, b) {
		return {ns: a, path: b};
	});
var _1602$json_schema$Json_Schema_Validation$Error = F2(
	function (a, b) {
		return {jsonPointer: a, details: b};
	});
var _1602$json_schema$Json_Schema_Validation$AlwaysFail = {ctor: 'AlwaysFail'};
var _1602$json_schema$Json_Schema_Validation$UnresolvableReference = function (a) {
	return {ctor: 'UnresolvableReference', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$Not = {ctor: 'Not'};
var _1602$json_schema$Json_Schema_Validation$OneOfManySucceed = function (a) {
	return {ctor: 'OneOfManySucceed', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$OneOfNoneSucceed = {ctor: 'OneOfNoneSucceed'};
var _1602$json_schema$Json_Schema_Validation$InvalidType = function (a) {
	return {ctor: 'InvalidType', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$Const = {ctor: 'Const'};
var _1602$json_schema$Json_Schema_Validation$Enum = {ctor: 'Enum'};
var _1602$json_schema$Json_Schema_Validation$InvalidPropertyName = function (a) {
	return {ctor: 'InvalidPropertyName', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$AdditionalPropertyDisallowed = {ctor: 'AdditionalPropertyDisallowed'};
var _1602$json_schema$Json_Schema_Validation$AdditionalPropertiesDisallowed = function (a) {
	return {ctor: 'AdditionalPropertiesDisallowed', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$RequiredProperty = {ctor: 'RequiredProperty'};
var _1602$json_schema$Json_Schema_Validation$Required = function (a) {
	return {ctor: 'Required', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$MinProperties = F2(
	function (a, b) {
		return {ctor: 'MinProperties', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$MaxProperties = F2(
	function (a, b) {
		return {ctor: 'MaxProperties', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$Contains = {ctor: 'Contains'};
var _1602$json_schema$Json_Schema_Validation$UniqueItems = function (a) {
	return {ctor: 'UniqueItems', _0: a};
};
var _1602$json_schema$Json_Schema_Validation$MinItems = F2(
	function (a, b) {
		return {ctor: 'MinItems', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$MaxItems = F2(
	function (a, b) {
		return {ctor: 'MaxItems', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$Pattern = F2(
	function (a, b) {
		return {ctor: 'Pattern', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$MinLength = F2(
	function (a, b) {
		return {ctor: 'MinLength', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$MaxLength = F2(
	function (a, b) {
		return {ctor: 'MaxLength', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$ExclusiveMinimum = F2(
	function (a, b) {
		return {ctor: 'ExclusiveMinimum', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$ExclusiveMaximum = F2(
	function (a, b) {
		return {ctor: 'ExclusiveMaximum', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$Minimum = F2(
	function (a, b) {
		return {ctor: 'Minimum', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$Maximum = F2(
	function (a, b) {
		return {ctor: 'Maximum', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$MultipleOf = F2(
	function (a, b) {
		return {ctor: 'MultipleOf', _0: a, _1: b};
	});
var _1602$json_schema$Json_Schema_Validation$validate = F5(
	function (validationOptions, pool, value, rootSchema, schema) {
		var whenSubschema = F5(
			function (propOf, decoder, fn, value, schema) {
				var _p5 = propOf(schema);
				if (_p5.ctor === 'Just') {
					var _p6 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, value);
					if (_p6.ctor === 'Ok') {
						return A2(
							_elm_lang$core$Result$map,
							function (_p7) {
								return value;
							},
							A2(fn, _p5._0, _p6._0));
					} else {
						return _elm_lang$core$Result$Ok(value);
					}
				} else {
					return _elm_lang$core$Result$Ok(value);
				}
			});
		var when = F5(
			function (propOf, decoder, fn, value, schema) {
				var _p8 = propOf(schema);
				if (_p8.ctor === 'Just') {
					var _p9 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, value);
					if (_p9.ctor === 'Ok') {
						return A2(fn, _p8._0, _p9._0);
					} else {
						return _elm_lang$core$Result$Ok(value);
					}
				} else {
					return _elm_lang$core$Result$Ok(value);
				}
			});
		var findDuplicateItem = function (list) {
			return function (x) {
				return _elm_lang$core$Native_Utils.eq(x, -1) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
					A2(_elm_lang$core$List$drop, x, list));
			}(
				_1602$json_schema$Util$indexOfFirstDuplicate(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Json_Encode$encode(0),
						list)));
		};
		var getPropsByPattern = F2(
			function (pattern, props) {
				return A2(
					_elm_lang$core$List$filter,
					function (_p10) {
						var _p11 = _p10;
						return A2(
							_elm_lang$core$Regex$contains,
							_elm_lang$core$Regex$regex(pattern),
							_p11._0);
					},
					props);
			});
		var getSchema = F2(
			function (key, _p12) {
				var _p13 = _p12;
				return _elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$map,
						function (_p14) {
							var _p15 = _p14;
							return _p15._1;
						},
						A2(
							_elm_lang$core$List$filter,
							function (_p16) {
								var _p17 = _p16;
								return _elm_lang$core$Native_Utils.eq(_p17._0, key);
							},
							_p13._0)));
			});
		var validateSingleType = F4(
			function (validationOptions, jsonPointer, st, val) {
				var test = function (d) {
					return A2(
						_elm_lang$core$Result$mapError,
						function (s) {
							return {
								ctor: '::',
								_0: A2(
									_1602$json_schema$Json_Schema_Validation$Error,
									jsonPointer,
									_1602$json_schema$Json_Schema_Validation$InvalidType(s)),
								_1: {ctor: '[]'}
							};
						},
						A2(
							_elm_lang$core$Result$map,
							function (_p18) {
								return val;
							},
							A2(_elm_lang$core$Json_Decode$decodeValue, d, val)));
				};
				var _p19 = st;
				switch (_p19.ctor) {
					case 'IntegerType':
						return test(_elm_lang$core$Json_Decode$int);
					case 'NumberType':
						return test(_elm_lang$core$Json_Decode$float);
					case 'StringType':
						return test(_elm_lang$core$Json_Decode$string);
					case 'BooleanType':
						return test(_elm_lang$core$Json_Decode$bool);
					case 'NullType':
						return test(
							_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing));
					case 'ArrayType':
						return test(
							_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
					default:
						return test(
							_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value));
				}
			});
		var validateType = F4(
			function (validationOptions, jsonPointer, val, s) {
				var _p20 = s.type_;
				switch (_p20.ctor) {
					case 'AnyType':
						return _elm_lang$core$Result$Ok(val);
					case 'SingleType':
						return A4(validateSingleType, validationOptions, jsonPointer, _p20._0, val);
					case 'NullableType':
						var _p21 = A4(validateSingleType, validationOptions, jsonPointer, _1602$json_schema$Json_Schema_Definitions$NullType, val);
						if (_p21.ctor === 'Err') {
							return A4(validateSingleType, validationOptions, jsonPointer, _p20._0, val);
						} else {
							return _elm_lang$core$Result$Ok(val);
						}
					default:
						return A2(
							_elm_lang$core$List$any,
							function (st) {
								return _elm_lang$core$Native_Utils.eq(
									A4(validateSingleType, validationOptions, jsonPointer, st, val),
									_elm_lang$core$Result$Ok(val));
							},
							_p20._0) ? _elm_lang$core$Result$Ok(val) : _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_1602$json_schema$Json_Schema_Validation$Error,
									jsonPointer,
									_1602$json_schema$Json_Schema_Validation$InvalidType('None of desired types match')),
								_1: {ctor: '[]'}
							});
				}
			});
		var validateConst = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					when,
					function (_) {
						return _.$const;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function ($const, val) {
							var actual = _1602$json_schema$Json_Schema_Validation$canonical(val);
							var expected = _1602$json_schema$Json_Schema_Validation$canonical($const);
							return _elm_lang$core$Native_Utils.eq(expected, actual) ? _elm_lang$core$Result$Ok(val) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$Const),
									_1: {ctor: '[]'}
								});
						}));
			});
		var validateEnum = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					when,
					function (_) {
						return _.$enum;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function ($enum, val) {
							return A2(
								_elm_lang$core$List$any,
								function (item) {
									return _elm_lang$core$Native_Utils.eq(
										_1602$json_schema$Json_Schema_Validation$stringify(item),
										_1602$json_schema$Json_Schema_Validation$stringify(val));
								},
								$enum) ? _elm_lang$core$Result$Ok(val) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$Enum),
									_1: {ctor: '[]'}
								});
						}));
			});
		var validateRequired = F4(
			function (validationOptions, jsonPointer, v, s) {
				return A5(
					when,
					function (_) {
						return _.required;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (required, obj) {
							var keys = A2(
								_elm_lang$core$List$map,
								function (_p22) {
									var _p23 = _p22;
									return _p23._0;
								},
								obj);
							var missing = A2(
								_elm_lang$core$List$filter,
								function (_p24) {
									return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, keys, _p24);
								},
								required);
							return _elm_lang$core$List$isEmpty(missing) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								A2(
									F2(
										function (x, y) {
											return {ctor: '::', _0: x, _1: y};
										}),
									A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										_1602$json_schema$Json_Schema_Validation$Required(missing)),
									A2(
										_elm_lang$core$List$map,
										function (key) {
											return A2(
												_1602$json_schema$Json_Schema_Validation$Error,
												_elm_lang$core$Native_Utils.update(
													jsonPointer,
													{
														path: A2(
															_elm_lang$core$Basics_ops['++'],
															jsonPointer.path,
															{
																ctor: '::',
																_0: key,
																_1: {ctor: '[]'}
															})
													}),
												_1602$json_schema$Json_Schema_Validation$RequiredProperty);
										},
										missing)));
						}),
					v,
					s);
			});
		var validateMinProperties = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.minProperties;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (minProperties, obj) {
							var x = _elm_lang$core$List$length(obj);
							return (_elm_lang$core$Native_Utils.cmp(x, minProperties) > -1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MinProperties, minProperties, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateMaxProperties = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.maxProperties;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (maxProperties, obj) {
							var x = _elm_lang$core$List$length(obj);
							return (_elm_lang$core$Native_Utils.cmp(x, maxProperties) < 1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MaxProperties, maxProperties, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateUniqueItems = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.uniqueItems;
					},
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
					F2(
						function (uniqueItems, list) {
							if (!uniqueItems) {
								return _elm_lang$core$Result$Ok(v);
							} else {
								var _p25 = findDuplicateItem(list);
								if (_p25.ctor === 'Just') {
									return _elm_lang$core$Result$Err(
										{
											ctor: '::',
											_0: A2(
												_1602$json_schema$Json_Schema_Validation$Error,
												jsonPointer,
												_1602$json_schema$Json_Schema_Validation$UniqueItems(_p25._0)),
											_1: {ctor: '[]'}
										});
								} else {
									return _elm_lang$core$Result$Ok(v);
								}
							}
						}),
					v);
			});
		var validateMinItems = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.minItems;
					},
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
					F2(
						function (minItems, list) {
							var x = _elm_lang$core$List$length(list);
							return (_elm_lang$core$Native_Utils.cmp(x, minItems) > -1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MinItems, minItems, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateMaxItems = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.maxItems;
					},
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
					F2(
						function (maxItems, list) {
							var x = _elm_lang$core$List$length(list);
							return (_elm_lang$core$Native_Utils.cmp(x, maxItems) < 1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MaxItems, maxItems, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validatePattern = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.pattern;
					},
					_elm_lang$core$Json_Decode$string,
					F2(
						function (pattern, str) {
							return A2(
								_elm_lang$core$Regex$contains,
								_elm_lang$core$Regex$regex(pattern),
								str) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$Pattern, pattern, str)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateMinLength = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.minLength;
					},
					_elm_lang$core$Json_Decode$string,
					F2(
						function (minLength, str) {
							var x = _zwilias$elm_utf_tools$String_UTF32$length(str);
							return (_elm_lang$core$Native_Utils.cmp(x, minLength) > -1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MinLength, minLength, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateMaxLength = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.maxLength;
					},
					_elm_lang$core$Json_Decode$string,
					F2(
						function (maxLength, str) {
							var x = _zwilias$elm_utf_tools$String_UTF32$length(str);
							return (_elm_lang$core$Native_Utils.cmp(x, maxLength) < 1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MaxLength, maxLength, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateExclusiveMinimum = F4(
			function (validationOptions, jsonPointer, v, s) {
				return A5(
					when,
					function (_) {
						return _.exclusiveMinimum;
					},
					_elm_lang$core$Json_Decode$float,
					F2(
						function (min, x) {
							var _p26 = min;
							if (_p26.ctor === 'NumberBoundary') {
								var _p27 = _p26._0;
								return (_elm_lang$core$Native_Utils.cmp(x, _p27) > 0) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$ExclusiveMinimum, _p27, x)),
										_1: {ctor: '[]'}
									});
							} else {
								return _elm_lang$core$Result$Ok(v);
							}
						}),
					v,
					s);
			});
		var validateExclusiveMaximum = F4(
			function (validationOptions, jsonPointer, v, s) {
				return A5(
					when,
					function (_) {
						return _.exclusiveMaximum;
					},
					_elm_lang$core$Json_Decode$float,
					F2(
						function (max, x) {
							var _p28 = max;
							if (_p28.ctor === 'NumberBoundary') {
								var _p29 = _p28._0;
								return (_elm_lang$core$Native_Utils.cmp(x, _p29) < 0) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$ExclusiveMaximum, _p29, x)),
										_1: {ctor: '[]'}
									});
							} else {
								return _elm_lang$core$Result$Ok(v);
							}
						}),
					v,
					s);
			});
		var validateMinimum = F4(
			function (validationOptions, jsonPointer, v, s) {
				return A5(
					when,
					function (_) {
						return _.minimum;
					},
					_elm_lang$core$Json_Decode$float,
					F2(
						function (min, x) {
							var _p30 = s.exclusiveMinimum;
							if (((_p30.ctor === 'Just') && (_p30._0.ctor === 'BoolBoundary')) && (_p30._0._0 === true)) {
								return (_elm_lang$core$Native_Utils.cmp(x, min) > 0) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$ExclusiveMinimum, min, x)),
										_1: {ctor: '[]'}
									});
							} else {
								return (_elm_lang$core$Native_Utils.cmp(x, min) > -1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$Minimum, min, x)),
										_1: {ctor: '[]'}
									});
							}
						}),
					v,
					s);
			});
		var validateMaximum = F4(
			function (validationOptions, jsonPointer, v, s) {
				return A5(
					when,
					function (_) {
						return _.maximum;
					},
					_elm_lang$core$Json_Decode$float,
					F2(
						function (max, x) {
							var _p31 = s.exclusiveMaximum;
							if (((_p31.ctor === 'Just') && (_p31._0.ctor === 'BoolBoundary')) && (_p31._0._0 === true)) {
								return (_elm_lang$core$Native_Utils.cmp(x, max) < 0) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$ExclusiveMaximum, max, x)),
										_1: {ctor: '[]'}
									});
							} else {
								return (_elm_lang$core$Native_Utils.cmp(x, max) < 1) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											A2(_1602$json_schema$Json_Schema_Validation$Maximum, max, x)),
										_1: {ctor: '[]'}
									});
							}
						}),
					v,
					s);
			});
		var validateMultipleOf = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.multipleOf;
					},
					_elm_lang$core$Json_Decode$float,
					F2(
						function (multipleOf, x) {
							return _1602$json_schema$Util$isInt(x / multipleOf) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										A2(_1602$json_schema$Json_Schema_Validation$MultipleOf, multipleOf, x)),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var failWithListErrors = F5(
			function (validationOptions, jsonPointer, value, schema, validators) {
				return function (_p32) {
					var _p33 = _p32;
					var _p34 = _p33._0;
					if (_p34.ctor === '[]') {
						return _elm_lang$core$Result$Ok(_p33._1);
					} else {
						return _elm_lang$core$Result$Err(_p34);
					}
				}(
					A3(
						_elm_lang$core$List$foldl,
						F2(
							function (fn, _p35) {
								var _p36 = _p35;
								var _p39 = _p36._1;
								var _p38 = _p36._0;
								var _p37 = A4(fn, validationOptions, jsonPointer, _p39, schema);
								if (_p37.ctor === 'Ok') {
									return {ctor: '_Tuple2', _0: _p38, _1: _p37._0};
								} else {
									return {
										ctor: '_Tuple2',
										_0: A2(_elm_lang$core$Basics_ops['++'], _p38, _p37._0),
										_1: _p39
									};
								}
							}),
						{
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: value
						},
						validators));
			});
		var validateSubschema = F4(
			function (validationOptions, jsonPointer, os, value) {
				return A5(
					failWithListErrors,
					validationOptions,
					jsonPointer,
					value,
					os,
					{
						ctor: '::',
						_0: validateMultipleOf,
						_1: {
							ctor: '::',
							_0: validateMaximum,
							_1: {
								ctor: '::',
								_0: validateMinimum,
								_1: {
									ctor: '::',
									_0: validateExclusiveMaximum,
									_1: {
										ctor: '::',
										_0: validateExclusiveMinimum,
										_1: {
											ctor: '::',
											_0: validateMaxLength,
											_1: {
												ctor: '::',
												_0: validateMinLength,
												_1: {
													ctor: '::',
													_0: validatePattern,
													_1: {
														ctor: '::',
														_0: validateItems,
														_1: {
															ctor: '::',
															_0: validateMaxItems,
															_1: {
																ctor: '::',
																_0: validateMinItems,
																_1: {
																	ctor: '::',
																	_0: validateUniqueItems,
																	_1: {
																		ctor: '::',
																		_0: validateContains,
																		_1: {
																			ctor: '::',
																			_0: validateProperties,
																			_1: {
																				ctor: '::',
																				_0: validateMaxProperties,
																				_1: {
																					ctor: '::',
																					_0: validateMinProperties,
																					_1: {
																						ctor: '::',
																						_0: validateRequired,
																						_1: {
																							ctor: '::',
																							_0: validatePatternProperties,
																							_1: {
																								ctor: '::',
																								_0: validateAdditionalProperties,
																								_1: {
																									ctor: '::',
																									_0: validateDependencies,
																									_1: {
																										ctor: '::',
																										_0: validatePropertyNames,
																										_1: {
																											ctor: '::',
																											_0: validateEnum,
																											_1: {
																												ctor: '::',
																												_0: validateConst,
																												_1: {
																													ctor: '::',
																													_0: validateType,
																													_1: {
																														ctor: '::',
																														_0: validateAllOf,
																														_1: {
																															ctor: '::',
																															_0: validateAnyOf,
																															_1: {
																																ctor: '::',
																																_0: validateOneOf,
																																_1: {
																																	ctor: '::',
																																	_0: validateNot,
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					});
			});
		var validateAdditionalProperties = F4(
			function (validationOptions, jsonPointer, v, s) {
				var rejectMatching = F3(
					function (props, fn, obj) {
						var _p40 = props;
						if (_p40.ctor === 'Just') {
							var whitelist = A2(
								_elm_lang$core$List$map,
								function (_p41) {
									var _p42 = _p41;
									return _p42._0;
								},
								_p40._0._0);
							return A2(
								_elm_lang$core$List$filter,
								function (_p43) {
									var _p44 = _p43;
									return !A2(
										_elm_lang$core$List$any,
										function (allowed) {
											return A2(fn, allowed, _p44._0);
										},
										whitelist);
								},
								obj);
						} else {
							return obj;
						}
					});
				return A5(
					whenSubschema,
					function (_) {
						return _.additionalProperties;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (additionalProperties, obj) {
							return function (obj) {
								var _p45 = additionalProperties;
								if (_p45.ctor === 'BooleanSchema') {
									return _p45._0 ? _elm_lang$core$Result$Ok(v) : (_elm_lang$core$List$isEmpty(obj) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
										A2(
											F2(
												function (x, y) {
													return {ctor: '::', _0: x, _1: y};
												}),
											A2(
												_1602$json_schema$Json_Schema_Validation$Error,
												jsonPointer,
												_1602$json_schema$Json_Schema_Validation$AdditionalPropertiesDisallowed(
													A2(
														_elm_lang$core$List$map,
														function (_p46) {
															var _p47 = _p46;
															return _p47._0;
														},
														obj))),
											A2(
												_elm_lang$core$List$map,
												function (_p48) {
													var _p49 = _p48;
													return A2(
														_1602$json_schema$Json_Schema_Validation$Error,
														_elm_lang$core$Native_Utils.update(
															jsonPointer,
															{
																path: A2(
																	_elm_lang$core$Basics_ops['++'],
																	jsonPointer.path,
																	{
																		ctor: '::',
																		_0: _p49._0,
																		_1: {ctor: '[]'}
																	})
															}),
														_1602$json_schema$Json_Schema_Validation$AdditionalPropertyDisallowed);
												},
												obj))));
								} else {
									return A2(
										_1602$json_schema$Json_Schema_Validation$concatErrors,
										_elm_lang$core$Result$Ok(v),
										A2(
											_elm_lang$core$List$map,
											function (_p50) {
												var _p51 = _p50;
												return A4(
													validateSchema,
													validationOptions,
													_elm_lang$core$Native_Utils.update(
														jsonPointer,
														{
															path: A2(
																_elm_lang$core$Basics_ops['++'],
																jsonPointer.path,
																{
																	ctor: '::',
																	_0: _p51._0,
																	_1: {ctor: '[]'}
																})
														}),
													_p51._1,
													additionalProperties);
											},
											obj));
								}
							}(
								A3(
									rejectMatching,
									s.patternProperties,
									F2(
										function (a, b) {
											return A2(
												_elm_lang$core$Regex$contains,
												_elm_lang$core$Regex$regex(a),
												b);
										}),
									A3(
										rejectMatching,
										s.properties,
										F2(
											function (a, b) {
												return _elm_lang$core$Native_Utils.eq(a, b);
											}),
										obj)));
						}),
					v,
					s);
			});
		var validateSchema = F4(
			function (validationOptions, jsonPointer, value, s) {
				var _p52 = s;
				if (_p52.ctor === 'BooleanSchema') {
					return _p52._0 ? _elm_lang$core$Result$Ok(value) : _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$AlwaysFail),
							_1: {ctor: '[]'}
						});
				} else {
					var _p56 = _p52._0;
					var _p53 = _p56.ref;
					if (_p53.ctor === 'Just') {
						var _p55 = _p53._0;
						var _p54 = A4(_1602$json_schema$Ref$resolveReference, jsonPointer.ns, pool, rootSchema, _p55);
						if (_p54.ctor === 'Just') {
							if (_p54._0._1.ctor === 'ObjectSchema') {
								return A4(
									validateSubschema,
									validationOptions,
									_elm_lang$core$Native_Utils.update(
										jsonPointer,
										{ns: _p54._0._0}),
									_p54._0._1._0,
									value);
							} else {
								return _p54._0._1._0 ? _elm_lang$core$Result$Ok(value) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$AlwaysFail),
										_1: {ctor: '[]'}
									});
							}
						} else {
							return _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_1602$json_schema$Json_Schema_Validation$Error,
										jsonPointer,
										_1602$json_schema$Json_Schema_Validation$UnresolvableReference(_p55)),
									_1: {ctor: '[]'}
								});
						}
					} else {
						return A4(validateSubschema, validationOptions, jsonPointer, _p56, value);
					}
				}
			});
		var validateAllOf = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					when,
					function (_) {
						return _.allOf;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function (allOf, val) {
							return A3(
								_elm_lang$core$List$foldl,
								F2(
									function (schema, res) {
										return _elm_lang$core$Native_Utils.eq(
											res,
											_elm_lang$core$Result$Ok(val)) ? A4(validateSchema, validationOptions, jsonPointer, val, schema) : res;
									}),
								_elm_lang$core$Result$Ok(val),
								allOf);
						}));
			});
		var validateAnyOf = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					when,
					function (_) {
						return _.anyOf;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function (anyOf, val) {
							var isOk = function (res) {
								var _p57 = res;
								if (_p57.ctor === 'Ok') {
									return true;
								} else {
									return false;
								}
							};
							var validationResults = A2(
								_elm_lang$core$List$map,
								A3(validateSchema, validationOptions, jsonPointer, val),
								anyOf);
							return A2(_elm_lang$core$List$any, isOk, validationResults) ? _elm_lang$core$Result$Ok(val) : A2(
								_1602$json_schema$Json_Schema_Validation$concatErrors,
								_elm_lang$core$Result$Ok(val),
								validationResults);
						}));
			});
		var validateContains = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					whenSubschema,
					function (_) {
						return _.contains;
					},
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
					F2(
						function (contains, list) {
							return A2(
								_elm_lang$core$List$any,
								function (item) {
									var _p58 = A4(validateSchema, validationOptions, jsonPointer, item, contains);
									if (_p58.ctor === 'Ok') {
										return true;
									} else {
										return false;
									}
								},
								list) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$Contains),
									_1: {ctor: '[]'}
								});
						}),
					v);
			});
		var validateDependencies = F4(
			function (validationOptions, jsonPointer, v, s) {
				var validateDep = function (obj) {
					return A3(
						_elm_lang$core$List$foldl,
						F2(
							function (_p59, res) {
								var _p60 = _p59;
								var _p61 = res;
								if (_p61.ctor === 'Err') {
									return res;
								} else {
									if (A2(
										_elm_lang$core$Dict$member,
										_p60._0,
										_elm_lang$core$Dict$fromList(obj))) {
										var _p62 = _p60._1;
										if (_p62.ctor === 'PropSchema') {
											return A4(validateSchema, validationOptions, jsonPointer, v, _p62._0);
										} else {
											return A4(
												validateSchema,
												validationOptions,
												jsonPointer,
												v,
												_1602$json_schema$Json_Schema_Definitions$ObjectSchema(
													_elm_lang$core$Native_Utils.update(
														_1602$json_schema$Json_Schema_Definitions$blankSubSchema,
														{
															required: _elm_lang$core$Maybe$Just(_p62._0)
														})));
										}
									} else {
										return res;
									}
								}
							}),
						_elm_lang$core$Result$Ok(v),
						s.dependencies);
				};
				if (_elm_lang$core$List$isEmpty(s.dependencies)) {
					return _elm_lang$core$Result$Ok(v);
				} else {
					var _p63 = A2(
						_elm_lang$core$Json_Decode$decodeValue,
						_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
						v);
					if (_p63.ctor === 'Ok') {
						return validateDep(_p63._0);
					} else {
						return _elm_lang$core$Result$Ok(v);
					}
				}
			});
		var validateItems = F4(
			function (validationOptions, jsonPointer, value, schema) {
				var validateItem = F3(
					function (item, schema, index) {
						return A2(
							_elm_lang$core$Result$map,
							function (_p64) {
								return index + 1;
							},
							A4(
								validateSchema,
								validationOptions,
								_elm_lang$core$Native_Utils.update(
									jsonPointer,
									{
										path: A2(
											_elm_lang$core$Basics_ops['++'],
											jsonPointer.path,
											{
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(index),
												_1: {ctor: '[]'}
											})
									}),
								item,
								schema));
					});
				var _p65 = schema.items;
				switch (_p65.ctor) {
					case 'ItemDefinition':
						var _p66 = A2(
							_elm_lang$core$Json_Decode$decodeValue,
							_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
							value);
						if (_p66.ctor === 'Ok') {
							return A2(
								_elm_lang$core$Result$map,
								function (_p67) {
									return value;
								},
								A3(
									_elm_lang$core$List$foldl,
									F2(
										function (item, res) {
											var _p68 = res;
											if (_p68.ctor === 'Ok') {
												return A3(validateItem, item, _p65._0, _p68._0);
											} else {
												return res;
											}
										}),
									_elm_lang$core$Result$Ok(0),
									_p66._0));
						} else {
							return _elm_lang$core$Result$Ok(value);
						}
					case 'ArrayOfItems':
						var _p69 = A2(
							_elm_lang$core$Json_Decode$decodeValue,
							_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
							value);
						if (_p69.ctor === 'Ok') {
							return A2(
								_elm_lang$core$Result$map,
								function (_p70) {
									return value;
								},
								A3(
									_elm_lang$core$List$foldl,
									F2(
										function (item, res) {
											var _p71 = res;
											if (_p71.ctor === 'Ok') {
												var _p74 = _p71._0;
												var _p72 = _elm_lang$core$List$head(
													A2(_elm_lang$core$List$drop, _p74, _p65._0));
												if (_p72.ctor === 'Just') {
													return A3(validateItem, item, _p72._0, _p74);
												} else {
													var _p73 = schema.additionalItems;
													if (_p73.ctor === 'Just') {
														return A3(validateItem, item, _p73._0, _p74);
													} else {
														return _elm_lang$core$Result$Ok(_p74 + 1);
													}
												}
											} else {
												return res;
											}
										}),
									_elm_lang$core$Result$Ok(0),
									_p69._0));
						} else {
							return _elm_lang$core$Result$Ok(value);
						}
					default:
						return _elm_lang$core$Result$Ok(value);
				}
			});
		var validateNot = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					whenSubschema,
					function (_) {
						return _.not;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function (notSchema, val) {
							return _elm_lang$core$Native_Utils.eq(
								A4(validateSchema, validationOptions, jsonPointer, val, notSchema),
								_elm_lang$core$Result$Ok(val)) ? _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$Not),
									_1: {ctor: '[]'}
								}) : _elm_lang$core$Result$Ok(val);
						}));
			});
		var validateOneOf = F2(
			function (validationOptions, jsonPointer) {
				return A3(
					when,
					function (_) {
						return _.oneOf;
					},
					_elm_lang$core$Json_Decode$value,
					F2(
						function (oneOf, val) {
							var validSubschema = function (schema) {
								return _elm_lang$core$Native_Utils.eq(
									A4(validateSchema, validationOptions, jsonPointer, val, schema),
									_elm_lang$core$Result$Ok(val));
							};
							var _p75 = _elm_lang$core$List$length(
								A2(_elm_lang$core$List$filter, validSubschema, oneOf));
							switch (_p75) {
								case 1:
									return _elm_lang$core$Result$Ok(val);
								case 0:
									return _elm_lang$core$Result$Err(
										{
											ctor: '::',
											_0: A2(_1602$json_schema$Json_Schema_Validation$Error, jsonPointer, _1602$json_schema$Json_Schema_Validation$OneOfNoneSucceed),
											_1: {ctor: '[]'}
										});
								default:
									return _elm_lang$core$Result$Err(
										{
											ctor: '::',
											_0: A2(
												_1602$json_schema$Json_Schema_Validation$Error,
												jsonPointer,
												_1602$json_schema$Json_Schema_Validation$OneOfManySucceed(_p75)),
											_1: {ctor: '[]'}
										});
							}
						}));
			});
		var validatePatternProperties = F3(
			function (validationOptions, jsonPointer, v) {
				return A4(
					when,
					function (_) {
						return _.patternProperties;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (_p76, obj) {
							var _p77 = _p76;
							return A3(
								_elm_lang$core$List$foldl,
								F2(
									function (_p78, res) {
										var _p79 = _p78;
										var _p80 = res;
										if (_p80.ctor === 'Ok') {
											return A2(
												_1602$json_schema$Json_Schema_Validation$concatErrors,
												_elm_lang$core$Result$Ok(v),
												A2(
													_elm_lang$core$List$map,
													function (_p81) {
														var _p82 = _p81;
														return A4(
															validateSchema,
															validationOptions,
															_elm_lang$core$Native_Utils.update(
																jsonPointer,
																{
																	path: A2(
																		_elm_lang$core$Basics_ops['++'],
																		jsonPointer.path,
																		{
																			ctor: '::',
																			_0: _p82._0,
																			_1: {ctor: '[]'}
																		})
																}),
															_p82._1,
															_p79._1);
													},
													A2(getPropsByPattern, _p79._0, obj)));
										} else {
											return res;
										}
									}),
								_elm_lang$core$Result$Ok(v),
								_p77._0);
						}),
					v);
			});
		var validateProperties = F4(
			function (validationOptions, jsonPointer, v, subSchema) {
				return A5(
					when,
					function (_) {
						return _.properties;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (properties, obj) {
							var revObj = _elm_lang$core$List$reverse(obj);
							var newProps = A4(addDefaultProperties, validationOptions, jsonPointer, subSchema.properties, revObj);
							var addedPropNames = A2(
								_elm_lang$core$List$map,
								function (_p83) {
									var _p84 = _p83;
									return _p84._0;
								},
								newProps);
							var upgradedObject = A2(_elm_lang$core$Basics_ops['++'], revObj, newProps);
							return A2(
								_1602$json_schema$Json_Schema_Validation$concatErrors,
								_elm_lang$core$Result$Ok(
									_elm_lang$core$Json_Encode$object(upgradedObject)),
								A2(
									_elm_lang$core$List$map,
									function (_p85) {
										var _p86 = _p85;
										var _p89 = _p86._1;
										var _p88 = _p86._0;
										if (A2(_elm_lang$core$List$member, _p88, addedPropNames)) {
											return _elm_lang$core$Result$Ok(_p89);
										} else {
											var _p87 = A2(getSchema, _p88, properties);
											if (_p87.ctor === 'Just') {
												return A4(
													validateSchema,
													validationOptions,
													_elm_lang$core$Native_Utils.update(
														jsonPointer,
														{
															path: A2(
																_elm_lang$core$Basics_ops['++'],
																jsonPointer.path,
																{
																	ctor: '::',
																	_0: _p88,
																	_1: {ctor: '[]'}
																})
														}),
													_p89,
													_p87._0);
											} else {
												return _elm_lang$core$Result$Ok(_p89);
											}
										}
									},
									upgradedObject));
						}),
					v,
					subSchema);
			});
		var addDefaultProperties = F4(
			function (validationOptions, jsonPointer, properties, obj) {
				var missing = F2(
					function (name, obj) {
						return _elm_lang$core$List$isEmpty(
							A2(
								_elm_lang$core$List$filter,
								function (_p90) {
									var _p91 = _p90;
									return _elm_lang$core$Native_Utils.eq(_p91._0, name);
								},
								obj));
					});
				var defaultFor = F3(
					function (obj, propName, schema) {
						if (A2(missing, propName, obj)) {
							var _p92 = schema;
							if (_p92.ctor === 'ObjectSchema') {
								return A2(
									_elm_lang$core$Maybe$andThen,
									function (value) {
										return _elm_lang$core$Result$toMaybe(
											A4(
												validateSchema,
												_elm_lang$core$Native_Utils.update(
													validationOptions,
													{applyDefaults: false}),
												_elm_lang$core$Native_Utils.update(
													jsonPointer,
													{
														path: A2(
															_elm_lang$core$Basics_ops['++'],
															jsonPointer.path,
															{
																ctor: '::',
																_0: propName,
																_1: {ctor: '[]'}
															})
													}),
												value,
												schema));
									},
									_p92._0.$default);
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						} else {
							return _elm_lang$core$Maybe$Nothing;
						}
					});
				if (validationOptions.applyDefaults) {
					var _p93 = properties;
					if (_p93.ctor === 'Just') {
						return _elm_lang$core$List$reverse(
							A3(
								_elm_lang$core$List$foldl,
								F2(
									function (_p94, resultingObject) {
										var _p95 = _p94;
										var _p97 = _p95._0;
										var _p96 = A3(defaultFor, obj, _p97, _p95._1);
										if (_p96.ctor === 'Just') {
											return {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: _p97, _1: _p96._0},
												_1: resultingObject
											};
										} else {
											return resultingObject;
										}
									}),
								{ctor: '[]'},
								_p93._0._0));
					} else {
						return {ctor: '[]'};
					}
				} else {
					return {ctor: '[]'};
				}
			});
		var validatePropertyNames = F3(
			function (validationOptions, jsonPointer, v) {
				var validatePropertyName = F2(
					function (schema, key) {
						var _p98 = A4(
							validateSchema,
							validationOptions,
							_elm_lang$core$Native_Utils.update(
								jsonPointer,
								{
									path: A2(
										_elm_lang$core$Basics_ops['++'],
										jsonPointer.path,
										{
											ctor: '::',
											_0: key,
											_1: {ctor: '[]'}
										})
								}),
							_elm_lang$core$Json_Encode$string(key),
							schema);
						if (_p98.ctor === 'Ok') {
							return _elm_lang$core$Maybe$Nothing;
						} else {
							return _elm_lang$core$Maybe$Just(_p98._0);
						}
					});
				return A4(
					whenSubschema,
					function (_) {
						return _.propertyNames;
					},
					_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
					F2(
						function (propertyNames, obj) {
							return function (invalidNames) {
								return _elm_lang$core$List$isEmpty(invalidNames) ? _elm_lang$core$Result$Ok(v) : _elm_lang$core$Result$Err(
									{
										ctor: '::',
										_0: A2(
											_1602$json_schema$Json_Schema_Validation$Error,
											jsonPointer,
											_1602$json_schema$Json_Schema_Validation$InvalidPropertyName(
												_elm_lang$core$List$concat(invalidNames))),
										_1: {ctor: '[]'}
									});
							}(
								A2(
									_elm_lang$core$List$filterMap,
									validatePropertyName(propertyNames),
									A2(
										_elm_lang$core$List$map,
										function (_p99) {
											var _p100 = _p99;
											return _p100._0;
										},
										obj)));
						}),
					v);
			});
		return A4(
			validateSchema,
			validationOptions,
			A2(
				_1602$json_schema$Json_Schema_Validation$JsonPointer,
				'',
				{ctor: '[]'}),
			value,
			schema);
	});

var _1602$json_form$ErrorMessages$pluralize = F2(
	function (n, name) {
		var _p0 = n;
		if (_p0 === 1) {
			return A2(_elm_lang$core$Basics_ops['++'], '1 ', name);
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(n),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					A2(_elm_lang$core$Basics_ops['++'], name, 's')));
		}
	});
var _1602$json_form$ErrorMessages$stringifyError = function (e) {
	var _p1 = e;
	switch (_p1.ctor) {
		case 'MultipleOf':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p1._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' is not a multiple of ',
					_elm_lang$core$Basics$toString(_p1._0)));
		case 'Maximum':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p1._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' is more than maximum ',
					_elm_lang$core$Basics$toString(_p1._0)));
		case 'Minimum':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p1._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' is less than minimum ',
					_elm_lang$core$Basics$toString(_p1._0)));
		case 'ExclusiveMaximum':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p1._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' is not less than exclusive maximum ',
					_elm_lang$core$Basics$toString(_p1._0)));
		case 'ExclusiveMinimum':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p1._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' is not more than exclusive minimum ',
					_elm_lang$core$Basics$toString(_p1._0)));
		case 'MaxLength':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Expected string not longer than ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_1602$json_form$ErrorMessages$pluralize, _p1._0, 'character'),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' but actual length is ',
						A2(_1602$json_form$ErrorMessages$pluralize, _p1._1, 'character'))));
		case 'MinLength':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Expected string to be at least ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_1602$json_form$ErrorMessages$pluralize, _p1._0, 'character'),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' long but its length is ',
						A2(_1602$json_form$ErrorMessages$pluralize, _p1._1, 'character'))));
		case 'Pattern':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'String ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p1._1),
					A2(_elm_lang$core$Basics_ops['++'], ' does not match pattern ', _p1._0)));
		case 'MaxItems':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'List expected to have at most ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_1602$json_form$ErrorMessages$pluralize, _p1._0, 'item'),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' but it has ',
						A2(_1602$json_form$ErrorMessages$pluralize, _p1._1, 'item'))));
		case 'MinItems':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'List expected to have at least ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_1602$json_form$ErrorMessages$pluralize, _p1._0, 'item'),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' but it has ',
						A2(_1602$json_form$ErrorMessages$pluralize, _p1._1, 'item'))));
		case 'UniqueItems':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Expected array of unique items, but a duplicate found: ',
				A2(_elm_lang$core$Json_Encode$encode, 0, _p1._0));
		case 'Contains':
			return 'None of array items is valid against the given schema';
		case 'MaxProperties':
			return 'MaxProperties';
		case 'MinProperties':
			return 'MinProperties';
		case 'RequiredProperty':
			return 'This property is required';
		case 'Required':
			return '';
		case 'AdditionalPropertyDisallowed':
			return 'This is an additional property and it is not allowed';
		case 'AdditionalPropertiesDisallowed':
			return '';
		case 'InvalidPropertyName':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Some property names are not passing validation: ',
				A2(
					_elm_lang$core$String$join,
					', ',
					A2(_elm_lang$core$List$map, _elm_lang$core$Basics$toString, _p1._0)));
		case 'Enum':
			return 'Value does not match enumeration defined in the schema';
		case 'Const':
			return 'Value does not match const defined in the schema';
		case 'InvalidType':
			return _p1._0;
		case 'OneOfNoneSucceed':
			return 'Value does not pass the validation with none of the schemata listed in \'.oneOf\'';
		case 'OneOfManySucceed':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Value should pass validation with exactly one schema, but ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p1._0),
					' return a positive result'));
		case 'Not':
			return 'This value expected to fail validation';
		case 'AlwaysFail':
			return 'This is not expected to succeed';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Reference ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p1._0),
					' can not be resolved'));
	}
};

var _1602$json_schema$Json_Schema_Helpers$debugSubSchema = F2(
	function (msg, schema) {
		var a = function () {
			var _p0 = schema;
			if (_p0.ctor === 'Just') {
				return function (f) {
					return f(msg);
				}(
					_elm_lang$core$Debug$log(
						A2(
							_elm_lang$core$Json_Encode$encode,
							4,
							_1602$json_schema$Json_Schema_Definitions$encode(
								_1602$json_schema$Json_Schema_Definitions$ObjectSchema(_p0._0)))));
			} else {
				return A2(_elm_lang$core$Debug$log, msg, 'Nothing');
			}
		}();
		return schema;
	});
var _1602$json_schema$Json_Schema_Helpers$debugSchema = F2(
	function (msg, schema) {
		var a = function () {
			var _p1 = schema;
			if (_p1.ctor === 'Just') {
				return function (f) {
					return f(msg);
				}(
					_elm_lang$core$Debug$log(
						A2(
							_elm_lang$core$Json_Encode$encode,
							4,
							_1602$json_schema$Json_Schema_Definitions$encode(_p1._0))));
			} else {
				return A2(_elm_lang$core$Debug$log, msg, 'Nothing');
			}
		}();
		return schema;
	});
var _1602$json_schema$Json_Schema_Helpers$decodeList = function (val) {
	return A2(
		_elm_lang$core$Result$withDefault,
		{ctor: '[]'},
		A2(
			_elm_lang$core$Json_Decode$decodeValue,
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value),
			val));
};
var _1602$json_schema$Json_Schema_Helpers$decodeDict = function (val) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_elm_lang$core$Dict$empty,
		A2(
			_elm_lang$core$Json_Decode$decodeValue,
			_elm_lang$core$Json_Decode$dict(_elm_lang$core$Json_Decode$value),
			val));
};
var _1602$json_schema$Json_Schema_Helpers$encodeDict = function (dict) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Dict$toList(dict));
};
var _1602$json_schema$Json_Schema_Helpers$setListItem = F3(
	function (index, a, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, item) {
					return _elm_lang$core$Native_Utils.eq(index, i) ? a : item;
				}),
			list);
	});
var _1602$json_schema$Json_Schema_Helpers$getListItem = F2(
	function (index, list) {
		var _p2 = A3(
			_elm_lang$core$List$foldl,
			F2(
				function (item, _p3) {
					var _p4 = _p3;
					var _p5 = _p4._0;
					return _elm_lang$core$Native_Utils.eq(index, _p5) ? {
						ctor: '_Tuple2',
						_0: _p5 + 1,
						_1: _elm_lang$core$Maybe$Just(item)
					} : {ctor: '_Tuple2', _0: _p5 + 1, _1: _p4._1};
				}),
			{ctor: '_Tuple2', _0: 0, _1: _elm_lang$core$Maybe$Nothing},
			list);
		var result = _p2._1;
		return result;
	});
var _1602$json_schema$Json_Schema_Helpers$makeJsonPointer = function (_p6) {
	var _p7 = _p6;
	var _p9 = _p7._2;
	var _p8 = _p7._1;
	return _p7._0 ? A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		_p8,
		A2(
			_elm_lang$core$String$join,
			'/',
			{ctor: '::', _0: '#', _1: _p9})) : (_elm_lang$core$List$isEmpty(_p9) ? _p8 : A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		A2(_elm_lang$core$Basics_ops['++'], _p8, '#'),
		A2(_elm_lang$core$String$join, '/', _p9)));
};
var _1602$json_schema$Json_Schema_Helpers$collectIds = F2(
	function (schema, pool) {
		var manageId = F4(
			function (ns, source, pool, obj) {
				var _p13 = A2(
					_elm_lang$core$List$filter,
					function (_p10) {
						var _p11 = _p10;
						var _p12 = _p11._0;
						return _elm_lang$core$Native_Utils.eq(_p12, 'id') || _elm_lang$core$Native_Utils.eq(_p12, '$id');
					},
					obj);
				if ((_p13.ctor === '::') && (_p13._0.ctor === '_Tuple2')) {
					return A2(
						_elm_lang$core$Result$withDefault,
						{
							ctor: '_Tuple2',
							_0: obj,
							_1: {ctor: '_Tuple2', _0: pool, _1: ns}
						},
						A2(
							_elm_lang$core$Result$map,
							function (id) {
								var _p14 = A2(_1602$json_schema$Ref$parseJsonPointer, id, ns);
								var isPointer = _p14._0;
								var newNs = _p14._1;
								var path = _p14._2;
								var _p15 = A2(_elm_lang$core$Json_Decode$decodeValue, _1602$json_schema$Json_Schema_Definitions$decoder, source);
								if (_p15.ctor === 'Ok') {
									return {
										ctor: '_Tuple2',
										_0: obj,
										_1: {
											ctor: '_Tuple2',
											_0: A3(
												_elm_lang$core$Dict$insert,
												_1602$json_schema$Json_Schema_Helpers$makeJsonPointer(
													{ctor: '_Tuple3', _0: isPointer, _1: newNs, _2: path}),
												_p15._0,
												pool),
											_1: newNs
										}
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: obj,
										_1: {ctor: '_Tuple2', _0: pool, _1: ns}
									};
								}
							},
							A2(_elm_lang$core$Json_Decode$decodeValue, _elm_lang$core$Json_Decode$string, _p13._0._1)));
				} else {
					return {
						ctor: '_Tuple2',
						_0: obj,
						_1: {ctor: '_Tuple2', _0: pool, _1: ns}
					};
				}
			});
		var walkValue = F2(
			function (source, _p16) {
				var _p17 = _p16;
				return function (_p18) {
					var _p19 = _p18;
					return A3(
						_elm_lang$core$List$foldl,
						function (_p20) {
							var _p21 = _p20;
							return walkValue(_p21._1);
						},
						_p19._1,
						_p19._0);
				}(
					A4(
						manageId,
						_p17._1,
						source,
						_p17._0,
						A2(
							_elm_lang$core$Result$withDefault,
							{ctor: '[]'},
							A2(
								_elm_lang$core$Json_Decode$decodeValue,
								_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
								source))));
			});
		var getNs = function (uri) {
			var _p22 = uri;
			if (_p22.ctor === 'Just') {
				var _p23 = A2(_1602$json_schema$Ref$parseJsonPointer, _p22._0, '');
				var isPointer = _p23._0;
				var ns = _p23._1;
				return ns;
			} else {
				return '';
			}
		};
		var _p24 = schema;
		if (_p24.ctor === 'ObjectSchema') {
			return A2(
				walkValue,
				_p24._0.source,
				{
					ctor: '_Tuple2',
					_0: pool,
					_1: getNs(_p24._0.id)
				});
		} else {
			return {ctor: '_Tuple2', _0: pool, _1: ''};
		}
	});
var _1602$json_schema$Json_Schema_Helpers$whenObjectSchema = function (schema) {
	var _p25 = schema;
	if (_p25.ctor === 'ObjectSchema') {
		return _elm_lang$core$Maybe$Just(_p25._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _1602$json_schema$Json_Schema_Helpers$singleTypeToString = function (st) {
	var _p26 = st;
	switch (_p26.ctor) {
		case 'StringType':
			return 'string';
		case 'IntegerType':
			return 'integer';
		case 'NumberType':
			return 'number';
		case 'BooleanType':
			return 'boolean';
		case 'ObjectType':
			return 'object';
		case 'ArrayType':
			return 'array';
		default:
			return 'null';
	}
};
var _1602$json_schema$Json_Schema_Helpers$typeToString = function (t) {
	var _p27 = t;
	switch (_p27.ctor) {
		case 'NullableType':
			if (_p27._0.ctor === 'NullType') {
				return 'null';
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'nullable ',
					_1602$json_schema$Json_Schema_Helpers$singleTypeToString(_p27._0));
			}
		case 'SingleType':
			return _1602$json_schema$Json_Schema_Helpers$singleTypeToString(_p27._0);
		case 'UnionType':
			return A2(
				_elm_lang$core$String$join,
				', ',
				A2(_elm_lang$core$List$map, _1602$json_schema$Json_Schema_Helpers$singleTypeToString, _p27._0));
		default:
			return 'any';
	}
};
var _1602$json_schema$Json_Schema_Helpers$typeToList = function (t) {
	var _p28 = t;
	switch (_p28.ctor) {
		case 'NullableType':
			if (_p28._0.ctor === 'NullType') {
				return {
					ctor: '::',
					_0: 'null',
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						'nullable ',
						_1602$json_schema$Json_Schema_Helpers$singleTypeToString(_p28._0)),
					_1: {ctor: '[]'}
				};
			}
		case 'SingleType':
			return {
				ctor: '::',
				_0: _1602$json_schema$Json_Schema_Helpers$singleTypeToString(_p28._0),
				_1: {ctor: '[]'}
			};
		case 'UnionType':
			return A2(_elm_lang$core$List$map, _1602$json_schema$Json_Schema_Helpers$singleTypeToString, _p28._0);
		default:
			return {ctor: '[]'};
	}
};
var _1602$json_schema$Json_Schema_Helpers$ImpliedType = F3(
	function (a, b, c) {
		return {type_: a, schema: b, error: c};
	});

var _1602$json_schema$Json_Schema$fromString = _elm_lang$core$Json_Decode$decodeString(_1602$json_schema$Json_Schema_Definitions$decoder);
var _1602$json_schema$Json_Schema$fromValue = _elm_lang$core$Json_Decode$decodeValue(_1602$json_schema$Json_Schema_Definitions$decoder);
var _1602$json_schema$Json_Schema$validateAt = F4(
	function (validationOptions, value, schema, uri) {
		var _p0 = A2(_1602$json_schema$Json_Schema_Helpers$collectIds, schema, _1602$json_schema$Ref$defaultPool);
		var pool = _p0._0;
		var _p1 = A4(_1602$json_schema$Ref$resolveReference, '', pool, schema, uri);
		if (_p1.ctor === 'Just') {
			return A5(_1602$json_schema$Json_Schema_Validation$validate, validationOptions, pool, value, schema, _p1._0._1);
		} else {
			return _elm_lang$core$Result$Err(
				{
					ctor: '::',
					_0: A2(
						_1602$json_schema$Json_Schema_Validation$Error,
						A2(
							_1602$json_schema$Json_Schema_Validation$JsonPointer,
							'',
							{ctor: '[]'}),
						_1602$json_schema$Json_Schema_Validation$UnresolvableReference(uri)),
					_1: {ctor: '[]'}
				});
		}
	});
var _1602$json_schema$Json_Schema$validateValue = F3(
	function (validationOptions, value, schema) {
		var _p2 = A2(_1602$json_schema$Json_Schema_Helpers$collectIds, schema, _1602$json_schema$Ref$defaultPool);
		var pool = _p2._0;
		return A5(_1602$json_schema$Json_Schema_Validation$validate, validationOptions, pool, value, schema, schema);
	});

var _1602$json_form$Json_Value$getIn = F2(
	function (path, value) {
		var _p0 = path;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Result$Ok(value);
		} else {
			var _p5 = _p0._1;
			var _p4 = _p0._0;
			var _p1 = value;
			switch (_p1.ctor) {
				case 'ObjectValue':
					return A2(
						_elm_lang$core$Result$andThen,
						_1602$json_form$Json_Value$getIn(_p5),
						A2(
							_elm_lang$core$Result$fromMaybe,
							'Key not found',
							A3(
								_elm_lang$core$List$foldl,
								F2(
									function (_p2, res) {
										var _p3 = _p2;
										return (!_elm_lang$core$Native_Utils.eq(res, _elm_lang$core$Maybe$Nothing)) ? res : (_elm_lang$core$Native_Utils.eq(_p3._0, _p4) ? _elm_lang$core$Maybe$Just(_p3._1) : _elm_lang$core$Maybe$Nothing);
									}),
								_elm_lang$core$Maybe$Nothing,
								_p1._0)));
				case 'ArrayValue':
					return A2(
						_elm_lang$core$Result$andThen,
						_1602$json_form$Json_Value$getIn(_p5),
						A2(
							_elm_lang$core$Result$andThen,
							function (index) {
								return A2(
									_elm_lang$core$Result$fromMaybe,
									'Index is too big',
									_elm_lang$core$List$head(
										A2(_elm_lang$core$List$drop, index, _p1._0)));
							},
							_elm_lang$core$String$toInt(_p4)));
				default:
					return _elm_lang$core$Result$Err('You are trying to access property of something that is not object or array');
			}
		}
	});
var _1602$json_form$Json_Value$encode = function (v) {
	var _p6 = v;
	switch (_p6.ctor) {
		case 'ObjectValue':
			return _elm_lang$core$Json_Encode$object(
				A2(
					_elm_lang$core$List$map,
					function (_p7) {
						var _p8 = _p7;
						return {
							ctor: '_Tuple2',
							_0: _p8._0,
							_1: _1602$json_form$Json_Value$encode(_p8._1)
						};
					},
					_p6._0));
		case 'ArrayValue':
			return _elm_lang$core$Json_Encode$list(
				A2(_elm_lang$core$List$map, _1602$json_form$Json_Value$encode, _p6._0));
		case 'StringValue':
			return _elm_lang$core$Json_Encode$string(_p6._0);
		case 'BoolValue':
			return _elm_lang$core$Json_Encode$bool(_p6._0);
		case 'NullValue':
			return _elm_lang$core$Json_Encode$null;
		default:
			return _elm_lang$core$Json_Encode$float(_p6._0);
	}
};
var _1602$json_form$Json_Value$StringValue = function (a) {
	return {ctor: 'StringValue', _0: a};
};
var _1602$json_form$Json_Value$NumericValue = function (a) {
	return {ctor: 'NumericValue', _0: a};
};
var _1602$json_form$Json_Value$NullValue = {ctor: 'NullValue'};
var _1602$json_form$Json_Value$BoolValue = function (a) {
	return {ctor: 'BoolValue', _0: a};
};
var _1602$json_form$Json_Value$ArrayValue = function (a) {
	return {ctor: 'ArrayValue', _0: a};
};
var _1602$json_form$Json_Value$ObjectValue = function (a) {
	return {ctor: 'ObjectValue', _0: a};
};
var _1602$json_form$Json_Value$decoder = function () {
	var arrayValueDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_1602$json_form$Json_Value$ArrayValue,
		_elm_lang$core$Json_Decode$list(
			_elm_lang$core$Json_Decode$lazy(
				function (_p9) {
					return _1602$json_form$Json_Value$decoder;
				})));
	var objectValueDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_1602$json_form$Json_Value$ObjectValue,
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (_p10) {
				return _elm_lang$core$Json_Decode$succeed(
					_elm_lang$core$List$reverse(_p10));
			},
			_elm_lang$core$Json_Decode$keyValuePairs(
				_elm_lang$core$Json_Decode$lazy(
					function (_p11) {
						return _1602$json_form$Json_Value$decoder;
					}))));
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: objectValueDecoder,
			_1: {
				ctor: '::',
				_0: arrayValueDecoder,
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Json_Decode$null(_1602$json_form$Json_Value$NullValue),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_form$Json_Value$StringValue, _elm_lang$core$Json_Decode$string),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_form$Json_Value$NumericValue, _elm_lang$core$Json_Decode$float),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Json_Decode$map, _1602$json_form$Json_Value$BoolValue, _elm_lang$core$Json_Decode$bool),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
}();
var _1602$json_form$Json_Value$decodeValue = function (v) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_1602$json_form$Json_Value$NullValue,
		A2(_elm_lang$core$Json_Decode$decodeValue, _1602$json_form$Json_Value$decoder, v));
};
var _1602$json_form$Json_Value$setProperty = F3(
	function (key, value, object) {
		var updateOrAppend = function (list) {
			return A2(
				_elm_lang$core$List$any,
				function (_p12) {
					var _p13 = _p12;
					return _elm_lang$core$Native_Utils.eq(_p13._0, key);
				},
				list) ? A2(
				_elm_lang$core$List$map,
				function (_p14) {
					var _p15 = _p14;
					var _p16 = _p15._0;
					return _elm_lang$core$Native_Utils.eq(_p16, key) ? {ctor: '_Tuple2', _0: key, _1: value} : {ctor: '_Tuple2', _0: _p16, _1: _p15._1};
				},
				list) : A2(
				_elm_lang$core$Basics_ops['++'],
				list,
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: {ctor: '[]'}
				});
		};
		var _p17 = object;
		switch (_p17.ctor) {
			case 'ObjectValue':
				return _elm_lang$core$Result$Ok(
					_1602$json_form$Json_Value$ObjectValue(
						updateOrAppend(_p17._0)));
			case 'ArrayValue':
				var _p18 = _p17._0;
				var index = A2(
					_elm_lang$core$Result$withDefault,
					_elm_lang$core$List$length(_p18),
					A2(_elm_lang$core$Json_Decode$decodeString, _elm_lang$core$Json_Decode$int, key));
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p18),
					index) > 0) ? _elm_lang$core$Result$Ok(
					_1602$json_form$Json_Value$ArrayValue(
						A2(
							_elm_lang$core$List$indexedMap,
							F2(
								function (i, v) {
									return _elm_lang$core$Native_Utils.eq(i, index) ? value : v;
								}),
							_p18))) : _elm_lang$core$Result$Ok(
					_1602$json_form$Json_Value$ArrayValue(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p18,
							{
								ctor: '::',
								_0: value,
								_1: {ctor: '[]'}
							})));
			default:
				return _elm_lang$core$Native_Utils.eq(key, '0') ? _elm_lang$core$Result$Ok(
					_1602$json_form$Json_Value$ArrayValue(
						{
							ctor: '::',
							_0: value,
							_1: {ctor: '[]'}
						})) : _elm_lang$core$Result$Ok(
					_1602$json_form$Json_Value$ObjectValue(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: key, _1: value},
							_1: {ctor: '[]'}
						}));
		}
	});
var _1602$json_form$Json_Value$setIn = F3(
	function (pathInJson, valueToSet, hostValue) {
		var path = _elm_lang$core$List$reverse(pathInJson);
		var newValue = function () {
			var _p19 = path;
			if (_p19.ctor === '[]') {
				return _elm_lang$core$Result$Ok(valueToSet);
			} else {
				return function (_p20) {
					var _p21 = _p20;
					return _p21._1;
				}(
					A3(
						_elm_lang$core$List$foldl,
						F2(
							function (key, _p22) {
								var _p23 = _p22;
								var _p25 = _p23._0;
								var p = _elm_lang$core$List$reverse(_p25);
								var v = A2(
									_elm_lang$core$Result$map,
									function (vv) {
										return A2(
											_elm_lang$core$Result$withDefault,
											_1602$json_form$Json_Value$ObjectValue(
												{
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: key, _1: vv},
													_1: {ctor: '[]'}
												}),
											A2(
												_elm_lang$core$Result$andThen,
												A2(_1602$json_form$Json_Value$setProperty, key, vv),
												A2(_1602$json_form$Json_Value$getIn, p, hostValue)));
									},
									_p23._1);
								var _p24 = _p25;
								if (_p24.ctor === '[]') {
									return {
										ctor: '_Tuple2',
										_0: {ctor: '[]'},
										_1: v
									};
								} else {
									return {ctor: '_Tuple2', _0: _p24._1, _1: v};
								}
							}),
						{
							ctor: '_Tuple2',
							_0: _p19._1,
							_1: _elm_lang$core$Result$Ok(valueToSet)
						},
						path));
			}
		}();
		return newValue;
	});
var _1602$json_form$Json_Value$setPropertyName = F3(
	function (_p26, newName, hostValue) {
		var _p27 = _p26;
		var _p32 = _p27._0;
		var renameKey = function (val) {
			var _p28 = val;
			if (_p28.ctor === 'ObjectValue') {
				return function (_p29) {
					return _elm_lang$core$Result$Ok(
						_1602$json_form$Json_Value$ObjectValue(_p29));
				}(
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, _p30) {
								var _p31 = _p30;
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.eq(_p27._1, i) ? newName : _p31._0,
									_1: _p31._1
								};
							}),
						_p28._0));
			} else {
				return _elm_lang$core$Result$Err('Can not rename property of this json value');
			}
		};
		var targetValue = A2(
			_elm_lang$core$Result$withDefault,
			hostValue,
			A2(
				_elm_lang$core$Result$andThen,
				renameKey,
				A2(_1602$json_form$Json_Value$getIn, _p32, hostValue)));
		return A3(_1602$json_form$Json_Value$setIn, _p32, targetValue, hostValue);
	});
var _1602$json_form$Json_Value$deleteIn = F2(
	function (pathInJson, hostValue) {
		var rejectKey = F2(
			function (key, val) {
				var _p33 = val;
				switch (_p33.ctor) {
					case 'ObjectValue':
						return function (_p34) {
							return _elm_lang$core$Result$Ok(
								_1602$json_form$Json_Value$ObjectValue(_p34));
						}(
							A2(
								_elm_lang$core$List$filter,
								function (_p35) {
									var _p36 = _p35;
									return !_elm_lang$core$Native_Utils.eq(_p36._0, key);
								},
								_p33._0));
					case 'ArrayValue':
						return function (_p37) {
							return _elm_lang$core$Result$Ok(
								_1602$json_form$Json_Value$ArrayValue(_p37));
						}(
							A2(
								_elm_lang$core$List$map,
								function (_p38) {
									var _p39 = _p38;
									return _p39._1;
								},
								A2(
									_elm_lang$core$List$filter,
									function (_p40) {
										var _p41 = _p40;
										return !_elm_lang$core$Native_Utils.eq(_p41._0, key);
									},
									A2(
										_elm_lang$core$List$indexedMap,
										F2(
											function (ind, v) {
												return {
													ctor: '_Tuple2',
													_0: _elm_lang$core$Basics$toString(ind),
													_1: v
												};
											}),
										_p33._0))));
					default:
						return _elm_lang$core$Result$Err('It is not possible to delete key when host value is not object or array');
				}
			});
		var _p42 = function (x) {
			var _p43 = x;
			if (_p43.ctor === '::') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Just(_p43._0),
					_1: _elm_lang$core$List$reverse(_p43._1)
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: {ctor: '[]'}
				};
			}
		}(
			_elm_lang$core$List$reverse(pathInJson));
		var key = _p42._0;
		var path = _p42._1;
		var targetValue = function () {
			var _p44 = key;
			if (_p44.ctor === 'Just') {
				return A2(
					_elm_lang$core$Result$withDefault,
					hostValue,
					A2(
						_elm_lang$core$Result$andThen,
						rejectKey(_p44._0),
						A2(_1602$json_form$Json_Value$getIn, path, hostValue)));
			} else {
				return hostValue;
			}
		}();
		return A3(_1602$json_form$Json_Value$setIn, path, targetValue, hostValue);
	});

var _1602$json_form$Json_Form_Definitions$dictFromListErrors = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (error, dict) {
				return A3(
					_elm_lang$core$Dict$update,
					error.jsonPointer.path,
					function (listDetails) {
						return _elm_lang$core$Maybe$Just(
							function () {
								var _p0 = listDetails;
								if (_p0.ctor === 'Just') {
									return A2(
										_elm_lang$core$Basics_ops['++'],
										_p0._0,
										{
											ctor: '::',
											_0: _1602$json_form$ErrorMessages$stringifyError(error.details),
											_1: {ctor: '[]'}
										});
								} else {
									return {
										ctor: '::',
										_0: _1602$json_form$ErrorMessages$stringifyError(error.details),
										_1: {ctor: '[]'}
									};
								}
							}());
					},
					dict);
			}),
		_elm_lang$core$Dict$empty,
		list);
};
var _1602$json_form$Json_Form_Definitions$init = F2(
	function (schema, v) {
		var someValue = _1602$json_form$Json_Value$encode(
			A2(_elm_lang$core$Maybe$withDefault, _1602$json_form$Json_Value$NullValue, v));
		var _p1 = function (res) {
			var _p2 = res;
			if (_p2.ctor === 'Ok') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Just(
						_1602$json_form$Json_Value$decodeValue(_p2._0)),
					_1: _elm_lang$core$Dict$empty
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: v,
					_1: _1602$json_form$Json_Form_Definitions$dictFromListErrors(_p2._0)
				};
			}
		}(
			A3(
				_1602$json_schema$Json_Schema$validateValue,
				{applyDefaults: true},
				someValue,
				schema));
		var value = _p1._0;
		var errors = _p1._1;
		return {
			schema: schema,
			focused: _elm_lang$core$Maybe$Nothing,
			value: A2(_elm_lang$core$Debug$log, 'initial value', value),
			errors: _elm_lang$core$Dict$empty,
			beingEdited: {ctor: '[]'},
			editedNumber: ''
		};
	});
var _1602$json_form$Json_Form_Definitions$Model = F6(
	function (a, b, c, d, e, f) {
		return {schema: a, focused: b, value: c, errors: d, beingEdited: e, editedNumber: f};
	});
var _1602$json_form$Json_Form_Definitions$EditNumber = function (a) {
	return {ctor: 'EditNumber', _0: a};
};
var _1602$json_form$Json_Form_Definitions$EditValue = F2(
	function (a, b) {
		return {ctor: 'EditValue', _0: a, _1: b};
	});
var _1602$json_form$Json_Form_Definitions$FocusNumericInput = function (a) {
	return {ctor: 'FocusNumericInput', _0: a};
};
var _1602$json_form$Json_Form_Definitions$FocusInput = function (a) {
	return {ctor: 'FocusInput', _0: a};
};
var _1602$json_form$Json_Form_Definitions$Object = {ctor: 'Object'};
var _1602$json_form$Json_Form_Definitions$JsonEditor = {ctor: 'JsonEditor'};
var _1602$json_form$Json_Form_Definitions$Checkbox = {ctor: 'Checkbox'};
var _1602$json_form$Json_Form_Definitions$Switch = {ctor: 'Switch'};
var _1602$json_form$Json_Form_Definitions$NumberField = {ctor: 'NumberField'};
var _1602$json_form$Json_Form_Definitions$TextField = {ctor: 'TextField'};

var _1602$json_form$Json_Form_UiSpec$blank = {widgetType: _elm_lang$core$Maybe$Nothing, rule: _elm_lang$core$Maybe$Nothing};
var _1602$json_form$Json_Form_UiSpec$UiSpec = F2(
	function (a, b) {
		return {widgetType: a, rule: b};
	});
var _1602$json_form$Json_Form_UiSpec$Switch = {ctor: 'Switch'};
var _1602$json_form$Json_Form_UiSpec$PasswordField = {ctor: 'PasswordField'};
var _1602$json_form$Json_Form_UiSpec$Hide = F2(
	function (a, b) {
		return {ctor: 'Hide', _0: a, _1: b};
	});
var _1602$json_form$Json_Form_UiSpec$Show = F2(
	function (a, b) {
		return {ctor: 'Show', _0: a, _1: b};
	});
var _1602$json_form$Json_Form_UiSpec$Disable = F2(
	function (a, b) {
		return {ctor: 'Disable', _0: a, _1: b};
	});
var _1602$json_form$Json_Form_UiSpec$Enable = F2(
	function (a, b) {
		return {ctor: 'Enable', _0: a, _1: b};
	});
var _1602$json_form$Json_Form_UiSpec$ruleDecoder = A4(
	_elm_lang$core$Json_Decode$map3,
	F3(
		function (action, ref, condition) {
			return A2(action, ref, condition);
		}),
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (action) {
			return _elm_lang$core$Native_Utils.eq(action, 'enable') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$Enable) : (_elm_lang$core$Native_Utils.eq(action, 'disable') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$Disable) : (_elm_lang$core$Native_Utils.eq(action, 'show') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$Show) : (_elm_lang$core$Native_Utils.eq(action, 'hide') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$Hide) : _elm_lang$core$Json_Decode$fail(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Expected one of \'disable\', \'enabled\', \'show\', \'hide\', but got unknown action: \'',
					A2(_elm_lang$core$Basics_ops['++'], action, '\''))))));
		},
		A2(_elm_lang$core$Json_Decode$field, 'action', _elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'path',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'condition', _1602$json_schema$Json_Schema_Definitions$decoder));
var _1602$json_form$Json_Form_UiSpec$decoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_1602$json_form$Json_Form_UiSpec$UiSpec,
	_elm_lang$core$Json_Decode$maybe(
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (widget) {
				return _elm_lang$core$Native_Utils.eq(widget, 'password') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$PasswordField) : (_elm_lang$core$Native_Utils.eq(widget, 'switch') ? _elm_lang$core$Json_Decode$succeed(_1602$json_form$Json_Form_UiSpec$Switch) : _elm_lang$core$Json_Decode$fail(''));
			},
			A2(_elm_lang$core$Json_Decode$field, 'widget', _elm_lang$core$Json_Decode$string))),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode$field, 'rule', _1602$json_form$Json_Form_UiSpec$ruleDecoder)));

var _1602$json_form$JsonFormUtil_ops = _1602$json_form$JsonFormUtil_ops || {};
_1602$json_form$JsonFormUtil_ops['=>'] = F2(
	function (a, b) {
		return {ctor: '_Tuple2', _0: a, _1: b};
	});
var _1602$json_form$JsonFormUtil$getUiSpec = function (schema) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_1602$json_form$Json_Form_UiSpec$blank,
		A2(
			_elm_lang$core$Maybe$andThen,
			function (settings) {
				return _elm_lang$core$Result$toMaybe(
					A2(_elm_lang$core$Json_Decode$decodeValue, _1602$json_form$Json_Form_UiSpec$decoder, settings));
			},
			A2(_1602$json_schema$Json_Schema_Definitions$getCustomKeywordValue, 'ui', schema)));
};
var _1602$json_form$JsonFormUtil$getTextProp = F3(
	function (schema, prop, def) {
		var _p0 = schema;
		if (_p0.ctor === 'ObjectSchema') {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				def,
				prop(_p0._0));
		} else {
			return def;
		}
	});
var _1602$json_form$JsonFormUtil$getDescription = function (schema) {
	return A3(
		_1602$json_form$JsonFormUtil$getTextProp,
		schema,
		function (_) {
			return _.description;
		},
		'');
};
var _1602$json_form$JsonFormUtil$getTitle = F2(
	function (isRequired, schema) {
		return function (title) {
			return isRequired ? A2(_elm_lang$core$Basics_ops['++'], title, ' *') : title;
		}(
			A3(
				_1602$json_form$JsonFormUtil$getTextProp,
				schema,
				function (_) {
					return _.title;
				},
				''));
	});
var _1602$json_form$JsonFormUtil$jsonValueToString = function (jv) {
	var _p1 = jv;
	switch (_p1.ctor) {
		case 'StringValue':
			return _p1._0;
		case 'NumericValue':
			return _elm_lang$core$Basics$toString(_p1._0);
		default:
			return '';
	}
};

var _1602$json_form$Json_Form_Helper$view = F3(
	function (model, schema, path) {
		var errors = A2(_elm_lang$core$Dict$get, path, model.errors);
		var hasError = (!_elm_lang$core$Native_Utils.eq(errors, _elm_lang$core$Maybe$Nothing)) && A2(_elm_lang$core$List$member, path, model.beingEdited);
		return {
			ctor: '_Tuple2',
			_0: hasError,
			_1: hasError ? _elm_lang$html$Html$text(
				A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					'Error: ',
					A2(
						_elm_lang$core$String$join,
						', ',
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							errors)))) : _elm_lang$html$Html$text(
				_1602$json_form$JsonFormUtil$getDescription(schema))
		};
	});

var _1602$json_form$Json_Form_Selection$checkbox = F4(
	function (model, schema, isRequired, path) {
		var _p0 = A3(_1602$json_form$Json_Form_Helper$view, model, schema, path);
		var hasError = _p0._0;
		var helperText = _p0._1;
		var isChecked = function () {
			var _p2 = A2(
				_elm_lang$core$Maybe$andThen,
				function (_p1) {
					return _elm_lang$core$Result$toMaybe(
						A2(_1602$json_form$Json_Value$getIn, path, _p1));
				},
				model.value);
			if ((_p2.ctor === 'Just') && (_p2._0.ctor === 'BoolValue')) {
				return _p2._0._0;
			} else {
				return false;
			}
		}();
		return A2(
			_elm_lang$html$Html$label,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'jf-checkbox', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'jf-checkbox--on', _1: isChecked},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'jf-checkbox--focused',
									_1: A2(
										_elm_lang$core$Maybe$withDefault,
										false,
										A2(
											_elm_lang$core$Maybe$map,
											F2(
												function (x, y) {
													return _elm_lang$core$Native_Utils.eq(x, y);
												})(path),
											model.focused))
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'jf-checkbox--invalid', _1: hasError},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-checkbox__input'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$checked(isChecked),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onFocus(
										_1602$json_form$Json_Form_Definitions$FocusInput(
											_elm_lang$core$Maybe$Just(path))),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onBlur(
											_1602$json_form$Json_Form_Definitions$FocusInput(_elm_lang$core$Maybe$Nothing)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onCheck(
												function (_p3) {
													return A2(
														_1602$json_form$Json_Form_Definitions$EditValue,
														path,
														_1602$json_form$Json_Value$BoolValue(_p3));
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-checkbox__label'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_1602$json_form$JsonFormUtil$getTitle, isRequired, schema)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('jf-checkbox__box-outline'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('jf-checkbox__tick-outline'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('jf-checkbox__helper-text'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: helperText,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _1602$json_form$Json_Form_Selection$switch = F4(
	function (model, schema, isRequired, path) {
		var _p4 = A3(_1602$json_form$Json_Form_Helper$view, model, schema, path);
		var hasError = _p4._0;
		var helperText = _p4._1;
		var isChecked = function () {
			var _p6 = A2(
				_elm_lang$core$Maybe$andThen,
				function (_p5) {
					return _elm_lang$core$Result$toMaybe(
						A2(_1602$json_form$Json_Value$getIn, path, _p5));
				},
				model.value);
			if ((_p6.ctor === 'Just') && (_p6._0.ctor === 'BoolValue')) {
				return _p6._0._0;
			} else {
				return false;
			}
		}();
		return A2(
			_elm_lang$html$Html$label,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'jf-switch', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'jf-switch--on', _1: isChecked},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'jf-switch--focused',
									_1: A2(
										_elm_lang$core$Maybe$withDefault,
										false,
										A2(
											_elm_lang$core$Maybe$map,
											F2(
												function (x, y) {
													return _elm_lang$core$Native_Utils.eq(x, y);
												})(path),
											model.focused))
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'jf-switch--invalid', _1: hasError},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-switch__input'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$checked(isChecked),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onFocus(
										_1602$json_form$Json_Form_Definitions$FocusInput(
											_elm_lang$core$Maybe$Just(path))),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onBlur(
											_1602$json_form$Json_Form_Definitions$FocusInput(_elm_lang$core$Maybe$Nothing)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onCheck(
												function (_p7) {
													return A2(
														_1602$json_form$Json_Form_Definitions$EditValue,
														path,
														_1602$json_form$Json_Value$BoolValue(_p7));
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-switch__label'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_1602$json_form$JsonFormUtil$getTitle, isRequired, schema)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('jf-switch__track'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('jf-switch__thumb'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('jf-switch__helper-text'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: helperText,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});

var _1602$json_form$Json_Form_TextField$viewNumeric = F4(
	function (model, schema, isRequired, path) {
		var _p0 = A3(_1602$json_form$Json_Form_Helper$view, model, schema, path);
		var hasError = _p0._0;
		var helperText = _p0._1;
		var isFocused = A2(
			_elm_lang$core$Maybe$withDefault,
			false,
			A2(
				_elm_lang$core$Maybe$map,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(path),
				model.focused));
		var editedValue = isFocused ? model.editedNumber : A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				_1602$json_form$JsonFormUtil$jsonValueToString,
				A2(
					_elm_lang$core$Maybe$andThen,
					_elm_lang$core$Result$toMaybe,
					A2(
						_elm_lang$core$Maybe$map,
						_1602$json_form$Json_Value$getIn(path),
						model.value))));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'jf-textfield', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'jf-textfield--focused', _1: isFocused},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'jf-textfield--empty',
									_1: _elm_lang$core$Native_Utils.eq(editedValue, '')
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'jf-textfield--invalid', _1: hasError},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('jf-textfield__input'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onFocus(
								_1602$json_form$Json_Form_Definitions$FocusNumericInput(
									_elm_lang$core$Maybe$Just(path))),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onBlur(
									_1602$json_form$Json_Form_Definitions$FocusNumericInput(_elm_lang$core$Maybe$Nothing)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(_1602$json_form$Json_Form_Definitions$EditNumber),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$value(editedValue),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$type_('number'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$label,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-textfield__label'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_1602$json_form$JsonFormUtil$getTitle, isRequired, schema)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('jf-textfield__helper-text'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: helperText,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _1602$json_form$Json_Form_TextField$view = F4(
	function (model, schema, isRequired, path) {
		var getDefaultValue = function (s) {
			var _p1 = s;
			if (_p1.ctor === 'ObjectSchema') {
				return _1602$json_form$Json_Value$decodeValue(
					A2(_elm_lang$core$Maybe$withDefault, _elm_lang$core$Json_Encode$null, _p1._0.$default));
			} else {
				return _1602$json_form$Json_Value$NullValue;
			}
		};
		var referencedValue = F2(
			function (subPath, s) {
				return _1602$json_form$Json_Value$encode(
					A2(
						_elm_lang$core$Maybe$withDefault,
						getDefaultValue(s),
						A2(
							_elm_lang$core$Maybe$andThen,
							function (_p2) {
								return _elm_lang$core$Result$toMaybe(
									A2(_1602$json_form$Json_Value$getIn, subPath, _p2));
							},
							model.value)));
			});
		var validate = F2(
			function (subPath, s) {
				return A2(
					_elm_lang$core$Result$withDefault,
					false,
					A2(
						_elm_lang$core$Result$map,
						function (_p3) {
							return true;
						},
						A3(
							_1602$json_schema$Json_Schema$validateValue,
							{applyDefaults: true},
							A2(referencedValue, subPath, s),
							s)));
			});
		var uiSpec = _1602$json_form$JsonFormUtil$getUiSpec(schema);
		var isPassword = _elm_lang$core$Native_Utils.eq(
			uiSpec.widgetType,
			_elm_lang$core$Maybe$Just(_1602$json_form$Json_Form_UiSpec$PasswordField));
		var disabled = function () {
			var _p4 = uiSpec.rule;
			_v1_2:
			do {
				if (_p4.ctor === 'Just') {
					switch (_p4._0.ctor) {
						case 'Disable':
							return A2(validate, _p4._0._0, _p4._0._1);
						case 'Enable':
							return !A2(validate, _p4._0._0, _p4._0._1);
						default:
							break _v1_2;
					}
				} else {
					break _v1_2;
				}
			} while(false);
			return false;
		}();
		var hidden = function () {
			var _p5 = uiSpec.rule;
			_v2_2:
			do {
				if (_p5.ctor === 'Just') {
					switch (_p5._0.ctor) {
						case 'Hide':
							return A2(validate, _p5._0._0, _p5._0._1);
						case 'Show':
							return !A2(validate, _p5._0._0, _p5._0._1);
						default:
							break _v2_2;
					}
				} else {
					break _v2_2;
				}
			} while(false);
			return false;
		}();
		var _p6 = A3(_1602$json_form$Json_Form_Helper$view, model, schema, path);
		var hasError = _p6._0;
		var helperText = _p6._1;
		var editedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				_1602$json_form$JsonFormUtil$jsonValueToString,
				A2(
					_elm_lang$core$Maybe$andThen,
					_elm_lang$core$Result$toMaybe,
					A2(
						_elm_lang$core$Maybe$map,
						_1602$json_form$Json_Value$getIn(path),
						model.value))));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'jf-textfield', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'jf-textfield--focused',
								_1: A2(
									_elm_lang$core$Maybe$withDefault,
									false,
									A2(
										_elm_lang$core$Maybe$map,
										F2(
											function (x, y) {
												return _elm_lang$core$Native_Utils.eq(x, y);
											})(path),
										model.focused))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'jf-textfield--empty',
									_1: _elm_lang$core$Native_Utils.eq(editedValue, '')
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'jf-textfield--invalid', _1: hasError},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'jf-textfield--disabled', _1: disabled},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'jf-textfield--hidden', _1: hidden},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('jf-textfield__input'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onFocus(
								_1602$json_form$Json_Form_Definitions$FocusInput(
									_elm_lang$core$Maybe$Just(path))),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onBlur(
									_1602$json_form$Json_Form_Definitions$FocusInput(_elm_lang$core$Maybe$Nothing)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (str) {
											return A2(
												_1602$json_form$Json_Form_Definitions$EditValue,
												path,
												_1602$json_form$Json_Value$StringValue(str));
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$value(editedValue),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$disabled(disabled),
											_1: {
												ctor: '::',
												_0: isPassword ? _elm_lang$html$Html_Attributes$type_('password') : _elm_lang$html$Html_Attributes$type_('text'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$label,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('jf-textfield__label'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_1602$json_form$JsonFormUtil$getTitle, isRequired, schema)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('jf-textfield__helper-text'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: helperText,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});

var _1602$json_form$Json_Form$dictFromListErrors = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (error, dict) {
				return A3(
					_elm_lang$core$Dict$update,
					error.jsonPointer.path,
					function (listDetails) {
						return _elm_lang$core$Maybe$Just(
							function () {
								var _p0 = listDetails;
								if (_p0.ctor === 'Just') {
									return A2(
										_elm_lang$core$Basics_ops['++'],
										_p0._0,
										{
											ctor: '::',
											_0: _1602$json_form$ErrorMessages$stringifyError(error.details),
											_1: {ctor: '[]'}
										});
								} else {
									return {
										ctor: '::',
										_0: _1602$json_form$ErrorMessages$stringifyError(error.details),
										_1: {ctor: '[]'}
									};
								}
							}());
					},
					dict);
			}),
		_elm_lang$core$Dict$empty,
		list);
};
var _1602$json_form$Json_Form$touch = F3(
	function (path, focused, beingEdited) {
		return _elm_lang$core$Native_Utils.eq(path, _elm_lang$core$Maybe$Nothing) ? A2(
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				focused),
			beingEdited) : beingEdited;
	});
var _1602$json_form$Json_Form$getBooleanUiWidget = function (schema) {
	var _p1 = function (_) {
		return _.widgetType;
	}(
		_1602$json_form$JsonFormUtil$getUiSpec(schema));
	if ((_p1.ctor === 'Just') && (_p1._0.ctor === 'Switch')) {
		return _1602$json_form$Json_Form_Definitions$Switch;
	} else {
		return _1602$json_form$Json_Form_Definitions$Checkbox;
	}
};
var _1602$json_form$Json_Form$editingMode = F2(
	function (model, schema) {
		var _p2 = schema;
		if (_p2.ctor === 'ObjectSchema') {
			var _p3 = _p2._0.type_;
			_v3_4:
			do {
				if (_p3.ctor === 'SingleType') {
					switch (_p3._0.ctor) {
						case 'NumberType':
							return _1602$json_form$Json_Form_Definitions$NumberField;
						case 'StringType':
							return _1602$json_form$Json_Form_Definitions$TextField;
						case 'BooleanType':
							return _1602$json_form$Json_Form$getBooleanUiWidget(schema);
						case 'ObjectType':
							return _1602$json_form$Json_Form_Definitions$Object;
						default:
							break _v3_4;
					}
				} else {
					break _v3_4;
				}
			} while(false);
			return _1602$json_form$Json_Form_Definitions$JsonEditor;
		} else {
			return _1602$json_form$Json_Form_Definitions$JsonEditor;
		}
	});
var _1602$json_form$Json_Form$viewNode = F4(
	function (model, schema, isRequired, path) {
		var _p4 = A2(_1602$json_form$Json_Form$editingMode, model, schema);
		switch (_p4.ctor) {
			case 'TextField':
				return A4(_1602$json_form$Json_Form_TextField$view, model, schema, isRequired, path);
			case 'NumberField':
				return A4(_1602$json_form$Json_Form_TextField$viewNumeric, model, schema, isRequired, path);
			case 'Switch':
				return A4(_1602$json_form$Json_Form_Selection$switch, model, schema, isRequired, path);
			case 'Checkbox':
				return A4(_1602$json_form$Json_Form_Selection$checkbox, model, schema, isRequired, path);
			case 'Object':
				return A4(_1602$json_form$Json_Form$viewObject, model, schema, isRequired, path);
			default:
				return _elm_lang$html$Html$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p4),
						': not implemented'));
		}
	});
var _1602$json_form$Json_Form$viewObject = F4(
	function (model, schema, isRequired, path) {
		var iterateOverSchemata = F3(
			function (propsDict, required, _p5) {
				var _p6 = _p5;
				return A2(
					_elm_lang$core$List$map,
					function (_p7) {
						var _p8 = _p7;
						var _p9 = _p8._0;
						return A4(
							_1602$json_form$Json_Form$viewNode,
							model,
							_p8._1,
							A2(
								_elm_lang$core$List$member,
								_p9,
								A2(
									_elm_lang$core$Maybe$withDefault,
									{ctor: '[]'},
									required)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								path,
								{
									ctor: '::',
									_0: _p9,
									_1: {ctor: '[]'}
								}));
					},
					_p6._0);
			});
		var _p10 = schema;
		if (_p10.ctor === 'ObjectSchema') {
			var _p11 = _p10._0;
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						A2(iterateOverSchemata, _elm_lang$core$Dict$empty, _p11.required),
						_p11.properties)));
		} else {
			return _elm_lang$html$Html$text('');
		}
	});
var _1602$json_form$Json_Form$view = function (model) {
	return A4(
		_1602$json_form$Json_Form$viewNode,
		model,
		model.schema,
		false,
		{ctor: '[]'});
};
var _1602$json_form$Json_Form$init = _1602$json_form$Json_Form_Definitions$init;
var _1602$json_form$Json_Form$UpdateValue = F2(
	function (a, b) {
		return {ctor: 'UpdateValue', _0: a, _1: b};
	});
var _1602$json_form$Json_Form$editValue = F3(
	function (model, path, val) {
		var updatedJsonValue = A2(
			_elm_lang$core$Maybe$withDefault,
			_1602$json_form$Json_Value$NullValue,
			_elm_lang$core$Result$toMaybe(
				A2(
					_elm_lang$core$Result$mapError,
					_elm_lang$core$Debug$log('editValue'),
					A3(
						_1602$json_form$Json_Value$setIn,
						path,
						val,
						A2(_elm_lang$core$Maybe$withDefault, _1602$json_form$Json_Value$NullValue, model.value)))));
		var updatedValue = _1602$json_form$Json_Value$encode(updatedJsonValue);
		var validationResult = A3(
			_1602$json_schema$Json_Schema$validateValue,
			{applyDefaults: true},
			updatedValue,
			model.schema);
		var _p12 = validationResult;
		if (_p12.ctor === 'Ok') {
			return A2(
				_1602$json_form$JsonFormUtil_ops['=>'],
				A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							value: _elm_lang$core$Result$toMaybe(
								A2(_elm_lang$core$Json_Decode$decodeValue, _1602$json_form$Json_Value$decoder, _p12._0)),
							errors: _elm_lang$core$Dict$empty
						}),
					{ctor: '[]'}),
				A2(
					_1602$json_form$Json_Form$UpdateValue,
					_elm_lang$core$Maybe$Just(updatedJsonValue),
					true));
		} else {
			return A2(
				_1602$json_form$JsonFormUtil_ops['=>'],
				A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							value: _elm_lang$core$Maybe$Just(updatedJsonValue),
							errors: _1602$json_form$Json_Form$dictFromListErrors(_p12._0)
						}),
					{ctor: '[]'}),
				A2(
					_1602$json_form$Json_Form$UpdateValue,
					_elm_lang$core$Maybe$Just(updatedJsonValue),
					false));
		}
	});
var _1602$json_form$Json_Form$None = {ctor: 'None'};
var _1602$json_form$Json_Form$update = F2(
	function (msg, model) {
		var _p13 = msg;
		switch (_p13.ctor) {
			case 'FocusInput':
				var _p14 = _p13._0;
				return A2(
					_1602$json_form$JsonFormUtil_ops['=>'],
					A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								focused: _p14,
								beingEdited: A3(_1602$json_form$Json_Form$touch, _p14, model.focused, model.beingEdited)
							}),
						{ctor: '[]'}),
					_1602$json_form$Json_Form$None);
			case 'FocusNumericInput':
				var _p17 = _p13._0;
				var _p15 = _p17;
				if (_p15.ctor === 'Nothing') {
					return A3(
						_1602$json_form$Json_Form$editValue,
						_elm_lang$core$Native_Utils.update(
							model,
							{
								beingEdited: A3(_1602$json_form$Json_Form$touch, _p17, model.focused, model.beingEdited)
							}),
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							model.focused),
						function () {
							var _p16 = _elm_lang$core$String$toFloat(model.editedNumber);
							if (_p16.ctor === 'Ok') {
								return _1602$json_form$Json_Value$NumericValue(_p16._0);
							} else {
								return _1602$json_form$Json_Value$StringValue(model.editedNumber);
							}
						}());
				} else {
					return A2(
						_1602$json_form$JsonFormUtil_ops['=>'],
						A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									focused: _p17,
									editedNumber: A2(
										_elm_lang$core$Maybe$withDefault,
										'',
										A2(
											_elm_lang$core$Maybe$map,
											_1602$json_form$JsonFormUtil$jsonValueToString,
											A2(
												_elm_lang$core$Maybe$andThen,
												_elm_lang$core$Result$toMaybe,
												A2(
													_elm_lang$core$Maybe$map,
													_1602$json_form$Json_Value$getIn(_p15._0),
													model.value))))
								}),
							{ctor: '[]'}),
						_1602$json_form$Json_Form$None);
				}
			case 'EditValue':
				return A3(_1602$json_form$Json_Form$editValue, model, _p13._0, _p13._1);
			default:
				var _p19 = _p13._0;
				var _p18 = _elm_lang$core$String$toFloat(_p19);
				if (_p18.ctor === 'Ok') {
					return A3(
						_1602$json_form$Json_Form$editValue,
						_elm_lang$core$Native_Utils.update(
							model,
							{editedNumber: _p19}),
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							model.focused),
						_1602$json_form$Json_Value$NumericValue(_p18._0));
				} else {
					return A2(
						_1602$json_form$JsonFormUtil_ops['=>'],
						A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{editedNumber: _p19}),
							{ctor: '[]'}),
						_1602$json_form$Json_Form$None);
				}
		}
	});

var _1602$json_form$JsonViewer$boolToString = function (bv) {
	return bv ? 'true' : 'false';
};
var _1602$json_form$JsonViewer$jsonTypeToString = function (t) {
	var _p0 = t;
	switch (_p0.ctor) {
		case 'JsonBoolean':
			return 'bool';
		case 'JsonString':
			return 'string';
		case 'JsonNumber':
			return 'number';
		default:
			return 'null';
	}
};
var _1602$json_form$JsonViewer$inline = F2(
	function (jsonType, el) {
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'json-viewer json-viewer--',
						_1602$json_form$JsonViewer$jsonTypeToString(jsonType))),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: el,
				_1: {ctor: '[]'}
			});
	});
var _1602$json_form$JsonViewer$toggle = F2(
	function (path, expandedNodes) {
		return A2(_elm_lang$core$List$member, path, expandedNodes) ? A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return !_elm_lang$core$Native_Utils.eq(x, y);
				})(path),
			expandedNodes) : {ctor: '::', _0: path, _1: expandedNodes};
	});
var _1602$json_form$JsonViewer$JsonViewer = F2(
	function (a, b) {
		return {expandedNodes: a, onToggle: b};
	});
var _1602$json_form$JsonViewer$JsonNull = {ctor: 'JsonNull'};
var _1602$json_form$JsonViewer$JsonNumber = {ctor: 'JsonNumber'};
var _1602$json_form$JsonViewer$JsonString = {ctor: 'JsonString'};
var _1602$json_form$JsonViewer$JsonBoolean = {ctor: 'JsonBoolean'};
var _1602$json_form$JsonViewer$view = F3(
	function (jvr, path, jv) {
		var _p1 = jv;
		switch (_p1.ctor) {
			case 'BoolValue':
				return A2(
					_1602$json_form$JsonViewer$inline,
					_1602$json_form$JsonViewer$JsonBoolean,
					_elm_lang$html$Html$text(
						_1602$json_form$JsonViewer$boolToString(_p1._0)));
			case 'NumericValue':
				return A2(
					_1602$json_form$JsonViewer$inline,
					_1602$json_form$JsonViewer$JsonNumber,
					_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p1._0)));
			case 'StringValue':
				return A2(
					_1602$json_form$JsonViewer$inline,
					_1602$json_form$JsonViewer$JsonString,
					_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p1._0)));
			case 'NullValue':
				return A2(
					_1602$json_form$JsonViewer$inline,
					_1602$json_form$JsonViewer$JsonNull,
					_elm_lang$html$Html$text('null'));
			case 'ObjectValue':
				var _p7 = _p1._0;
				return A2(_elm_lang$core$List$member, path, jvr.expandedNodes) ? A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer--expandable'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (_p2) {
							var _p3 = _p2;
							var _p4 = _p3._0;
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer__object-property'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$span,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer__key'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(_p4),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A3(
											_1602$json_form$JsonViewer$view,
											jvr,
											A2(
												_elm_lang$core$Basics_ops['++'],
												path,
												{
													ctor: '::',
													_0: _p4,
													_1: {ctor: '[]'}
												}),
											_p3._1),
										_1: {ctor: '[]'}
									}
								});
						},
						_p7)) : function (s) {
					return A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer--collapsed'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(
									jvr.onToggle(path)),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'{ ',
									A2(_elm_lang$core$Basics_ops['++'], s, '... }'))),
							_1: {ctor: '[]'}
						});
				}(
					A2(
						_elm_lang$core$String$join,
						', ',
						A2(
							_elm_lang$core$List$map,
							function (_p5) {
								var _p6 = _p5;
								return _p6._0;
							},
							A2(_elm_lang$core$List$take, 5, _p7))));
			default:
				var _p8 = _p1._0;
				return A2(_elm_lang$core$List$member, path, jvr.expandedNodes) ? A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer--expandable'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (index, v) {
								return A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer__array-item'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$span,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer__key'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													_elm_lang$core$Basics$toString(index)),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A3(
												_1602$json_form$JsonViewer$view,
												jvr,
												A2(
													_elm_lang$core$Basics_ops['++'],
													path,
													{
														ctor: '::',
														_0: _elm_lang$core$Basics$toString(index),
														_1: {ctor: '[]'}
													}),
												v),
											_1: {ctor: '[]'}
										}
									});
							}),
						_p8)) : A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('json-viewer json-viewer--collapsed'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								jvr.onToggle(path)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'[ ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p8)),
									' items... ]'))),
						_1: {ctor: '[]'}
					});
		}
	});

var _1602$json_schema$Json_Schema_Builder$encode = F2(
	function (level, s) {
		var addParens = function (s) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'( ',
				A2(_elm_lang$core$Basics_ops['++'], s, ' )'));
		};
		var singleTypeToString = function (st) {
			var _p0 = st;
			switch (_p0.ctor) {
				case 'StringType':
					return 'string';
				case 'IntegerType':
					return 'integer';
				case 'NumberType':
					return 'number';
				case 'BooleanType':
					return 'boolean';
				case 'ObjectType':
					return 'object';
				case 'ArrayType':
					return 'array';
				default:
					return 'null';
			}
		};
		var indent = A2(
			_elm_lang$core$Basics_ops['++'],
			'\n',
			A2(_elm_lang$core$String$repeat, level, '    '));
		var pipe = A2(_elm_lang$core$Basics_ops['++'], indent, '|> ');
		var optionally = F4(
			function (fn, val, key, res) {
				var _p1 = val;
				if (_p1.ctor === 'Just') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						res,
						A2(
							_elm_lang$core$Basics_ops['++'],
							pipe,
							A2(
								_elm_lang$core$Basics_ops['++'],
								key,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' ',
									fn(_p1._0)))));
				} else {
					return res;
				}
			});
		var encodeDependency = F2(
			function (key, dep) {
				var _p2 = dep;
				if (_p2.ctor === 'PropSchema') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						pipe,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'withSchemaDependency \"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								key,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\" ',
									A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p2._0)))));
				} else {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						pipe,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'withPropNamesDependency \"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								key,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\" [ ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											', ',
											A2(
												_elm_lang$core$List$map,
												function (s) {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'\"',
														A2(_elm_lang$core$Basics_ops['++'], s, '\"'));
												},
												_p2._0)),
										' ]')))));
				}
			});
		var encodeDependencies = F2(
			function (deps, res) {
				return _elm_lang$core$List$isEmpty(deps) ? res : A2(
					_elm_lang$core$Basics_ops['++'],
					res,
					A2(
						_elm_lang$core$Basics_ops['++'],
						pipe,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'withDependencies',
							A2(
								_elm_lang$core$String$join,
								pipe,
								A2(
									_elm_lang$core$List$map,
									function (_p3) {
										var _p4 = _p3;
										return A2(encodeDependency, _p4._0, _p4._1);
									},
									deps)))));
			});
		var encodeType = F2(
			function (t, res) {
				var _p5 = t;
				switch (_p5.ctor) {
					case 'SingleType':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							res,
							A2(
								_elm_lang$core$Basics_ops['++'],
								pipe,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'withType \"',
									A2(
										_elm_lang$core$Basics_ops['++'],
										singleTypeToString(_p5._0),
										'\"'))));
					case 'NullableType':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							res,
							A2(
								_elm_lang$core$Basics_ops['++'],
								pipe,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'withNullableType \"',
									A2(
										_elm_lang$core$Basics_ops['++'],
										singleTypeToString(_p5._0),
										'\"'))));
					case 'UnionType':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							res,
							A2(
								_elm_lang$core$Basics_ops['++'],
								pipe,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'withUnionType [',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											', ',
											A2(
												_elm_lang$core$List$map,
												function (_p6) {
													return _elm_lang$core$Basics$toString(
														singleTypeToString(_p6));
												},
												_p5._0)),
										']'))));
					default:
						return res;
				}
			});
		var comma = A2(_elm_lang$core$Basics_ops['++'], indent, ', ');
		var encodeItems = F2(
			function (items, res) {
				var _p7 = items;
				switch (_p7.ctor) {
					case 'ItemDefinition':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							res,
							A2(
								_elm_lang$core$Basics_ops['++'],
								pipe,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'withItem ',
									function (_p8) {
										return addParens(
											A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p8));
									}(_p7._0))));
					case 'ArrayOfItems':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							res,
							A2(
								_elm_lang$core$Basics_ops['++'],
								pipe,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'withItem ',
									A2(
										_elm_lang$core$String$join,
										comma,
										A2(
											_elm_lang$core$List$map,
											_1602$json_schema$Json_Schema_Builder$encode(level + 1),
											_p7._0)))));
					default:
						return res;
				}
			});
		var comma2 = A2(_elm_lang$core$Basics_ops['++'], indent, '  , ');
		var comma4 = A2(_elm_lang$core$Basics_ops['++'], indent, '    , ');
		var encodeListSchemas = function (l) {
			return function (s) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					indent,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  [ ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							s,
							A2(_elm_lang$core$Basics_ops['++'], indent, '  ]'))));
			}(
				A2(
					_elm_lang$core$String$join,
					comma2,
					A2(
						_elm_lang$core$List$map,
						_1602$json_schema$Json_Schema_Builder$encode(level + 1),
						l)));
		};
		var encodeSchemata = function (_p9) {
			var _p10 = _p9;
			return function (s) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					indent,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  [ ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							s,
							A2(_elm_lang$core$Basics_ops['++'], indent, '  ]'))));
			}(
				A2(
					_elm_lang$core$String$join,
					comma2,
					A2(
						_elm_lang$core$List$map,
						function (_p11) {
							var _p12 = _p11;
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'( \"',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p12._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'\"',
										A2(
											_elm_lang$core$Basics_ops['++'],
											comma4,
											A2(
												_elm_lang$core$Basics_ops['++'],
												A2(_1602$json_schema$Json_Schema_Builder$encode, level + 2, _p12._1),
												A2(_elm_lang$core$Basics_ops['++'], indent, '    )'))))));
						},
						_p10._0)));
		};
		var _p13 = s;
		if (_p13.ctor === 'BooleanSchema') {
			return _p13._0 ? 'boolSchema True' : 'boolSchema False';
		} else {
			var _p21 = _p13._0;
			return A3(
				_elm_lang$core$List$foldl,
				_elm_lang$core$Basics$identity,
				'buildSchema',
				{
					ctor: '::',
					_0: encodeType(_p21.type_),
					_1: {
						ctor: '::',
						_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.id, 'withId'),
						_1: {
							ctor: '::',
							_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.ref, 'withRef'),
							_1: {
								ctor: '::',
								_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.title, 'withTitle'),
								_1: {
									ctor: '::',
									_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.description, 'withDescription'),
									_1: {
										ctor: '::',
										_0: A3(
											optionally,
											function (x) {
												return function (x) {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'(',
														A2(_elm_lang$core$Basics_ops['++'], x, ' |> Decode.decodeString Decode.value |> Result.withDefault Encode.null)'));
												}(
													_elm_lang$core$Basics$toString(
														A2(_elm_lang$core$Json_Encode$encode, 0, x)));
											},
											_p21.$default,
											'withDefault'),
										_1: {
											ctor: '::',
											_0: A3(
												optionally,
												function (examples) {
													return A2(
														_elm_lang$core$Json_Encode$encode,
														0,
														_elm_lang$core$Json_Encode$list(examples));
												},
												_p21.examples,
												'withExamples'),
											_1: {
												ctor: '::',
												_0: A3(optionally, encodeSchemata, _p21.definitions, 'withDefinitions'),
												_1: {
													ctor: '::',
													_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.multipleOf, 'withMultipleOf'),
													_1: {
														ctor: '::',
														_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.maximum, 'withMaximum'),
														_1: {
															ctor: '::',
															_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.exclusiveMaximum, 'withExclusiveMaximum'),
															_1: {
																ctor: '::',
																_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.minimum, 'withMinimum'),
																_1: {
																	ctor: '::',
																	_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.exclusiveMinimum, 'withExclusiveMinimum'),
																	_1: {
																		ctor: '::',
																		_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.maxLength, 'withMaxLength'),
																		_1: {
																			ctor: '::',
																			_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.minLength, 'withMinLength'),
																			_1: {
																				ctor: '::',
																				_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.pattern, 'withPattern'),
																				_1: {
																					ctor: '::',
																					_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.format, 'withFormat'),
																					_1: {
																						ctor: '::',
																						_0: encodeItems(_p21.items),
																						_1: {
																							ctor: '::',
																							_0: A3(
																								optionally,
																								function (_p14) {
																									return addParens(
																										A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p14));
																								},
																								_p21.additionalItems,
																								'withAdditionalItems'),
																							_1: {
																								ctor: '::',
																								_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.maxItems, 'withMaxItems'),
																								_1: {
																									ctor: '::',
																									_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.minItems, 'withMinItems'),
																									_1: {
																										ctor: '::',
																										_0: A3(
																											optionally,
																											function (_p15) {
																												return _elm_lang$core$Basics$toString(
																													_elm_lang$core$Json_Encode$bool(_p15));
																											},
																											_p21.uniqueItems,
																											'withUniqueItems'),
																										_1: {
																											ctor: '::',
																											_0: A3(
																												optionally,
																												function (_p16) {
																													return addParens(
																														A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p16));
																												},
																												_p21.contains,
																												'withContains'),
																											_1: {
																												ctor: '::',
																												_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.maxProperties, 'withMaxProperties'),
																												_1: {
																													ctor: '::',
																													_0: A3(optionally, _elm_lang$core$Basics$toString, _p21.minProperties, 'withMinProperties'),
																													_1: {
																														ctor: '::',
																														_0: A3(
																															optionally,
																															function (s) {
																																return A2(
																																	_elm_lang$core$Json_Encode$encode,
																																	0,
																																	_elm_lang$core$Json_Encode$list(
																																		A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, s)));
																															},
																															_p21.required,
																															'withRequired'),
																														_1: {
																															ctor: '::',
																															_0: A3(optionally, encodeSchemata, _p21.properties, 'withProperties'),
																															_1: {
																																ctor: '::',
																																_0: A3(optionally, encodeSchemata, _p21.patternProperties, 'withPatternProperties'),
																																_1: {
																																	ctor: '::',
																																	_0: A3(
																																		optionally,
																																		function (_p17) {
																																			return addParens(
																																				A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p17));
																																		},
																																		_p21.additionalProperties,
																																		'withAdditionalProperties'),
																																	_1: {
																																		ctor: '::',
																																		_0: encodeDependencies(_p21.dependencies),
																																		_1: {
																																			ctor: '::',
																																			_0: A3(
																																				optionally,
																																				function (_p18) {
																																					return addParens(
																																						A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p18));
																																				},
																																				_p21.propertyNames,
																																				'withPropertyNames'),
																																			_1: {
																																				ctor: '::',
																																				_0: A3(
																																					optionally,
																																					function (examples) {
																																						return function (x) {
																																							return A2(
																																								_elm_lang$core$Basics_ops['++'],
																																								'( ',
																																								A2(_elm_lang$core$Basics_ops['++'], x, ' |> List.map Encode.string )'));
																																						}(
																																							A2(
																																								_elm_lang$core$Json_Encode$encode,
																																								0,
																																								_elm_lang$core$Json_Encode$list(examples)));
																																					},
																																					_p21.$enum,
																																					'withEnum'),
																																				_1: {
																																					ctor: '::',
																																					_0: A3(
																																						optionally,
																																						function (_p19) {
																																							return addParens(
																																								A2(_elm_lang$core$Json_Encode$encode, 0, _p19));
																																						},
																																						_p21.$const,
																																						'withConst'),
																																					_1: {
																																						ctor: '::',
																																						_0: A3(optionally, encodeListSchemas, _p21.allOf, 'withAllOf'),
																																						_1: {
																																							ctor: '::',
																																							_0: A3(optionally, encodeListSchemas, _p21.anyOf, 'withAnyOf'),
																																							_1: {
																																								ctor: '::',
																																								_0: A3(optionally, encodeListSchemas, _p21.oneOf, 'withOneOf'),
																																								_1: {
																																									ctor: '::',
																																									_0: A3(
																																										optionally,
																																										function (_p20) {
																																											return addParens(
																																												A2(_1602$json_schema$Json_Schema_Builder$encode, level + 1, _p20));
																																										},
																																										_p21.not,
																																										'withNot'),
																																									_1: {ctor: '[]'}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				});
		}
	});
var _1602$json_schema$Json_Schema_Builder$toSchema = function (_p22) {
	var _p23 = _p22;
	var _p27 = _p23._0;
	if (_elm_lang$core$List$isEmpty(_p27.errors)) {
		var _p24 = _p27.bool;
		if (_p24.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(
				_1602$json_schema$Json_Schema_Definitions$BooleanSchema(_p24._0));
		} else {
			var _p25 = _p27.schema;
			if (_p25.ctor === 'Just') {
				var _p26 = _p25._0;
				return _elm_lang$core$Result$Ok(
					_1602$json_schema$Json_Schema_Definitions$ObjectSchema(
						_elm_lang$core$Native_Utils.update(
							_p26,
							{
								source: _1602$json_schema$Json_Schema_Definitions$encode(
									_1602$json_schema$Json_Schema_Definitions$ObjectSchema(_p26))
							})));
			} else {
				return _elm_lang$core$Result$Ok(
					_1602$json_schema$Json_Schema_Definitions$ObjectSchema(_1602$json_schema$Json_Schema_Definitions$blankSubSchema));
			}
		}
	} else {
		return _elm_lang$core$Result$Err(
			A2(_elm_lang$core$String$join, ', ', _p27.errors));
	}
};
var _1602$json_schema$Json_Schema_Builder$validate = F3(
	function (validationOptions, val, sb) {
		var _p28 = _1602$json_schema$Json_Schema_Builder$toSchema(sb);
		if (_p28.ctor === 'Ok') {
			var _p29 = _p28._0;
			return A5(_1602$json_schema$Json_Schema_Validation$validate, validationOptions, _1602$json_schema$Ref$defaultPool, val, _p29, _p29);
		} else {
			return _elm_lang$core$Result$Ok(val);
		}
	});
var _1602$json_schema$Json_Schema_Builder$toSchemata = A2(
	_elm_lang$core$List$foldl,
	function (_p30) {
		var _p31 = _p30;
		return _elm_lang$core$Result$andThen(
			function (schemas) {
				return A2(
					_elm_lang$core$Result$map,
					function (schema) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							schemas,
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _p31._0, _1: schema},
								_1: {ctor: '[]'}
							});
					},
					_1602$json_schema$Json_Schema_Builder$toSchema(_p31._1));
			});
	},
	_elm_lang$core$Result$Ok(
		{ctor: '[]'}));
var _1602$json_schema$Json_Schema_Builder$toListOfSchemas = A2(
	_elm_lang$core$List$foldl,
	function (builder) {
		return _elm_lang$core$Result$andThen(
			function (schemas) {
				return A2(
					_elm_lang$core$Result$map,
					function (schema) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							schemas,
							{
								ctor: '::',
								_0: schema,
								_1: {ctor: '[]'}
							});
					},
					_1602$json_schema$Json_Schema_Builder$toSchema(builder));
			});
	},
	_elm_lang$core$Result$Ok(
		{ctor: '[]'}));
var _1602$json_schema$Json_Schema_Builder$SchemaBuilder = function (a) {
	return {ctor: 'SchemaBuilder', _0: a};
};
var _1602$json_schema$Json_Schema_Builder$buildSchema = _1602$json_schema$Json_Schema_Builder$SchemaBuilder(
	{
		errors: {ctor: '[]'},
		schema: _elm_lang$core$Maybe$Just(_1602$json_schema$Json_Schema_Definitions$blankSubSchema),
		bool: _elm_lang$core$Maybe$Nothing
	});
var _1602$json_schema$Json_Schema_Builder$boolSchema = function (b) {
	return _1602$json_schema$Json_Schema_Builder$SchemaBuilder(
		{
			errors: {ctor: '[]'},
			schema: _elm_lang$core$Maybe$Nothing,
			bool: _elm_lang$core$Maybe$Just(b)
		});
};
var _1602$json_schema$Json_Schema_Builder$updateSchema = F2(
	function (fn, _p32) {
		var _p33 = _p32;
		var _p35 = _p33._0;
		var _p34 = _p35.schema;
		if (_p34.ctor === 'Just') {
			return _1602$json_schema$Json_Schema_Builder$SchemaBuilder(
				_elm_lang$core$Native_Utils.update(
					_p35,
					{
						schema: _elm_lang$core$Maybe$Just(
							fn(_p34._0))
					}));
		} else {
			return _1602$json_schema$Json_Schema_Builder$SchemaBuilder(_p35);
		}
	});
var _1602$json_schema$Json_Schema_Builder$withPropNamesDependency = F2(
	function (name, pn) {
		return _1602$json_schema$Json_Schema_Builder$updateSchema(
			function (schema) {
				return _elm_lang$core$Native_Utils.update(
					schema,
					{
						dependencies: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: name,
								_1: _1602$json_schema$Json_Schema_Definitions$ArrayPropNames(pn)
							},
							_1: schema.dependencies
						}
					});
			});
	});
var _1602$json_schema$Json_Schema_Builder$withTitle = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					title: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withDescription = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					description: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMultipleOf = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					multipleOf: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMaximum = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					maximum: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMinimum = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					minimum: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withExclusiveMaximum = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					exclusiveMaximum: _elm_lang$core$Maybe$Just(
						_1602$json_schema$Json_Schema_Definitions$NumberBoundary(x))
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withExclusiveMinimum = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					exclusiveMinimum: _elm_lang$core$Maybe$Just(
						_1602$json_schema$Json_Schema_Definitions$NumberBoundary(x))
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMaxLength = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					maxLength: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMinLength = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					minLength: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMaxProperties = function (n) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					maxProperties: _elm_lang$core$Maybe$Just(n)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMinProperties = function (n) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					minProperties: _elm_lang$core$Maybe$Just(n)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMaxItems = function (n) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					maxItems: _elm_lang$core$Maybe$Just(n)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withMinItems = function (n) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					minItems: _elm_lang$core$Maybe$Just(n)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withUniqueItems = function (b) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					uniqueItems: _elm_lang$core$Maybe$Just(b)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withPattern = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					pattern: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withFormat = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					format: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withEnum = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					$enum: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withRequired = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					required: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withConst = function (v) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					$const: _elm_lang$core$Maybe$Just(v)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withRef = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					ref: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withExamples = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					examples: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withDefault = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					$default: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withId = function (x) {
	return _1602$json_schema$Json_Schema_Builder$updateSchema(
		function (s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{
					id: _elm_lang$core$Maybe$Just(x)
				});
		});
};
var _1602$json_schema$Json_Schema_Builder$withCustomKeyword = F2(
	function (key, val) {
		return _1602$json_schema$Json_Schema_Builder$updateSchema(
			function (s) {
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						source: _elm_lang$core$Json_Encode$object(
							A2(
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								{ctor: '_Tuple2', _0: key, _1: val},
								A2(
									_elm_lang$core$Result$withDefault,
									{ctor: '[]'},
									A2(
										_elm_lang$core$Json_Decode$decodeValue,
										_elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$value),
										s.source))))
					});
			});
	});
var _1602$json_schema$Json_Schema_Builder$appendError = F2(
	function (e, _p36) {
		var _p37 = _p36;
		return _1602$json_schema$Json_Schema_Builder$SchemaBuilder(
			{
				errors: {ctor: '::', _0: e, _1: _p37._0.errors},
				schema: _p37._0.schema,
				bool: _p37._0.bool
			});
	});
var _1602$json_schema$Json_Schema_Builder$withType = F2(
	function (t, sb) {
		return function (r) {
			var _p38 = r;
			if (_p38.ctor === 'Ok') {
				return _p38._0;
			} else {
				return A2(_1602$json_schema$Json_Schema_Builder$appendError, _p38._0, sb);
			}
		}(
			A2(
				_elm_lang$core$Result$map,
				function (x) {
					return A2(
						_1602$json_schema$Json_Schema_Builder$updateSchema,
						function (s) {
							return _elm_lang$core$Native_Utils.update(
								s,
								{
									type_: _1602$json_schema$Json_Schema_Definitions$SingleType(x)
								});
						},
						sb);
				},
				_1602$json_schema$Json_Schema_Definitions$stringToType(t)));
	});
var _1602$json_schema$Json_Schema_Builder$withNullableType = function (t) {
	var _p39 = _1602$json_schema$Json_Schema_Definitions$stringToType(t);
	if (_p39.ctor === 'Ok') {
		if (_p39._0.ctor === 'NullType') {
			return _1602$json_schema$Json_Schema_Builder$appendError('Nullable null is not allowed');
		} else {
			return _1602$json_schema$Json_Schema_Builder$updateSchema(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						s,
						{
							type_: _1602$json_schema$Json_Schema_Definitions$NullableType(_p39._0)
						});
				});
		}
	} else {
		return _1602$json_schema$Json_Schema_Builder$appendError(_p39._0);
	}
};
var _1602$json_schema$Json_Schema_Builder$withUnionType = F2(
	function (listTypes, sb) {
		return function (x) {
			var _p40 = x;
			if (_p40.ctor === 'Err') {
				return A2(_1602$json_schema$Json_Schema_Builder$appendError, _p40._0, sb);
			} else {
				return _p40._0;
			}
		}(
			A2(
				_elm_lang$core$Result$map,
				function (s) {
					return A2(
						_1602$json_schema$Json_Schema_Builder$updateSchema,
						function (x) {
							return _elm_lang$core$Native_Utils.update(
								x,
								{
									type_: _1602$json_schema$Json_Schema_Definitions$UnionType(s)
								});
						},
						sb);
				},
				_1602$json_schema$Util$foldResults(
					A2(
						_elm_lang$core$List$map,
						_1602$json_schema$Json_Schema_Definitions$stringToType,
						_elm_lang$core$List$sort(listTypes)))));
	});
var _1602$json_schema$Json_Schema_Builder$withItems = function (listSchemas) {
	var _p41 = _1602$json_schema$Json_Schema_Builder$toListOfSchemas(listSchemas);
	if (_p41.ctor === 'Ok') {
		return _1602$json_schema$Json_Schema_Builder$updateSchema(
			function (s) {
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						items: _1602$json_schema$Json_Schema_Definitions$ArrayOfItems(_p41._0)
					});
			});
	} else {
		return _1602$json_schema$Json_Schema_Builder$appendError(_p41._0);
	}
};
var _1602$json_schema$Json_Schema_Builder$withItem = function (item) {
	var _p42 = _1602$json_schema$Json_Schema_Builder$toSchema(item);
	if (_p42.ctor === 'Ok') {
		return _1602$json_schema$Json_Schema_Builder$updateSchema(
			function (s) {
				return _elm_lang$core$Native_Utils.update(
					s,
					{
						items: _1602$json_schema$Json_Schema_Definitions$ItemDefinition(_p42._0)
					});
			});
	} else {
		return _1602$json_schema$Json_Schema_Builder$appendError(_p42._0);
	}
};
var _1602$json_schema$Json_Schema_Builder$withSchemaDependency = F2(
	function (name, sd) {
		var _p43 = _1602$json_schema$Json_Schema_Builder$toSchema(sd);
		if (_p43.ctor === 'Ok') {
			return _1602$json_schema$Json_Schema_Builder$updateSchema(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						s,
						{
							dependencies: A2(
								_elm_lang$core$Basics_ops['++'],
								s.dependencies,
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: name,
										_1: _1602$json_schema$Json_Schema_Definitions$PropSchema(_p43._0)
									},
									_1: {ctor: '[]'}
								})
						});
				});
		} else {
			return _1602$json_schema$Json_Schema_Builder$appendError(_p43._0);
		}
	});
var _1602$json_schema$Json_Schema_Builder$updateWithSubSchema = F2(
	function (fn, subSchemaBuilder) {
		var _p44 = _1602$json_schema$Json_Schema_Builder$toSchema(subSchemaBuilder);
		if (_p44.ctor === 'Ok') {
			return _1602$json_schema$Json_Schema_Builder$updateSchema(
				fn(
					_elm_lang$core$Maybe$Just(_p44._0)));
		} else {
			return _1602$json_schema$Json_Schema_Builder$appendError(_p44._0);
		}
	});
var _1602$json_schema$Json_Schema_Builder$withContains = _1602$json_schema$Json_Schema_Builder$updateWithSubSchema(
	F2(
		function (sub, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{contains: sub});
		}));
var _1602$json_schema$Json_Schema_Builder$withNot = _1602$json_schema$Json_Schema_Builder$updateWithSubSchema(
	F2(
		function (sub, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{not: sub});
		}));
var _1602$json_schema$Json_Schema_Builder$withAdditionalItems = _1602$json_schema$Json_Schema_Builder$updateWithSubSchema(
	F2(
		function (sub, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{additionalItems: sub});
		}));
var _1602$json_schema$Json_Schema_Builder$withAdditionalProperties = _1602$json_schema$Json_Schema_Builder$updateWithSubSchema(
	F2(
		function (sub, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{additionalProperties: sub});
		}));
var _1602$json_schema$Json_Schema_Builder$withPropertyNames = _1602$json_schema$Json_Schema_Builder$updateWithSubSchema(
	F2(
		function (propertyNames, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{propertyNames: propertyNames});
		}));
var _1602$json_schema$Json_Schema_Builder$updateWithSchemata = F2(
	function (fn, schemataBuilder) {
		var _p45 = _1602$json_schema$Json_Schema_Builder$toSchemata(schemataBuilder);
		if (_p45.ctor === 'Ok') {
			return _1602$json_schema$Json_Schema_Builder$updateSchema(
				fn(
					_elm_lang$core$Maybe$Just(
						_1602$json_schema$Json_Schema_Definitions$Schemata(_p45._0))));
		} else {
			return _1602$json_schema$Json_Schema_Builder$appendError(_p45._0);
		}
	});
var _1602$json_schema$Json_Schema_Builder$withDefinitions = _1602$json_schema$Json_Schema_Builder$updateWithSchemata(
	F2(
		function (definitions, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{definitions: definitions});
		}));
var _1602$json_schema$Json_Schema_Builder$withProperties = _1602$json_schema$Json_Schema_Builder$updateWithSchemata(
	F2(
		function (properties, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{properties: properties});
		}));
var _1602$json_schema$Json_Schema_Builder$withPatternProperties = _1602$json_schema$Json_Schema_Builder$updateWithSchemata(
	F2(
		function (patternProperties, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{patternProperties: patternProperties});
		}));
var _1602$json_schema$Json_Schema_Builder$updateWithListOfSchemas = F2(
	function (fn, schemasBuilder) {
		var _p46 = _1602$json_schema$Json_Schema_Builder$toListOfSchemas(schemasBuilder);
		if (_p46.ctor === 'Ok') {
			return _1602$json_schema$Json_Schema_Builder$updateSchema(
				fn(
					_elm_lang$core$Maybe$Just(_p46._0)));
		} else {
			return _1602$json_schema$Json_Schema_Builder$appendError(_p46._0);
		}
	});
var _1602$json_schema$Json_Schema_Builder$withAllOf = _1602$json_schema$Json_Schema_Builder$updateWithListOfSchemas(
	F2(
		function (allOf, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{allOf: allOf});
		}));
var _1602$json_schema$Json_Schema_Builder$withAnyOf = _1602$json_schema$Json_Schema_Builder$updateWithListOfSchemas(
	F2(
		function (anyOf, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{anyOf: anyOf});
		}));
var _1602$json_schema$Json_Schema_Builder$withOneOf = _1602$json_schema$Json_Schema_Builder$updateWithListOfSchemas(
	F2(
		function (oneOf, s) {
			return _elm_lang$core$Native_Utils.update(
				s,
				{oneOf: oneOf});
		}));

var _1602$json_form$Snippets$getSnippet = function (ds) {
	var _p0 = ds;
	switch (_p0.ctor) {
		case 'SimpleField':
			return _1602$json_schema$Json_Schema_Definitions$ObjectSchema(
				_elm_lang$core$Native_Utils.update(
					_1602$json_schema$Json_Schema_Definitions$blankSubSchema,
					{
						type_: _1602$json_schema$Json_Schema_Definitions$SingleType(_1602$json_schema$Json_Schema_Definitions$StringType),
						title: _elm_lang$core$Maybe$Just('First name'),
						description: _elm_lang$core$Maybe$Just('First (given) name of a travelling person')
					}));
		case 'FlatObject':
			return A2(
				_elm_lang$core$Result$withDefault,
				_1602$json_schema$Json_Schema_Definitions$blankSchema,
				_1602$json_schema$Json_Schema_Builder$toSchema(
					A2(
						_1602$json_schema$Json_Schema_Builder$withAdditionalProperties,
						_1602$json_schema$Json_Schema_Builder$boolSchema(false),
						A2(
							_1602$json_schema$Json_Schema_Builder$withProperties,
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'firstName',
									_1: A2(
										_1602$json_schema$Json_Schema_Builder$withMinLength,
										2,
										A2(
											_1602$json_schema$Json_Schema_Builder$withDescription,
											'First (given) name of a travelling person',
											A2(
												_1602$json_schema$Json_Schema_Builder$withTitle,
												'First name',
												A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema))))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'middleName',
										_1: A2(
											_1602$json_schema$Json_Schema_Builder$withTitle,
											'Middle name',
											A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema))
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'lastName',
											_1: A2(
												_1602$json_schema$Json_Schema_Builder$withDescription,
												'Last (family) name of a travelling person',
												A2(
													_1602$json_schema$Json_Schema_Builder$withTitle,
													'Last name',
													A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema)))
										},
										_1: {ctor: '[]'}
									}
								}
							},
							A2(_1602$json_schema$Json_Schema_Builder$withType, 'object', _1602$json_schema$Json_Schema_Builder$buildSchema)))));
		case 'LoginForm':
			return A2(
				_elm_lang$core$Result$withDefault,
				_1602$json_schema$Json_Schema_Definitions$blankSchema,
				_1602$json_schema$Json_Schema_Builder$toSchema(
					A2(
						_1602$json_schema$Json_Schema_Builder$withAdditionalProperties,
						_1602$json_schema$Json_Schema_Builder$boolSchema(false),
						A2(
							_1602$json_schema$Json_Schema_Builder$withProperties,
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'email',
									_1: A2(
										_1602$json_schema$Json_Schema_Builder$withMinLength,
										2,
										A2(
											_1602$json_schema$Json_Schema_Builder$withTitle,
											'Email',
											A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema)))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'password',
										_1: A3(
											_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
											'ui',
											_elm_lang$core$Json_Encode$object(
												{
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'widget',
														_1: _elm_lang$core$Json_Encode$string('password')
													},
													_1: {ctor: '[]'}
												}),
											A2(
												_1602$json_schema$Json_Schema_Builder$withDescription,
												'Must contain enough various symbols',
												A2(
													_1602$json_schema$Json_Schema_Builder$withTitle,
													'Password',
													A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema))))
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'remember',
											_1: A3(
												_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
												'ui',
												_elm_lang$core$Json_Encode$object(
													{
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'widget',
															_1: _elm_lang$core$Json_Encode$string('checkbox')
														},
														_1: {ctor: '[]'}
													}),
												A2(
													_1602$json_schema$Json_Schema_Builder$withDescription,
													'This will keep you logged in for another 2 weeks',
													A2(
														_1602$json_schema$Json_Schema_Builder$withTitle,
														'remember me',
														A2(_1602$json_schema$Json_Schema_Builder$withType, 'boolean', _1602$json_schema$Json_Schema_Builder$buildSchema))))
										},
										_1: {ctor: '[]'}
									}
								}
							},
							A2(_1602$json_schema$Json_Schema_Builder$withType, 'object', _1602$json_schema$Json_Schema_Builder$buildSchema)))));
		case 'Rules':
			return A2(
				_elm_lang$core$Result$withDefault,
				_1602$json_schema$Json_Schema_Definitions$blankSchema,
				_1602$json_schema$Json_Schema_Builder$toSchema(
					A2(
						_1602$json_schema$Json_Schema_Builder$withProperties,
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'enabled',
								_1: A3(
									_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
									'ui',
									_elm_lang$core$Json_Encode$object(
										{
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'widget',
												_1: _elm_lang$core$Json_Encode$string('switch')
											},
											_1: {ctor: '[]'}
										}),
									A2(
										_1602$json_schema$Json_Schema_Builder$withDescription,
										'Enable editing',
										A2(
											_1602$json_schema$Json_Schema_Builder$withTitle,
											'enable',
											A2(_1602$json_schema$Json_Schema_Builder$withType, 'boolean', _1602$json_schema$Json_Schema_Builder$buildSchema))))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'form',
									_1: A2(
										_1602$json_schema$Json_Schema_Builder$withProperties,
										{
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'disableDemo',
												_1: A3(
													_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
													'ui',
													_elm_lang$core$Json_Encode$object(
														{
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'rule',
																_1: _elm_lang$core$Json_Encode$object(
																	{
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'action',
																			_1: _elm_lang$core$Json_Encode$string('disable')
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'path',
																				_1: _elm_lang$core$Json_Encode$list(
																					{
																						ctor: '::',
																						_0: _elm_lang$core$Json_Encode$string('enabled'),
																						_1: {ctor: '[]'}
																					})
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'condition',
																					_1: _elm_lang$core$Json_Encode$object(
																						{
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: 'const',
																								_1: _elm_lang$core$Json_Encode$bool(false)
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'default',
																									_1: _elm_lang$core$Json_Encode$bool(false)
																								},
																								_1: {ctor: '[]'}
																							}
																						})
																				},
																				_1: {ctor: '[]'}
																			}
																		}
																	})
															},
															_1: {ctor: '[]'}
														}),
													A2(
														_1602$json_schema$Json_Schema_Builder$withDescription,
														'This field will be enabled when switch turned on',
														A2(
															_1602$json_schema$Json_Schema_Builder$withType,
															'string',
															A2(_1602$json_schema$Json_Schema_Builder$withTitle, 'Rule: disable', _1602$json_schema$Json_Schema_Builder$buildSchema))))
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'hideDemo',
													_1: A3(
														_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
														'ui',
														_elm_lang$core$Json_Encode$object(
															{
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'rule',
																	_1: _elm_lang$core$Json_Encode$object(
																		{
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'action',
																				_1: _elm_lang$core$Json_Encode$string('hide')
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'path',
																					_1: _elm_lang$core$Json_Encode$list(
																						{
																							ctor: '::',
																							_0: _elm_lang$core$Json_Encode$string('enabled'),
																							_1: {ctor: '[]'}
																						})
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'condition',
																						_1: _elm_lang$core$Json_Encode$object(
																							{
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'const',
																									_1: _elm_lang$core$Json_Encode$bool(false)
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: 'default',
																										_1: _elm_lang$core$Json_Encode$bool(false)
																									},
																									_1: {ctor: '[]'}
																								}
																							})
																					},
																					_1: {ctor: '[]'}
																				}
																			}
																		})
																},
																_1: {ctor: '[]'}
															}),
														A2(
															_1602$json_schema$Json_Schema_Builder$withDescription,
															'This field will be shown when switch turned on',
															A2(
																_1602$json_schema$Json_Schema_Builder$withType,
																'string',
																A2(_1602$json_schema$Json_Schema_Builder$withTitle, 'Rule: hide', _1602$json_schema$Json_Schema_Builder$buildSchema))))
												},
												_1: {ctor: '[]'}
											}
										},
										A2(_1602$json_schema$Json_Schema_Builder$withType, 'object', _1602$json_schema$Json_Schema_Builder$buildSchema))
								},
								_1: {ctor: '[]'}
							}
						},
						A2(_1602$json_schema$Json_Schema_Builder$withType, 'object', _1602$json_schema$Json_Schema_Builder$buildSchema))));
		default:
			return A2(
				_elm_lang$core$Result$withDefault,
				_1602$json_schema$Json_Schema_Definitions$blankSchema,
				_1602$json_schema$Json_Schema_Builder$toSchema(
					A2(
						_1602$json_schema$Json_Schema_Builder$withAdditionalProperties,
						_1602$json_schema$Json_Schema_Builder$boolSchema(false),
						A2(
							_1602$json_schema$Json_Schema_Builder$withProperties,
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'pan',
									_1: A2(
										_1602$json_schema$Json_Schema_Builder$withMaxLength,
										17,
										A2(
											_1602$json_schema$Json_Schema_Builder$withMinLength,
											10,
											A2(
												_1602$json_schema$Json_Schema_Builder$withDescription,
												'A card number. When not provided, this will be generated in the background',
												A2(
													_1602$json_schema$Json_Schema_Builder$withTitle,
													'Card Number',
													A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema)))))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'airlineCode',
										_1: A2(
											_1602$json_schema$Json_Schema_Builder$withMaxLength,
											2,
											A2(
												_1602$json_schema$Json_Schema_Builder$withMinLength,
												2,
												A2(
													_1602$json_schema$Json_Schema_Builder$withDescription,
													'Two letter IATA airline code',
													A2(
														_1602$json_schema$Json_Schema_Builder$withTitle,
														'Airline Code',
														A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema)))))
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'return',
											_1: A3(
												_1602$json_schema$Json_Schema_Builder$withCustomKeyword,
												'ui',
												_elm_lang$core$Json_Encode$object(
													{
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'widget',
															_1: _elm_lang$core$Json_Encode$string('switch')
														},
														_1: {ctor: '[]'}
													}),
												A2(
													_1602$json_schema$Json_Schema_Builder$withDescription,
													'One way or return flight',
													A2(
														_1602$json_schema$Json_Schema_Builder$withTitle,
														'Return',
														A2(_1602$json_schema$Json_Schema_Builder$withType, 'boolean', _1602$json_schema$Json_Schema_Builder$buildSchema))))
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'flightType',
												_1: A2(
													_1602$json_schema$Json_Schema_Builder$withDefault,
													_elm_lang$core$Json_Encode$string('any'),
													A2(
														_1602$json_schema$Json_Schema_Builder$withEnum,
														{
															ctor: '::',
															_0: _elm_lang$core$Json_Encode$string('domestic'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Json_Encode$string('international'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Json_Encode$string('any'),
																	_1: {ctor: '[]'}
																}
															}
														},
														A2(
															_1602$json_schema$Json_Schema_Builder$withDescription,
															'Flight type is one of any/international/domestic',
															A2(
																_1602$json_schema$Json_Schema_Builder$withTitle,
																'Flight Type',
																A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema)))))
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'cabinClass',
													_1: A2(
														_1602$json_schema$Json_Schema_Builder$withEnum,
														{
															ctor: '::',
															_0: _elm_lang$core$Json_Encode$string('economy'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Json_Encode$string('premium economy'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Json_Encode$string('business'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Json_Encode$string('first'),
																		_1: {ctor: '[]'}
																	}
																}
															}
														},
														A2(
															_1602$json_schema$Json_Schema_Builder$withDescription,
															'Specify a cabin class. One of economy/premium economy/business/first',
															A2(
																_1602$json_schema$Json_Schema_Builder$withTitle,
																'Cabin Class',
																A2(_1602$json_schema$Json_Schema_Builder$withType, 'string', _1602$json_schema$Json_Schema_Builder$buildSchema))))
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'earliestOffset',
														_1: A2(
															_1602$json_schema$Json_Schema_Builder$withMinimum,
															0,
															A2(
																_1602$json_schema$Json_Schema_Builder$withDescription,
																'Minutes before the first outbound flight may be chosen from the time of endpoint call',
																A2(
																	_1602$json_schema$Json_Schema_Builder$withTitle,
																	'Earliest Offset',
																	A2(_1602$json_schema$Json_Schema_Builder$withType, 'number', _1602$json_schema$Json_Schema_Builder$buildSchema))))
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'latestOffset',
															_1: A2(
																_1602$json_schema$Json_Schema_Builder$withMinimum,
																0,
																A2(
																	_1602$json_schema$Json_Schema_Builder$withDescription,
																	'Minutes after the earliest offset that the last outbound flight may be chosen',
																	A2(
																		_1602$json_schema$Json_Schema_Builder$withTitle,
																		'Latest Offset',
																		A2(_1602$json_schema$Json_Schema_Builder$withType, 'number', _1602$json_schema$Json_Schema_Builder$buildSchema))))
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'minPassengers',
																_1: A2(
																	_1602$json_schema$Json_Schema_Builder$withMinimum,
																	0,
																	A2(
																		_1602$json_schema$Json_Schema_Builder$withDescription,
																		'No less than specified number of passengers will be generated',
																		A2(
																			_1602$json_schema$Json_Schema_Builder$withTitle,
																			'Minimum Passengers',
																			A2(_1602$json_schema$Json_Schema_Builder$withType, 'number', _1602$json_schema$Json_Schema_Builder$buildSchema))))
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'maxPassengers',
																	_1: A2(
																		_1602$json_schema$Json_Schema_Builder$withMinimum,
																		0,
																		A2(
																			_1602$json_schema$Json_Schema_Builder$withDescription,
																			'No more than specified number of passengers will be generated',
																			A2(
																				_1602$json_schema$Json_Schema_Builder$withTitle,
																				'Maximum Passengers',
																				A2(_1602$json_schema$Json_Schema_Builder$withType, 'number', _1602$json_schema$Json_Schema_Builder$buildSchema))))
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							},
							A2(
								_1602$json_schema$Json_Schema_Builder$withRequired,
								{
									ctor: '::',
									_0: 'airlineCode',
									_1: {ctor: '[]'}
								},
								A2(_1602$json_schema$Json_Schema_Builder$withType, 'object', _1602$json_schema$Json_Schema_Builder$buildSchema))))));
	}
};
var _1602$json_form$Snippets$getSnippetTitle = function (ds) {
	var _p1 = ds;
	switch (_p1.ctor) {
		case 'SimpleField':
			return 'Simple Text Field';
		case 'FlatObject':
			return 'Flat Object';
		case 'LoginForm':
			return 'Login Form';
		case 'Rules':
			return 'Rules';
		default:
			return 'Flight Booking';
	}
};
var _1602$json_form$Snippets$FlightBooking = {ctor: 'FlightBooking'};
var _1602$json_form$Snippets$Rules = {ctor: 'Rules'};
var _1602$json_form$Snippets$LoginForm = {ctor: 'LoginForm'};
var _1602$json_form$Snippets$FlatObject = {ctor: 'FlatObject'};
var _1602$json_form$Snippets$SimpleField = {ctor: 'SimpleField'};
var _1602$json_form$Snippets$index = {
	ctor: '::',
	_0: _1602$json_form$Snippets$SimpleField,
	_1: {
		ctor: '::',
		_0: _1602$json_form$Snippets$FlatObject,
		_1: {
			ctor: '::',
			_0: _1602$json_form$Snippets$LoginForm,
			_1: {
				ctor: '::',
				_0: _1602$json_form$Snippets$Rules,
				_1: {
					ctor: '::',
					_0: _1602$json_form$Snippets$FlightBooking,
					_1: {ctor: '[]'}
				}
			}
		}
	}
};

var _1602$json_form$Demo$initialShowcase = _1602$json_form$Snippets$Rules;
var _1602$json_form$Demo$init = A2(
	_elm_lang$core$Platform_Cmd_ops['!'],
	{
		showcase: _1602$json_form$Demo$initialShowcase,
		form: A2(
			_1602$json_form$Json_Form$init,
			_1602$json_form$Snippets$getSnippet(_1602$json_form$Demo$initialShowcase),
			_elm_lang$core$Maybe$Nothing),
		editedValue: _elm_lang$core$Maybe$Nothing,
		expandedNodes: {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});
var _1602$json_form$Demo$Model = F4(
	function (a, b, c, d) {
		return {showcase: a, form: b, editedValue: c, expandedNodes: d};
	});
var _1602$json_form$Demo$ToggleNode = function (a) {
	return {ctor: 'ToggleNode', _0: a};
};
var _1602$json_form$Demo$JsonFormMsg = function (a) {
	return {ctor: 'JsonFormMsg', _0: a};
};
var _1602$json_form$Demo$update = F2(
	function (message, model) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'JsonFormMsg':
				var _p1 = A2(_1602$json_form$Json_Form$update, _p0._0, model.form);
				var m = _p1._0._0;
				var cmd = _p1._0._1;
				var exMsg = _p1._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							form: m,
							editedValue: function () {
								var _p2 = exMsg;
								if (_p2.ctor === 'UpdateValue') {
									return _p2._0;
								} else {
									return model.editedValue;
								}
							}()
						}),
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Platform_Cmd$map, _1602$json_form$Demo$JsonFormMsg, cmd),
						_1: {ctor: '[]'}
					});
			case 'ToggleNode':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							expandedNodes: A2(_1602$json_form$JsonViewer$toggle, _p0._0, model.expandedNodes)
						}),
					{ctor: '[]'});
			default:
				var _p3 = _p0._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							showcase: _p3,
							form: A2(
								_1602$json_form$Json_Form$init,
								_1602$json_form$Snippets$getSnippet(_p3),
								_elm_lang$core$Maybe$Nothing),
							editedValue: _elm_lang$core$Maybe$Nothing
						}),
					{ctor: '[]'});
		}
	});
var _1602$json_form$Demo$content = function (model) {
	var generatedForm = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'width', _1: '50%'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'min-width', _1: '300px'},
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$map,
				_1602$json_form$Demo$JsonFormMsg,
				_1602$json_form$Json_Form$view(model.form)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h4,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Result'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$html$Html$text(''),
						A2(
							_elm_lang$core$Maybe$map,
							A2(
								_1602$json_form$JsonViewer$view,
								{expandedNodes: model.expandedNodes, onToggle: _1602$json_form$Demo$ToggleNode},
								{ctor: '[]'}),
							model.editedValue)),
					_1: {ctor: '[]'}
				}
			}
		});
	var jsonSchema = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'width', _1: '50%'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'vertical-align', _1: 'top'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'min-width', _1: '300px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'max-width', _1: '80ch'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'auto'},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h4,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('JSON Schema'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$pre,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'line-height', _1: '1.3'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Json_Encode$encode,
								4,
								_1602$json_schema$Json_Schema_Definitions$encode(
									_1602$json_form$Snippets$getSnippet(model.showcase)))),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('app-content'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h3,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding', _1: '8px'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'border-bottom', _1: '1px solid #e8e8e8'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Showcase: ',
							_1602$json_form$Snippets$getSnippetTitle(model.showcase))),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: generatedForm,
						_1: {
							ctor: '::',
							_0: jsonSchema,
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _1602$json_form$Demo$SetShowcase = function (a) {
	return {ctor: 'SetShowcase', _0: a};
};
var _1602$json_form$Demo$snippetTab = F2(
	function (activeSnippet, snippet) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'tab', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'tab--active',
								_1: _elm_lang$core$Native_Utils.eq(snippet, activeSnippet)
							},
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_1602$json_form$Demo$SetShowcase(snippet)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					_1602$json_form$Snippets$getSnippetTitle(snippet)),
				_1: {ctor: '[]'}
			});
	});
var _1602$json_form$Demo$topbar = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('app-topbar'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			_1602$json_form$Demo$snippetTab(model.showcase),
			_1602$json_form$Snippets$index));
};
var _1602$json_form$Demo$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _1602$json_form$Demo$topbar(model),
			_1: {
				ctor: '::',
				_0: _1602$json_form$Demo$content(model),
				_1: {ctor: '[]'}
			}
		});
};

var _1602$json_form$Main$main = _elm_lang$html$Html$program(
	{
		init: _1602$json_form$Demo$init,
		update: _1602$json_form$Demo$update,
		view: _1602$json_form$Demo$view,
		subscriptions: function (_p0) {
			return _elm_lang$core$Platform_Sub$none;
		}
	})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _1602$json_form$Main$main !== 'undefined') {
    _1602$json_form$Main$main(Elm['Main'], 'Main', undefined);
}



//////////////////// HMR BEGIN ////////////////////
var _elm_hot_loader_init = function () {}
if (false) {
  (function(Elm) {
    "use strict";

    var version = detectElmVersion()
    console.log('[elm-hot] Elm version:', version)

    if (version === '0.17') {
      throw new Error('[elm-hot] Please use elm-hot-loader@0.4.x')
    } else if (version !== '0.18') {
      throw new Error('[elm-hot] Elm version not supported.')
    }
        
    //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
    if (typeof Object.assign != 'function') {
      Object.assign = function(target) {
        'use strict';
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
    
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source != null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }

    var instances = module.hot.data
      ? module.hot.data.instances || {}
      : {};
    var uid = module.hot.data
      ? module.hot.data.uid || 0
      : 0;

    var cancellers = [];

    var initializingInstance = null, swappingInstance = null;

    module.hot.accept();
    module.hot.dispose(function(data) {
      data.instances = instances;
      data.uid = uid;

      // disable current instance
      _elm_lang$core$Native_Scheduler.nativeBinding = function() {
        return _elm_lang$core$Native_Scheduler.fail(new Error('[elm-hot] Inactive Elm instance.'))
      }

      if (cancellers.length) {
        console.log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
        try {
          cancellers.forEach(function (cancel) {
            cancel();
          });
        } catch (e) {
          console.warn('[elm-hot] Kill process error: ' + e.message);
        }
      }
    });

    function getId() {
      return ++uid;
    }

    function detectElmVersion() {
      try {
        if (_elm_lang$core$Native_Platform.initialize) {
          return '0.18'
        }
      } catch (_) {}

      try {
        // 0.17 function programWithFlags(details)
        if (_elm_lang$virtual_dom$VirtualDom$programWithFlags.length === 1) {
          return '0.17'
        }
      } catch (_) {}

      return 'unknown'
    }

    function findPublicModules(parent, path) {
      var modules = [];
      for (var key in parent) {
        var child = parent[key];
        var currentPath = path ? path + '.' + key : key;
        if ('fullscreen' in child) {
          modules.push({
            path: currentPath,
            module: child
          });
        } else {
          modules = modules.concat(findPublicModules(child, currentPath));
        }
      }
      return modules;
    }

    function getPublicModule(Elm, path) {
      var parts = path.split('.');
      var parent = Elm;
      for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        if (part in parent) {
          parent = parent[part]
        }
        if (!parent) {
          return null;
        }
      }
      return parent
    }

    function registerInstance(domNode, flags, path, portSubscribes) {
      var id = getId();

      var instance = {
        id: id,
        path: path,
        domNode: domNode,
        flags: flags,
        portSubscribes: portSubscribes,
        elmProxy: null,
        lastState: null, // last elm app state
        callbacks: []
      }

      instance.subscribe = function (cb) {
        instance.callbacks.push(cb)
        return function () {
          instance.callbacks.splice(instance.callbacks.indexOf(cb), 1)
        }
      }

      instance.dispatch = function (event) {
        instance.callbacks.forEach(function (cb) {
          cb(event, {
            flags: instance.flags,
            state: '_0' in instance.lastState 
              ? instance.lastState._0 //debugger state
              : instance.lastState //normal state
          })
        })
      }

      return instances[id] = instance
    }

    function wrapPublicModule(path, module) {
      var embed = module.embed;
      var fullscreen = module.fullscreen;
      module.embed = function(domNode, flags) {
        var elm;
        var portSubscribes = {};
        initializingInstance = registerInstance(domNode, flags, path, portSubscribes)        
        elm = embed(domNode, flags);
        wrapPorts(elm, portSubscribes)
        elm = initializingInstance.elmProxy = {
          ports: elm.ports,
          hot: {
            subscribe: initializingInstance.subscribe
          }
        };
        initializingInstance = null;
        return elm;
      };

      module.fullscreen = function (flags) {
        var elm
        var portSubscribes = {};
        initializingInstance = registerInstance(document.body, flags, path, portSubscribes)        
        elm = fullscreen(flags);
        wrapPorts(elm, portSubscribes)
        elm = initializingInstance.elmProxy = {
          ports: elm.ports,
          hot: {
            subscribe: initializingInstance.subscribe
          }
        };
        initializingInstance = null;
        return elm;
      }
    }

    function swap(Elm, instance) {
      console.log('[elm-hot] Hot-swapping module: ' + instance.path)

      swappingInstance = instance;

      var domNode = instance.domNode;

      while (domNode.lastChild) {
        domNode.removeChild(domNode.lastChild);
      }

      var m = getPublicModule(Elm, instance.path)
      var elm;
      if (m) {
        instance.dispatch('swap')

        var flags = instance.flags
        if (instance.isFullscreen) {
          elm = m.fullscreen(flags);
        } else {
          elm = m.embed(domNode, flags);
        }

        instance.elmProxy.ports = elm.ports;

        Object.keys(instance.portSubscribes).forEach(function(portName) {
          if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
            var handlers = instance.portSubscribes[portName];
            if (!handlers.length) {
              return;
            }
            console.log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \'' + portName + '\' (' + instance.path + ').');
            handlers.forEach(function(handler) {
              elm.ports[portName].subscribe(handler);
            });
          } else {
            delete instance.portSubscribes[portName];
            console.log('[elm-hot] Port was removed: ' + portName);
          }
        });
      } else {
        console.log('[elm-hot] Module was removed: ' + instance.path);
      }

      swappingInstance = null;
    }

    function wrapPorts(elm, portSubscribes) {
      var portNames = Object.keys(elm.ports || {});
      //hook ports
      if (portNames.length) {
        portNames
          .filter(function(name) {
            return 'subscribe' in elm.ports[name];
          })
          .forEach(function(portName) {
            var port = elm.ports[portName];
            var subscribe = port.subscribe;
            var unsubscribe = port.unsubscribe;
            elm.ports[portName] = Object.assign(port, {
              subscribe: function(handler) {
                console.log('[elm-hot] ports.' + portName + '.subscribe called.');
                if (!portSubscribes[portName]) {
                  portSubscribes[portName] = [ handler ];
                } else {
                  //TODO handle subscribing to single handler more than once?
                  portSubscribes[portName].push(handler);
                }
                return subscribe.call(port, handler);
              },
              unsubscribe: function(handler) {
                console.log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                var list = portSubscribes[portName];
                if (list && list.indexOf(handler) !== -1) {
                  list.splice(list.lastIndexOf(handler), 1);
                } else {
                  console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                }
                return unsubscribe.call(port, handler);
              }
            });
          });
      }
      return portSubscribes;
    }

    // hook program creation
    var initialize = _elm_lang$core$Native_Platform.initialize
    _elm_lang$core$Native_Platform.initialize = function (stateTuple, update, view, renderer) {
      var instance = initializingInstance
      var swapping = swappingInstance
      var tryFirstRender = !!swappingInstance
      var isInitialRender = true


      var debuggerEnabled = isDebuggerState(stateTuple._0)
      if (swappingInstance) {
        if (debuggerEnabled) {
          stateTuple._0.state = swappingInstance.lastState
        } else {
          stateTuple._0 = swappingInstance.lastState
        }
      }
      return initialize(stateTuple, update, function (model) {
        var result;
        // first render may fail if shape of model changed too much
        if (tryFirstRender) {
          tryFirstRender = false
          try {
            result = view(model)
          } catch (e) {
            throw new Error('[elm-hot] Hot-swapping is not possible, please reload page. Error: ' + e.message)
          }
        } else {
          result = view(model)
        }
        if (instance) {
          if (isDebuggerState(model)) {
            instance.lastState = model.state
          } else {
            instance.lastState = model
          }
        } else {
          instance = swapping
        }
        isInitialRender = false
        return result
      }, renderer)

      function isDebuggerState(state) {
        return state && typeof state === 'object' && typeof state.isDebuggerOpen === 'boolean' && 'state' in state
      }
    }

    // hook process creation
    var nativeBinding = _elm_lang$core$Native_Scheduler.nativeBinding
    _elm_lang$core$Native_Scheduler.nativeBinding = function() {
      var def = nativeBinding.apply(this, arguments);
      var callback = def.callback
      def.callback = function() {
        var result = callback.apply(this, arguments)
        if (result) {
          cancellers.push(result);
          return function() {
            cancellers.splice(cancellers.indexOf(result), 1);
            return result();
          };
        }
        return result;
      };
      return def;
    };

    _elm_hot_loader_init = function (Elm) {
      // swap instances
      var removedInstances = [];
      for (var id in instances) {
        var instance = instances[id]
        if (instance.domNode.parentNode) {
          swap(Elm, instance);
        } else {
          removedInstances.push(id);
        }
      }

      removedInstances.forEach(function (id) {
        delete instance[id];
      });

      // wrap all public modules
      var publicModules = findPublicModules(Elm);
      publicModules.forEach(function (m) {
        wrapPublicModule(m.path, m.module);
      });
    }
  })(Elm);
}
//////////////////// HMR END ////////////////////


_elm_hot_loader_init(Elm)

if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() { return Elm; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  return;
}

if (true)
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);



/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('hello from here');
__webpack_require__("./stylesheets/index.css");

const Elm = __webpack_require__("./src/Main.elm");

Elm.Main.fullscreen();

/***/ }),

/***/ "./stylesheets/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./stylesheets/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });
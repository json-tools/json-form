*This is work in progress*

# json-form

This module generates form based on JSON Schema, its keywords are documented in this spec: http://json-schema.org/latest/json-schema-validation.html. It focuses on simplicity rather than completeness of JSON Schema spec coverage. For example, we don't try to guess style of `oneOf`.

View demo: https://json-tools.github.io/json-form/

Development progress:

- [x] text editing
- [x] flat object editing
- [x] validation (inline errors only, so far)
- [x] material design styles
- [x] demo for two use-cases: text editing, flat object editing
- [x] editing of number and boolean
- [x] customizable widgets (extending json schema with ui schema)
- [x] password field
- [x] mark required fields with *
- [x] basic array editing capabilities
- [x] rules to disable or hide form elements based on conditions
- [x] multiline editing
- [x] editing as json
- [x] dealing with `undefined` (erase optional property)
- [x] editing array of items
- [x] html5 autocomplete for enum

Next steps will be some of those (not necessarily in this order):

- [ ] expandable mode for large/nested forms
- [ ] form layout customisation
- [ ] custom widgets api (e.g. range)
- [ ] radiogroup widget for enum
- [ ] optional field indication (configurable alternative to required)
- [ ] editing dictionary (object with additionalItems = true)
- [ ] display of object-level errors

## Development

### Installation

This module uses `create-elm-app` in order to not clutter project with unrelated dependencies.

```
npm install -g create-elm-app
```

### Local development server

You may want to run local dev server to facilitate hot module reloading.

```
elm-app start
```

### Build and deploy demo to github pages

```
elm-app build
gh-pages -d build
```

## Design approach

### JSON Schema

A few notes on how json schema interpeted by form generator.

#### Types

For the sake of simpliticy form generator uses a "type" keyword of JSON Schema in order to identify type of the field. When "type" keyword is an array or types or missing then value edited as json string. Boolean renders toggle, but can be customized to render a checkbox.

#### Title

Title rendered as label for terminal input fields (leaf nodes of the value), and as h3 headers for objects.

#### Required

Keyword `required` of object type used to identify whether to display * near the label. Optional text fields also have button to erase value displayed.



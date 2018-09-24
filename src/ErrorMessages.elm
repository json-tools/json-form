module ErrorMessages exposing (stringifyError)

import Json.Encode as Encode
import Json.Schema.Validation as Validation exposing (ValidationError(..))


pluralize : Int -> String -> String
pluralize n name =
    case n of
        1 ->
            "1 " ++ name

        _ ->
            String.fromInt n ++ " " ++ name ++ "s"


stringifyError : Validation.ValidationError -> String
stringifyError e =
    case e of
        MultipleOf multiplier actual ->
            String.fromFloat actual
                ++ " is not a multiple of "
                ++ String.fromFloat multiplier

        Maximum max actual ->
            String.fromFloat actual ++ " is more than maximum " ++ String.fromFloat max

        Minimum min actual ->
            String.fromFloat actual ++ " is less than minimum " ++ String.fromFloat min

        ExclusiveMaximum max actual ->
            String.fromFloat actual ++ " is not less than exclusive maximum " ++ String.fromFloat max

        ExclusiveMinimum min actual ->
            String.fromFloat actual ++ " is not more than exclusive minimum " ++ String.fromFloat min

        MaxLength expected actual ->
            "Not longer than "
                ++ pluralize expected "character"
                ++ " but actual length is "
                ++ pluralize actual "character"

        MinLength expected actual ->
            "Less than "
                ++ pluralize expected "character"
                ++ " long"

        Pattern pattern string ->
            "Does not match pattern " ++ pattern

        MaxItems expected actual ->
            "List expected to have at most "
                ++ pluralize expected "item"
                ++ " but it has "
                ++ pluralize actual "item"

        MinItems expected actual ->
            "List expected to have at least "
                ++ pluralize expected "item"
                ++ " but it has "
                ++ pluralize actual "item"

        UniqueItems x ->
            "Expected array of unique items, but a duplicate found: " ++ Encode.encode 0 x

        Contains ->
            "None of array items is valid against the given schema"

        MaxProperties expected actual ->
            "MaxProperties"

        MinProperties expected actual ->
            "MinProperties"

        RequiredProperty ->
            "This property is required"

        Required missingPropertyNames ->
            ""

        AdditionalPropertyDisallowed ->
            "This is an additional property and it is not allowed"

        AdditionalPropertiesDisallowed extraPropertyNames ->
            ""

        {-
           "Additional properties are not allowed here, but I see "
               ++ (extraPropertyNames |> List.map toString |> String.join ", ")
        -}
        InvalidPropertyName invalidPropertyNames ->
            "Some property names are not passing validation"

        Enum ->
            "Value does not match enumeration defined in the schema"

        Const ->
            "Value does not match const defined in the schema"

        InvalidType s ->
            s

        OneOfNoneSucceed ->
            "Value does not pass the validation with none of the schemata listed in '.oneOf'"

        OneOfManySucceed int ->
            "Value should pass validation with exactly one schema, but " ++ String.fromInt int ++ " return a positive result"

        Not ->
            "This value expected to fail validation"

        AlwaysFail ->
            "This is not expected to succeed"

        UnresolvableReference ref ->
            "Reference " ++ ref ++ " can not be resolved"

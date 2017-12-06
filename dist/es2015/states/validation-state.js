export var ValidationState;
(function (ValidationState) {
    ValidationState[ValidationState["unknown"] = 0] = "unknown";
    ValidationState[ValidationState["valid"] = 1] = "valid";
    ValidationState[ValidationState["invalid"] = 2] = "invalid";
})(ValidationState || (ValidationState = {}));

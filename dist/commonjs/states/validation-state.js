"use strict";
(function (ValidationState) {
    ValidationState[ValidationState["unknown"] = 0] = "unknown";
    ValidationState[ValidationState["valid"] = 1] = "valid";
    ValidationState[ValidationState["invalid"] = 2] = "invalid";
})(exports.ValidationState || (exports.ValidationState = {}));
var ValidationState = exports.ValidationState;

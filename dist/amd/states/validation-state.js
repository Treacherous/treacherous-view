define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationState;
    (function (ValidationState) {
        ValidationState[ValidationState["unknown"] = 0] = "unknown";
        ValidationState[ValidationState["valid"] = 1] = "valid";
        ValidationState[ValidationState["invalid"] = 2] = "invalid";
    })(ValidationState = exports.ValidationState || (exports.ValidationState = {}));
});

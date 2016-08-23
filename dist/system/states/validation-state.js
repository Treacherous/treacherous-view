System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidationState;
    return {
        setters:[],
        execute: function() {
            (function (ValidationState) {
                ValidationState[ValidationState["unknown"] = 0] = "unknown";
                ValidationState[ValidationState["valid"] = 1] = "valid";
                ValidationState[ValidationState["invalid"] = 2] = "invalid";
            })(ValidationState || (ValidationState = {}));
            exports_1("ValidationState", ValidationState);
        }
    }
});

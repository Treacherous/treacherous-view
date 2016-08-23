System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubmitTrigger;
    return {
        setters:[],
        execute: function() {
            SubmitTrigger = (function () {
                function SubmitTrigger() {
                    this.triggerName = "submit";
                    this.applyTrigger = function (element, callback) {
                        var formElement = element["form"];
                        if (!formElement) {
                            throw new Error("No form attached to " + element + " for submission trigger");
                        }
                        formElement.addEventListener("submit", callback);
                        return function () { formElement.removeEventListener("submit", callback); };
                    };
                }
                return SubmitTrigger;
            }());
            exports_1("SubmitTrigger", SubmitTrigger);
        }
    }
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var SubmitTrigger = (function () {
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
    exports.SubmitTrigger = SubmitTrigger;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChangeTrigger = (function () {
        function ChangeTrigger() {
            this.triggerName = "change";
            this.applyTrigger = function (element, callback) {
                element.addEventListener("change", callback);
                return function () { element.removeEventListener("change", callback); };
            };
        }
        return ChangeTrigger;
    }());
    exports.ChangeTrigger = ChangeTrigger;
});

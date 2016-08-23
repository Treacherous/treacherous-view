define(["require", "exports"], function (require, exports) {
    "use strict";
    var KeyUpTrigger = (function () {
        function KeyUpTrigger() {
            this.triggerName = "keyup";
            this.applyTrigger = function (element, callback) {
                element.addEventListener("keyup", callback);
                return function () { element.removeEventListener("keyup", callback); };
            };
        }
        return KeyUpTrigger;
    }());
    exports.KeyUpTrigger = KeyUpTrigger;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var BlurTrigger = (function () {
        function BlurTrigger() {
            this.triggerName = "blur";
            this.applyTrigger = function (element, callback) {
                element.addEventListener("blur", callback);
                return function () { element.removeEventListener("blur", callback); };
            };
        }
        return BlurTrigger;
    }());
    exports.BlurTrigger = BlurTrigger;
});

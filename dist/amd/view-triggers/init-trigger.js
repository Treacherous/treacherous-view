define(["require", "exports"], function (require, exports) {
    "use strict";
    var InitTrigger = (function () {
        function InitTrigger() {
            this.triggerName = "init";
            this.applyTrigger = function (element, callback) {
                callback();
                return function () { };
            };
        }
        return InitTrigger;
    }());
    exports.InitTrigger = InitTrigger;
});

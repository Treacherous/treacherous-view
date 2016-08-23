define(["require", "exports"], function (require, exports) {
    "use strict";
    var IntervalTrigger = (function () {
        function IntervalTrigger() {
            this.triggerName = "interval";
            this.applyTrigger = function (element, callback, args) {
                var intervalReference;
                if (!args.onlyWhenFocused) {
                    intervalReference = setInterval(callback, args.interval);
                    return function () { clearInterval(intervalReference); };
                }
                var listenerForFocus = function () { intervalReference = setInterval(callback, args.interval); };
                var listenerForBlur = function () { clearInterval(intervalReference); };
                element.addEventListener("focus", listenerForFocus);
                element.addEventListener("blur", listenerForBlur);
                return function () {
                    element.removeEventListener("focus", listenerForFocus);
                    element.removeEventListener("blur", listenerForBlur);
                    if (intervalReference) {
                        clearInterval(intervalReference);
                    }
                };
            };
        }
        return IntervalTrigger;
    }());
    exports.IntervalTrigger = IntervalTrigger;
});

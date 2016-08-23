System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KeyUpTrigger;
    return {
        setters:[],
        execute: function() {
            KeyUpTrigger = (function () {
                function KeyUpTrigger() {
                    this.triggerName = "keyup";
                    this.applyTrigger = function (element, callback) {
                        element.addEventListener("keyup", callback);
                        return function () { element.removeEventListener("keyup", callback); };
                    };
                }
                return KeyUpTrigger;
            }());
            exports_1("KeyUpTrigger", KeyUpTrigger);
        }
    }
});

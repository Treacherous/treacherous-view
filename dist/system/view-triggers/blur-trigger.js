System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BlurTrigger;
    return {
        setters:[],
        execute: function() {
            BlurTrigger = (function () {
                function BlurTrigger() {
                    this.triggerName = "blur";
                    this.applyTrigger = function (element, callback) {
                        element.addEventListener("blur", callback);
                        return function () { element.removeEventListener("blur", callback); };
                    };
                }
                return BlurTrigger;
            }());
            exports_1("BlurTrigger", BlurTrigger);
        }
    }
});

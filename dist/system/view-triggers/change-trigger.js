System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChangeTrigger;
    return {
        setters:[],
        execute: function() {
            ChangeTrigger = (function () {
                function ChangeTrigger() {
                    this.triggerName = "change";
                    this.applyTrigger = function (element, callback) {
                        element.addEventListener("change", callback);
                        return function () { element.removeEventListener("change", callback); };
                    };
                }
                return ChangeTrigger;
            }());
            exports_1("ChangeTrigger", ChangeTrigger);
        }
    }
});

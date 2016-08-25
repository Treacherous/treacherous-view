System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DOMEventTrigger;
    return {
        setters:[],
        execute: function() {
            DOMEventTrigger = (function () {
                function DOMEventTrigger(eventName) {
                    var _this = this;
                    this.eventName = eventName;
                    this.applyTrigger = function (element, callback) {
                        element.addEventListener(_this.eventName, callback);
                        return function () { element.removeEventListener(_this.eventName, callback); };
                    };
                    this.triggerName = eventName;
                }
                return DOMEventTrigger;
            }());
            exports_1("DOMEventTrigger", DOMEventTrigger);
        }
    }
});

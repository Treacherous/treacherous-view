System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InitTrigger;
    return {
        setters:[],
        execute: function() {
            InitTrigger = (function () {
                function InitTrigger() {
                    this.triggerName = "init";
                    this.applyTrigger = function (element, callback) {
                        callback();
                        return function () { };
                    };
                }
                return InitTrigger;
            }());
            exports_1("InitTrigger", InitTrigger);
        }
    }
});

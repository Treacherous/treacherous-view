System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ViewTriggerReference;
    return {
        setters:[],
        execute: function() {
            ViewTriggerReference = (function () {
                function ViewTriggerReference(triggerName, triggerArgs) {
                    this.triggerName = triggerName;
                    this.triggerArgs = triggerArgs;
                }
                return ViewTriggerReference;
            }());
            exports_1("ViewTriggerReference", ViewTriggerReference);
        }
    }
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var ViewTriggerRegistry = (function () {
        function ViewTriggerRegistry() {
            var _this = this;
            this.triggers = {};
            this.registerTrigger = function (viewTrigger) { _this.triggers[viewTrigger.triggerName] = viewTrigger; };
            this.unregisterTrigger = function (viewTrigger) { delete _this.triggers[viewTrigger.triggerName]; };
            this.getTriggerNamed = function (triggerName) { return _this.triggers[triggerName] || null; };
            this.hasTriggerNamed = function (triggerName) { return _this.getTriggerNamed(triggerName) != null; };
        }
        return ViewTriggerRegistry;
    }());
    exports.ViewTriggerRegistry = ViewTriggerRegistry;
});

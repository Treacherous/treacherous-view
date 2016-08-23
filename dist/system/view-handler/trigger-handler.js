System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TriggerHandler;
    return {
        setters:[],
        execute: function() {
            TriggerHandler = (function () {
                function TriggerHandler(triggerRegistry, element, triggerReferences, callback) {
                    var _this = this;
                    this.triggerRegistry = triggerRegistry;
                    this.element = element;
                    this.triggerReferences = triggerReferences;
                    this.callback = callback;
                    this.startHandling = function () {
                        _this.triggerReferences.forEach(function (triggerReference) {
                            var trigger = _this.triggerRegistry.getTriggerNamed(triggerReference.triggerName);
                            var activeTrigger = trigger.applyTrigger(_this.element, _this.callback, triggerReference.triggerArgs);
                            _this.activeTriggers.push(activeTrigger);
                        });
                    };
                    this.stopHandling = function () {
                        _this.activeTriggers.forEach(function (x) { return x(); });
                    };
                    this.activeTriggers = [];
                }
                return TriggerHandler;
            }());
            exports_1("TriggerHandler", TriggerHandler);
        }
    }
});

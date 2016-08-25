System.register(["./registries/view-trigger-registry", "./registries/view-strategy-registry", "./view-triggers/interval-trigger", "./view-strategies/inline-strategy", "./view-triggers/submit-trigger", "./view-triggers/init-trigger", "./view-triggers/dom-event-trigger"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_trigger_registry_1, view_strategy_registry_1, interval_trigger_1, inline_strategy_1, submit_trigger_1, init_trigger_1, dom_event_trigger_1;
    var viewTriggerRegistry, viewStrategyRegistry;
    return {
        setters:[
            function (view_trigger_registry_1_1) {
                view_trigger_registry_1 = view_trigger_registry_1_1;
            },
            function (view_strategy_registry_1_1) {
                view_strategy_registry_1 = view_strategy_registry_1_1;
            },
            function (interval_trigger_1_1) {
                interval_trigger_1 = interval_trigger_1_1;
            },
            function (inline_strategy_1_1) {
                inline_strategy_1 = inline_strategy_1_1;
            },
            function (submit_trigger_1_1) {
                submit_trigger_1 = submit_trigger_1_1;
            },
            function (init_trigger_1_1) {
                init_trigger_1 = init_trigger_1_1;
            },
            function (dom_event_trigger_1_1) {
                dom_event_trigger_1 = dom_event_trigger_1_1;
            }],
        execute: function() {
            exports_1("viewTriggerRegistry", viewTriggerRegistry = new view_trigger_registry_1.ViewTriggerRegistry());
            viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("blur"));
            viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("focus"));
            viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("change"));
            viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("input"));
            viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("keyup"));
            viewTriggerRegistry.registerTrigger(new interval_trigger_1.IntervalTrigger());
            viewTriggerRegistry.registerTrigger(new submit_trigger_1.SubmitTrigger());
            viewTriggerRegistry.registerTrigger(new init_trigger_1.InitTrigger());
            exports_1("viewStrategyRegistry", viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry());
            viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
        }
    }
});

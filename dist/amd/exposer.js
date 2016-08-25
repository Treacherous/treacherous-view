define(["require", "exports", "./registries/view-trigger-registry", "./registries/view-strategy-registry", "./view-triggers/interval-trigger", "./view-strategies/inline-strategy", "./view-triggers/submit-trigger", "./view-triggers/init-trigger", "./view-triggers/dom-event-trigger"], function (require, exports, view_trigger_registry_1, view_strategy_registry_1, interval_trigger_1, inline_strategy_1, submit_trigger_1, init_trigger_1, dom_event_trigger_1) {
    "use strict";
    exports.viewTriggerRegistry = new view_trigger_registry_1.ViewTriggerRegistry();
    exports.viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("blur"));
    exports.viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("focus"));
    exports.viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("change"));
    exports.viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("input"));
    exports.viewTriggerRegistry.registerTrigger(new dom_event_trigger_1.DOMEventTrigger("keyup"));
    exports.viewTriggerRegistry.registerTrigger(new interval_trigger_1.IntervalTrigger());
    exports.viewTriggerRegistry.registerTrigger(new submit_trigger_1.SubmitTrigger());
    exports.viewTriggerRegistry.registerTrigger(new init_trigger_1.InitTrigger());
    exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
    exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
});

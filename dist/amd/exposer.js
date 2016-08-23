define(["require", "exports", "./registries/view-trigger-registry", "./registries/view-strategy-registry", "./view-triggers/blur-trigger", "./view-triggers/change-trigger", "./view-triggers/interval-trigger", "./view-triggers/key-up-trigger", "./view-strategies/inline-strategy", "./view-triggers/submit-trigger", "./view-triggers/init-trigger"], function (require, exports, view_trigger_registry_1, view_strategy_registry_1, blur_trigger_1, change_trigger_1, interval_trigger_1, key_up_trigger_1, inline_strategy_1, submit_trigger_1, init_trigger_1) {
    "use strict";
    exports.viewTriggerRegistry = new view_trigger_registry_1.ViewTriggerRegistry();
    exports.viewTriggerRegistry.registerTrigger(new blur_trigger_1.BlurTrigger());
    exports.viewTriggerRegistry.registerTrigger(new change_trigger_1.ChangeTrigger());
    exports.viewTriggerRegistry.registerTrigger(new interval_trigger_1.IntervalTrigger());
    exports.viewTriggerRegistry.registerTrigger(new key_up_trigger_1.KeyUpTrigger());
    exports.viewTriggerRegistry.registerTrigger(new submit_trigger_1.SubmitTrigger());
    exports.viewTriggerRegistry.registerTrigger(new init_trigger_1.InitTrigger());
    exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
    exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
});

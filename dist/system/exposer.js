System.register(["./registries/view-strategy-registry", "./view-strategies/inline-strategy"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_strategy_registry_1, inline_strategy_1, viewStrategyRegistry;
    return {
        setters: [
            function (view_strategy_registry_1_1) {
                view_strategy_registry_1 = view_strategy_registry_1_1;
            },
            function (inline_strategy_1_1) {
                inline_strategy_1 = inline_strategy_1_1;
            }
        ],
        execute: function () {
            exports_1("viewStrategyRegistry", viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry());
            viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
        }
    };
});

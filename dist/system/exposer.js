System.register(["./registries/view-strategy-registry", "./view-strategies/inline-strategy", "./registries/view-summary-registry", "./view-summary-strategies/default-summary-strategy"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_strategy_registry_1, inline_strategy_1, view_summary_registry_1, default_summary_strategy_1, viewStrategyRegistry, viewSummaryRegistry;
    return {
        setters: [
            function (view_strategy_registry_1_1) {
                view_strategy_registry_1 = view_strategy_registry_1_1;
            },
            function (inline_strategy_1_1) {
                inline_strategy_1 = inline_strategy_1_1;
            },
            function (view_summary_registry_1_1) {
                view_summary_registry_1 = view_summary_registry_1_1;
            },
            function (default_summary_strategy_1_1) {
                default_summary_strategy_1 = default_summary_strategy_1_1;
            }
        ],
        execute: function () {
            exports_1("viewStrategyRegistry", viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry());
            viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
            exports_1("viewSummaryRegistry", viewSummaryRegistry = new view_summary_registry_1.ViewSummaryRegistry());
            viewSummaryRegistry.registerSummary(new default_summary_strategy_1.DefaultViewSummary());
        }
    };
});

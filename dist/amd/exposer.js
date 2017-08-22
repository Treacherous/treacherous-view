define(["require", "exports", "./registries/view-strategy-registry", "./view-strategies/inline-strategy", "./registries/view-summary-registry", "./view-summary-strategies/default-summary-strategy"], function (require, exports, view_strategy_registry_1, inline_strategy_1, view_summary_registry_1, default_summary_strategy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
    exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
    exports.viewSummaryRegistry = new view_summary_registry_1.ViewSummaryRegistry();
    exports.viewSummaryRegistry.registerSummary(new default_summary_strategy_1.DefaultViewSummary());
});

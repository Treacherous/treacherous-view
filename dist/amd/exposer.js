define(["require", "exports", "./registries/view-strategy-registry", "./view-strategies/inline-strategy"], function (require, exports, view_strategy_registry_1, inline_strategy_1) {
    "use strict";
    exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
    exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());
});

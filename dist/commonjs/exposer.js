"use strict";
var view_strategy_registry_1 = require("./registries/view-strategy-registry");
var inline_strategy_1 = require("./view-strategies/inline-strategy");
exports.viewStrategyRegistry = new view_strategy_registry_1.ViewStrategyRegistry();
exports.viewStrategyRegistry.registerStrategy(new inline_strategy_1.InlineStrategy());

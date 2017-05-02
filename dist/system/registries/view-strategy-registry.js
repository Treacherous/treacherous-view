System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ViewStrategyRegistry;
    return {
        setters: [],
        execute: function () {
            ViewStrategyRegistry = (function () {
                function ViewStrategyRegistry() {
                    var _this = this;
                    this.strategies = {};
                    this.registerStrategy = function (viewStrategy) { _this.strategies[viewStrategy.strategyName] = viewStrategy; };
                    this.unregisterStrategy = function (viewStrategy) { delete _this.strategies[viewStrategy.strategyName]; };
                    this.getStrategyNamed = function (strategyName) { return _this.strategies[strategyName] || null; };
                    this.hasStrategyNamed = function (strategyName) { return _this.getStrategyNamed(strategyName) != null; };
                }
                return ViewStrategyRegistry;
            }());
            exports_1("ViewStrategyRegistry", ViewStrategyRegistry);
        }
    };
});

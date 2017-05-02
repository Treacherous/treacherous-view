define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewStrategyRegistry = (function () {
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
    exports.ViewStrategyRegistry = ViewStrategyRegistry;
});

export class ViewStrategyRegistry {
    constructor() {
        this.strategies = {};
        this.registerStrategy = (viewStrategy) => { this.strategies[viewStrategy.strategyName] = viewStrategy; };
        this.unregisterStrategy = (viewStrategy) => { delete this.strategies[viewStrategy.strategyName]; };
        this.getStrategyNamed = (strategyName) => { return this.strategies[strategyName] || null; };
        this.hasStrategyNamed = (strategyName) => { return this.getStrategyNamed(strategyName) != null; };
    }
}

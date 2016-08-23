import {IViewStrategy} from "../view-strategies/iview-strategy";

export class ViewStrategyRegistry
{
    strategies = {};

    public registerStrategy = (viewStrategy: IViewStrategy): void =>
    { this.strategies[viewStrategy.strategyName] = viewStrategy; }

    public unregisterStrategy = (viewStrategy: IViewStrategy): void =>
    { delete this.strategies[viewStrategy.strategyName]; }

    public getStrategyNamed = (strategyName: string): IViewStrategy =>
    { return this.strategies[strategyName] || null; }

    public hasStrategyNamed = (strategyName: string): boolean =>
    { return this.getStrategyNamed(strategyName) != null; }
}
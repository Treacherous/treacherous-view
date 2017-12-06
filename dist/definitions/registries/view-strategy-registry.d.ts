import { IViewStrategy } from "../view-strategies/iview-strategy";
export declare class ViewStrategyRegistry {
    private strategies;
    registerStrategy: (viewStrategy: IViewStrategy) => void;
    unregisterStrategy: (viewStrategy: IViewStrategy) => void;
    getStrategyNamed: (strategyName: string) => IViewStrategy;
    hasStrategyNamed: (strategyName: string) => boolean;
}

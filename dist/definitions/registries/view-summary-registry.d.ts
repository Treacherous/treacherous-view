import { IViewSummaryStrategy } from "../view-summary-strategies/iview-summary-strategy";
export declare class ViewSummaryRegistry {
    private summaries;
    registerSummary: (viewSummaryStrategy: IViewSummaryStrategy) => void;
    unregisterSummary: (viewSummaryStrategy: IViewSummaryStrategy) => void;
    getSummaryNamed: (summaryStrategyName: string) => IViewSummaryStrategy;
    hasSummaryNamed: (summaryStrategyName: string) => boolean;
}

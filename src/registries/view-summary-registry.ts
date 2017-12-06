import {IViewSummaryStrategy} from "../view-summary-strategies/iview-summary-strategy";

export class ViewSummaryRegistry
{
    private summaries = {};

    public registerSummary = (viewSummaryStrategy: IViewSummaryStrategy): void =>
    { this.summaries[viewSummaryStrategy.summaryName] = viewSummaryStrategy; }

    public unregisterSummary = (viewSummaryStrategy: IViewSummaryStrategy): void =>
    { delete this.summaries[viewSummaryStrategy.summaryName]; }

    public getSummaryNamed = (summaryStrategyName: string): IViewSummaryStrategy =>
    { return this.summaries[summaryStrategyName] || null; }

    public hasSummaryNamed = (summaryStrategyName: string): boolean =>
    { return this.getSummaryNamed(summaryStrategyName) != null; }
}
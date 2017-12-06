export class ViewSummaryRegistry {
    constructor() {
        this.summaries = {};
        this.registerSummary = (viewSummaryStrategy) => { this.summaries[viewSummaryStrategy.summaryName] = viewSummaryStrategy; };
        this.unregisterSummary = (viewSummaryStrategy) => { delete this.summaries[viewSummaryStrategy.summaryName]; };
        this.getSummaryNamed = (summaryStrategyName) => { return this.summaries[summaryStrategyName] || null; };
        this.hasSummaryNamed = (summaryStrategyName) => { return this.getSummaryNamed(summaryStrategyName) != null; };
    }
}

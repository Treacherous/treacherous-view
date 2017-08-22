import { SummaryHandler } from "./summary-handler";
import { IViewSummaryStrategy } from "./iview-summary-strategy";
export declare class DefaultViewSummary implements IViewSummaryStrategy {
    protected summaryHandler: SummaryHandler;
    summaryName: string;
    constructor(summaryHandler?: SummaryHandler);
    setupContainer(summaryContainerElement: HTMLElement): void;
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string): void;
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string): void;
}

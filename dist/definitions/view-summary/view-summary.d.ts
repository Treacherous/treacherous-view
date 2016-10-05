import { SummaryHandler } from "./summary-handler";
import { IViewSummary } from "./iview-summary";
export declare class ViewSummary implements IViewSummary {
    protected summaryHandler: SummaryHandler;
    constructor(summaryHandler?: SummaryHandler);
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string): void;
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string): void;
}

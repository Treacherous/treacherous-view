import {SummaryHandler} from "./summary-handler";
import {IViewSummary} from "./iview-summary";

export class ViewSummary implements IViewSummary
{
    constructor(protected summaryHandler = new SummaryHandler()){}

    public propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    }

    public propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(error, summaryContainerElement, propertyRoute);
    }
}
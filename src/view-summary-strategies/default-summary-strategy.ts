import {SummaryHandler} from "./summary-handler";
import {IViewSummaryStrategy} from "./iview-summary-strategy";

export class DefaultViewSummary implements IViewSummaryStrategy
{
    public summaryName = "default";

    constructor(protected summaryHandler = new SummaryHandler()){}

    public setupContainer(summaryContainerElement: HTMLElement){
        this.summaryHandler.applyContainerClass(summaryContainerElement);
    }

    public propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    }

    public propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string) {
        let message = `${propertyRoute} - ${error}`;
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
    }
}
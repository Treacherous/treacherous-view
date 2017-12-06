import { SummaryHandler } from "./summary-handler";
export class DefaultViewSummary {
    constructor(summaryHandler = new SummaryHandler()) {
        this.summaryHandler = summaryHandler;
        this.summaryName = "default";
    }
    setupContainer(summaryContainerElement) {
        this.summaryHandler.applyContainerClass(summaryContainerElement);
    }
    propertyBecomeValid(summaryContainerElement, propertyRoute) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    }
    propertyBecomeInvalid(summaryContainerElement, error, propertyRoute) {
        let message = `${propertyRoute} - ${error}`;
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
    }
}

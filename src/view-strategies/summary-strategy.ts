import {IViewStrategy} from "./iview-strategy";
import {ClassHelper} from "../helpers/class-helper";
import {SummaryHandler} from "./summary-handler";

export class SummaryStrategy implements IViewStrategy
{
    public strategyName = "summary";

    protected errors = {};

    constructor(protected summaryHandler = new SummaryHandler()){}

    public propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string) {
        delete this.errors[propertyRoute];
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    }

    public propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(error, summaryContainerElement, propertyRoute);
    }
}
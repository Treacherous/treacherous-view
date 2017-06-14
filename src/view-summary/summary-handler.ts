import {ClassHelper} from "../helpers/class-helper";

export class SummaryHandler
{
    protected static elementIdFormat = "summary-error-for-";
    protected static errorClassName = "summary-error";
    protected static containerClassName = "validation-summary-container";

    public applyContainerClass = (summaryContainerElement: HTMLElement) => {
        ClassHelper.addClass(summaryContainerElement, SummaryHandler.containerClassName);
    }

    public getPropertyElementName = (propertyRoute: string): string => {
        let sanitisedPropertyRoute = propertyRoute.replace(/[\[\].]/g, "-");
        return `${SummaryHandler.elementIdFormat}${sanitisedPropertyRoute}`
    }

    public getPropertyErrorElement = (summaryContainerElement: HTMLElement, propertyRoute: string) =>
    {
        let elementName = this.getPropertyElementName(propertyRoute);
        return summaryContainerElement.querySelector(`#${elementName}`);
    };

    public createPropertyErrorElement = (message: string, summaryContainerElement: HTMLElement, propertyRoute: string) =>
    {
        let elementName = this.getPropertyElementName(propertyRoute);
        let errorContainer = document.createElement("div");
        errorContainer.id = elementName;
        errorContainer.className = SummaryHandler.errorClassName;
        errorContainer.textContent = message;
        errorContainer.setAttribute("property-route", propertyRoute);
        summaryContainerElement.appendChild(errorContainer);
    };

    public removePropertyErrorElement = (summaryContainerElement: HTMLElement, propertyRoute: string) =>
    {
        let errorElement = this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
        if(errorElement) { summaryContainerElement.removeChild(errorElement); }
    };
}
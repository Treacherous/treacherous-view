import { ClassHelper } from "../helpers/class-helper";
export class SummaryHandler {
    constructor() {
        this.applyContainerClass = (summaryContainerElement) => {
            ClassHelper.addClass(summaryContainerElement, SummaryHandler.containerClassName);
        };
        this.getPropertyElementName = (propertyRoute) => {
            let sanitisedPropertyRoute = propertyRoute.replace(/[\[\].]/g, "-");
            return `${SummaryHandler.elementIdFormat}${sanitisedPropertyRoute}`;
        };
        this.getPropertyErrorElement = (summaryContainerElement, propertyRoute) => {
            let elementName = this.getPropertyElementName(propertyRoute);
            return summaryContainerElement.querySelector(`#${elementName}`);
        };
        this.createPropertyErrorElement = (message, summaryContainerElement, propertyRoute) => {
            let elementName = this.getPropertyElementName(propertyRoute);
            let errorContainer = document.createElement("div");
            errorContainer.id = elementName;
            errorContainer.className = SummaryHandler.errorClassName;
            errorContainer.textContent = message;
            errorContainer.setAttribute("property-route", propertyRoute);
            summaryContainerElement.appendChild(errorContainer);
            return errorContainer;
        };
        this.removePropertyErrorElement = (summaryContainerElement, propertyRoute) => {
            let errorElement = this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
            if (errorElement) {
                summaryContainerElement.removeChild(errorElement);
            }
        };
    }
}
SummaryHandler.elementIdFormat = "summary-error-for-";
SummaryHandler.errorClassName = "summary-error";
SummaryHandler.containerClassName = "validation-summary-container";

export class SummaryHandler
{
    protected static elementIdFormat = "summary-error-for-";

    public getPropertyErrorElement = (summaryContainerElement: HTMLElement, propertyRoute: string) =>
    {
        return summaryContainerElement.querySelector(`#${SummaryHandler.elementIdFormat}${propertyRoute}`);
    };

    public createPropertyErrorElement = (message: string, summaryContainerElement: HTMLElement, propertyRoute: string) =>
    {
        var errorContainer = document.createElement("div");
        errorContainer.id = `#${SummaryHandler.elementIdFormat}${propertyRoute}`;
        errorContainer.className = "summary-validation-error";
        errorContainer.textContent = message;
        summaryContainerElement.parentElement.appendChild(errorContainer);
    };

    public removePropertyErrorElement = function(summaryContainerElement: HTMLElement, propertyRoute: string)
    {
        var errorElement = this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
        if(errorElement) { summaryContainerElement.removeChild(errorElement); }
    };
}
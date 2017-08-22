export class InlineHandler
{
    protected static currentCount = 1;

    public getElementValidatorId = (element) =>
    {
        if(!element.getAttribute("id"))
        { element.setAttribute("id", "unique-" + InlineHandler.currentCount++); }

        return element.getAttribute('id') + "-error-container";
    };

    public createErrorElement = (message: string, element: HTMLElement) : HTMLElement =>
    {
        let errorContainerName = this.getElementValidatorId(element);
        let errorContainer = document.createElement("div");
        errorContainer.id = errorContainerName;
        errorContainer.className = "validation-error-container";
        errorContainer.textContent = message;
        element.parentElement.appendChild(errorContainer);
        return errorContainer;
    };

    public removeErrorElement = function(element: HTMLElement)
    {
        let errorContainerName = this.getElementValidatorId(element);
        let errorElement = document.getElementById(errorContainerName);

        if(errorElement) {
            errorElement.parentElement.removeChild(errorElement);
        }
    };

    public addElementError = function(message: string, element: HTMLElement) : HTMLElement
    {
        let errorContainerName = this.getElementValidatorId(element);
        let errorContainer = document.getElementById(errorContainerName);
        if(!errorContainer)
        { return this.createErrorElement(message, element); }
        else
        {
            this.removeErrorElement(element);
            return this.createErrorElement(message, element);
        }
    };
}
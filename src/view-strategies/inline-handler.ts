export class InlineHandler
{
    protected static currentCount = 1;

    public getElementValidatorId = (element) =>
    {
        if(!element.getAttribute("id"))
        { element.setAttribute("id", "unique-" + InlineHandler.currentCount++); }

        return element.getAttribute('id') + "-error-container";
    };

    public createErrorElement = (message, element) =>
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorContainer = document.createElement("div");
        errorContainer.id = errorContainerName;
        errorContainer.className = "validation-error-container";
        errorContainer.textContent = message;
        element.parentElement.appendChild(errorContainer);
    };

    public removeErrorElement = function(element)
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorElement = document.getElementById(errorContainerName);

        if(errorElement) {
            errorElement.parentElement.removeChild(errorElement);
        }
    };

    public addElementError = function(message, element)
    {
        var errorContainerName = this.getElementValidatorId(element);
        var errorContainer = document.getElementById(errorContainerName);
        if(!errorContainer)
        { this.createErrorElement(message, element); }
        else
        {
            this.removeErrorElement(element);
            this.createErrorElement(message, element);
        }
    };
}
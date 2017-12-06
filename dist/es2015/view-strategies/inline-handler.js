export class InlineHandler {
    constructor() {
        this.getElementValidatorId = (element) => {
            if (!element.getAttribute("id")) {
                element.setAttribute("id", "unique-" + InlineHandler.currentCount++);
            }
            return element.getAttribute('id') + "-error-container";
        };
        this.createErrorElement = (message, element) => {
            let errorContainerName = this.getElementValidatorId(element);
            let errorContainer = document.createElement("div");
            errorContainer.id = errorContainerName;
            errorContainer.className = "validation-error-container";
            errorContainer.textContent = message;
            element.parentElement.appendChild(errorContainer);
            return errorContainer;
        };
        this.removeErrorElement = function (element) {
            let errorContainerName = this.getElementValidatorId(element);
            let errorElement = document.getElementById(errorContainerName);
            if (errorElement) {
                errorElement.parentElement.removeChild(errorElement);
            }
        };
        this.addElementError = function (message, element) {
            let errorContainerName = this.getElementValidatorId(element);
            let errorContainer = document.getElementById(errorContainerName);
            if (!errorContainer) {
                return this.createErrorElement(message, element);
            }
            else {
                this.removeErrorElement(element);
                return this.createErrorElement(message, element);
            }
        };
    }
}
InlineHandler.currentCount = 1;

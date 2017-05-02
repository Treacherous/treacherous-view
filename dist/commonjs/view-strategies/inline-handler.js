"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineHandler = (function () {
    function InlineHandler() {
        var _this = this;
        this.getElementValidatorId = function (element) {
            if (!element.getAttribute("id")) {
                element.setAttribute("id", "unique-" + InlineHandler.currentCount++);
            }
            return element.getAttribute('id') + "-error-container";
        };
        this.createErrorElement = function (message, element) {
            var errorContainerName = _this.getElementValidatorId(element);
            var errorContainer = document.createElement("div");
            errorContainer.id = errorContainerName;
            errorContainer.className = "validation-error-container";
            errorContainer.textContent = message;
            element.parentElement.appendChild(errorContainer);
        };
        this.removeErrorElement = function (element) {
            var errorContainerName = this.getElementValidatorId(element);
            var errorElement = document.getElementById(errorContainerName);
            if (errorElement) {
                errorElement.parentElement.removeChild(errorElement);
            }
        };
        this.addElementError = function (message, element) {
            var errorContainerName = this.getElementValidatorId(element);
            var errorContainer = document.getElementById(errorContainerName);
            if (!errorContainer) {
                this.createErrorElement(message, element);
            }
            else {
                this.removeErrorElement(element);
                this.createErrorElement(message, element);
            }
        };
    }
    return InlineHandler;
}());
InlineHandler.currentCount = 1;
exports.InlineHandler = InlineHandler;

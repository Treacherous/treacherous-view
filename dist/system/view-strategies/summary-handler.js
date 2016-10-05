System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SummaryHandler;
    return {
        setters:[],
        execute: function() {
            SummaryHandler = (function () {
                function SummaryHandler() {
                    this.getPropertyErrorElement = function (summaryContainerElement, propertyRoute) {
                        return summaryContainerElement.querySelector("#" + SummaryHandler.elementIdFormat + propertyRoute);
                    };
                    this.createPropertyErrorElement = function (message, summaryContainerElement, propertyRoute) {
                        var errorContainer = document.createElement("div");
                        errorContainer.id = "#" + SummaryHandler.elementIdFormat + propertyRoute;
                        errorContainer.className = "summary-validation-error";
                        errorContainer.textContent = message;
                        summaryContainerElement.parentElement.appendChild(errorContainer);
                    };
                    this.removePropertyErrorElement = function (summaryContainerElement, propertyRoute) {
                        var errorElement = this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
                        if (errorElement) {
                            summaryContainerElement.removeChild(errorElement);
                        }
                    };
                }
                SummaryHandler.elementIdFormat = "summary-error-for-";
                return SummaryHandler;
            }());
            exports_1("SummaryHandler", SummaryHandler);
        }
    }
});

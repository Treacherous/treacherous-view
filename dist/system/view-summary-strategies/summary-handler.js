System.register(["../helpers/class-helper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var class_helper_1, SummaryHandler;
    return {
        setters: [
            function (class_helper_1_1) {
                class_helper_1 = class_helper_1_1;
            }
        ],
        execute: function () {
            SummaryHandler = (function () {
                function SummaryHandler() {
                    var _this = this;
                    this.applyContainerClass = function (summaryContainerElement) {
                        class_helper_1.ClassHelper.addClass(summaryContainerElement, SummaryHandler.containerClassName);
                    };
                    this.getPropertyElementName = function (propertyRoute) {
                        var sanitisedPropertyRoute = propertyRoute.replace(/[\[\].]/g, "-");
                        return "" + SummaryHandler.elementIdFormat + sanitisedPropertyRoute;
                    };
                    this.getPropertyErrorElement = function (summaryContainerElement, propertyRoute) {
                        var elementName = _this.getPropertyElementName(propertyRoute);
                        return summaryContainerElement.querySelector("#" + elementName);
                    };
                    this.createPropertyErrorElement = function (message, summaryContainerElement, propertyRoute) {
                        var elementName = _this.getPropertyElementName(propertyRoute);
                        var errorContainer = document.createElement("div");
                        errorContainer.id = elementName;
                        errorContainer.className = SummaryHandler.errorClassName;
                        errorContainer.textContent = message;
                        errorContainer.setAttribute("property-route", propertyRoute);
                        summaryContainerElement.appendChild(errorContainer);
                        return errorContainer;
                    };
                    this.removePropertyErrorElement = function (summaryContainerElement, propertyRoute) {
                        var errorElement = _this.getPropertyErrorElement(summaryContainerElement, propertyRoute);
                        if (errorElement) {
                            summaryContainerElement.removeChild(errorElement);
                        }
                    };
                }
                SummaryHandler.elementIdFormat = "summary-error-for-";
                SummaryHandler.errorClassName = "summary-error";
                SummaryHandler.containerClassName = "validation-summary-container";
                return SummaryHandler;
            }());
            exports_1("SummaryHandler", SummaryHandler);
        }
    };
});

"use strict";
var class_helper_1 = require("../helpers/class-helper");
var SummaryHandler = (function () {
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
exports.SummaryHandler = SummaryHandler;

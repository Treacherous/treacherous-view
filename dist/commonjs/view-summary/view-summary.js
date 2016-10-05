"use strict";
var summary_handler_1 = require("./summary-handler");
var ViewSummary = (function () {
    function ViewSummary(summaryHandler) {
        if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
        this.summaryHandler = summaryHandler;
    }
    ViewSummary.prototype.propertyBecomeValid = function (summaryContainerElement, propertyRoute) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    };
    ViewSummary.prototype.propertyBecomeInvalid = function (summaryContainerElement, error, propertyRoute) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(error, summaryContainerElement, propertyRoute);
    };
    return ViewSummary;
}());
exports.ViewSummary = ViewSummary;

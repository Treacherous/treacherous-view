"use strict";
var summary_handler_1 = require("./summary-handler");
var SummaryStrategy = (function () {
    function SummaryStrategy(summaryHandler) {
        if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
        this.summaryHandler = summaryHandler;
        this.strategyName = "summary";
        this.errors = {};
    }
    SummaryStrategy.prototype.propertyBecomeValid = function (summaryContainerElement, propertyRoute) {
        delete this.errors[propertyRoute];
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    };
    SummaryStrategy.prototype.propertyBecomeInvalid = function (summaryContainerElement, error, propertyRoute) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(error, summaryContainerElement, propertyRoute);
    };
    return SummaryStrategy;
}());
exports.SummaryStrategy = SummaryStrategy;

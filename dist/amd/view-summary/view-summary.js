define(["require", "exports", "./summary-handler"], function (require, exports, summary_handler_1) {
    "use strict";
    var ViewSummary = (function () {
        function ViewSummary(summaryHandler) {
            if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
            this.summaryHandler = summaryHandler;
        }
        ViewSummary.prototype.setupContainer = function (summaryContainerElement) {
            this.summaryHandler.applyContainerClass(summaryContainerElement);
        };
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
});

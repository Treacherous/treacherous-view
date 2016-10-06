System.register(["./summary-handler"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var summary_handler_1;
    var ViewSummary;
    return {
        setters:[
            function (summary_handler_1_1) {
                summary_handler_1 = summary_handler_1_1;
            }],
        execute: function() {
            ViewSummary = (function () {
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
                    var message = propertyRoute + " - " + error;
                    this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
                    this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
                };
                return ViewSummary;
            }());
            exports_1("ViewSummary", ViewSummary);
        }
    }
});

System.register(["./summary-handler"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var summary_handler_1;
    var SummaryStrategy;
    return {
        setters:[
            function (summary_handler_1_1) {
                summary_handler_1 = summary_handler_1_1;
            }],
        execute: function() {
            SummaryStrategy = (function () {
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
            exports_1("SummaryStrategy", SummaryStrategy);
        }
    }
});

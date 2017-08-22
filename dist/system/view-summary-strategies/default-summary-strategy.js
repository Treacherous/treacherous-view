System.register(["./summary-handler"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var summary_handler_1, DefaultViewSummary;
    return {
        setters: [
            function (summary_handler_1_1) {
                summary_handler_1 = summary_handler_1_1;
            }
        ],
        execute: function () {
            DefaultViewSummary = (function () {
                function DefaultViewSummary(summaryHandler) {
                    if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
                    this.summaryHandler = summaryHandler;
                    this.summaryName = "default";
                }
                DefaultViewSummary.prototype.setupContainer = function (summaryContainerElement) {
                    this.summaryHandler.applyContainerClass(summaryContainerElement);
                };
                DefaultViewSummary.prototype.propertyBecomeValid = function (summaryContainerElement, propertyRoute) {
                    this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
                };
                DefaultViewSummary.prototype.propertyBecomeInvalid = function (summaryContainerElement, error, propertyRoute) {
                    var message = propertyRoute + " - " + error;
                    this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
                    this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
                };
                return DefaultViewSummary;
            }());
            exports_1("DefaultViewSummary", DefaultViewSummary);
        }
    };
});

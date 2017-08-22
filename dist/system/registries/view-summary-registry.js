System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ViewSummaryRegistry;
    return {
        setters: [],
        execute: function () {
            ViewSummaryRegistry = (function () {
                function ViewSummaryRegistry() {
                    var _this = this;
                    this.summaries = {};
                    this.registerSummary = function (viewSummaryStrategy) { _this.summaries[viewSummaryStrategy.summaryName] = viewSummaryStrategy; };
                    this.unregisterSummary = function (viewSummaryStrategy) { delete _this.summaries[viewSummaryStrategy.summaryName]; };
                    this.getSummaryNamed = function (summaryStrategyName) { return _this.summaries[summaryStrategyName] || null; };
                    this.hasSummaryNamed = function (summaryStrategyName) { return _this.getSummaryNamed(summaryStrategyName) != null; };
                }
                return ViewSummaryRegistry;
            }());
            exports_1("ViewSummaryRegistry", ViewSummaryRegistry);
        }
    };
});

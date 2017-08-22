"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewSummaryRegistry = (function () {
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
exports.ViewSummaryRegistry = ViewSummaryRegistry;

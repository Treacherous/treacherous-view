System.register(["./exposer", "./helpers/class-helper", "./helpers/element-helper", "./helpers/js-literal-helper", "./registries/view-strategy-registry", "./states/validation-state", "./view-strategies/inline-handler", "./view-strategies/inline-strategy", "./view-summary/summary-handler", "./view-summary/view-summary"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (exposer_1_1) {
                exportStar_1(exposer_1_1);
            },
            function (class_helper_1_1) {
                exportStar_1(class_helper_1_1);
            },
            function (element_helper_1_1) {
                exportStar_1(element_helper_1_1);
            },
            function (js_literal_helper_1_1) {
                exportStar_1(js_literal_helper_1_1);
            },
            function (view_strategy_registry_1_1) {
                exportStar_1(view_strategy_registry_1_1);
            },
            function (validation_state_1_1) {
                exportStar_1(validation_state_1_1);
            },
            function (inline_handler_1_1) {
                exportStar_1(inline_handler_1_1);
            },
            function (inline_strategy_1_1) {
                exportStar_1(inline_strategy_1_1);
            },
            function (summary_handler_1_1) {
                exportStar_1(summary_handler_1_1);
            },
            function (view_summary_1_1) {
                exportStar_1(view_summary_1_1);
            }],
        execute: function() {
        }
    }
});

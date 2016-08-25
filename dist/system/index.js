System.register(["./exposer", "./example-usages/validate-property-binding", "./helpers/class-helper", "./helpers/element-helper", "./registries/view-strategy-registry", "./registries/view-trigger-registry", "./view-strategies/inline-handler", "./view-strategies/inline-strategy", "./states/validation-state", "./view-triggers/dom-event-trigger", "./view-triggers/init-trigger", "./view-triggers/interval-trigger", "./view-triggers/submit-trigger"], function(exports_1, context_1) {
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
            function (validate_property_binding_1_1) {
                exportStar_1(validate_property_binding_1_1);
            },
            function (class_helper_1_1) {
                exportStar_1(class_helper_1_1);
            },
            function (element_helper_1_1) {
                exportStar_1(element_helper_1_1);
            },
            function (view_strategy_registry_1_1) {
                exportStar_1(view_strategy_registry_1_1);
            },
            function (view_trigger_registry_1_1) {
                exportStar_1(view_trigger_registry_1_1);
            },
            function (inline_handler_1_1) {
                exportStar_1(inline_handler_1_1);
            },
            function (inline_strategy_1_1) {
                exportStar_1(inline_strategy_1_1);
            },
            function (validation_state_1_1) {
                exportStar_1(validation_state_1_1);
            },
            function (dom_event_trigger_1_1) {
                exportStar_1(dom_event_trigger_1_1);
            },
            function (init_trigger_1_1) {
                exportStar_1(init_trigger_1_1);
            },
            function (interval_trigger_1_1) {
                exportStar_1(interval_trigger_1_1);
            },
            function (submit_trigger_1_1) {
                exportStar_1(submit_trigger_1_1);
            }],
        execute: function() {
        }
    }
});

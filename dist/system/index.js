System.register(["./exposer", "./dummy/validate-property-binding", "./helpers/class-helper", "./helpers/element-helper", "./registries/view-strategy-registry", "./registries/view-trigger-registry", "./states/validation-state", "./view-orchestrator/element-binding", "./view-handler/trigger-handler", "./view-strategies/inline-handler", "./view-strategies/inline-strategy", "./view-triggers/blur-trigger", "./view-triggers/change-trigger", "./view-triggers/init-trigger", "./view-triggers/interval-trigger", "./view-triggers/key-up-trigger", "./view-triggers/submit-trigger", "./view-triggers/view-trigger-reference"], function(exports_1, context_1) {
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
            function (validation_state_1_1) {
                exportStar_1(validation_state_1_1);
            },
            function (element_binding_1_1) {
                exportStar_1(element_binding_1_1);
            },
            function (trigger_handler_1_1) {
                exportStar_1(trigger_handler_1_1);
            },
            function (inline_handler_1_1) {
                exportStar_1(inline_handler_1_1);
            },
            function (inline_strategy_1_1) {
                exportStar_1(inline_strategy_1_1);
            },
            function (blur_trigger_1_1) {
                exportStar_1(blur_trigger_1_1);
            },
            function (change_trigger_1_1) {
                exportStar_1(change_trigger_1_1);
            },
            function (init_trigger_1_1) {
                exportStar_1(init_trigger_1_1);
            },
            function (interval_trigger_1_1) {
                exportStar_1(interval_trigger_1_1);
            },
            function (key_up_trigger_1_1) {
                exportStar_1(key_up_trigger_1_1);
            },
            function (submit_trigger_1_1) {
                exportStar_1(submit_trigger_1_1);
            },
            function (view_trigger_reference_1_1) {
                exportStar_1(view_trigger_reference_1_1);
            }],
        execute: function() {
        }
    }
});

System.register(["./js-literal-helper"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var js_literal_helper_1;
    var ElementHelper;
    return {
        setters:[
            function (js_literal_helper_1_1) {
                js_literal_helper_1 = js_literal_helper_1_1;
            }],
        execute: function() {
            ElementHelper = (function () {
                function ElementHelper() {
                }
                ElementHelper.getPropertyRouteFrom = function (element) {
                    return element.getAttribute("validate-property");
                };
                ElementHelper.getStrategyFrom = function (element) {
                    return element.getAttribute("validation-strategy");
                };
                ElementHelper.getOptionsFrom = function (element) {
                    var optionsLiteral = element.getAttribute("validation-options");
                    if (!optionsLiteral) {
                        return;
                    }
                    return js_literal_helper_1.JsLiteralHelper.literalToJson(optionsLiteral);
                };
                return ElementHelper;
            }());
            exports_1("ElementHelper", ElementHelper);
        }
    }
});

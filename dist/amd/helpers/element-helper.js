define(["require", "exports", "./js-literal-helper"], function (require, exports, js_literal_helper_1) {
    "use strict";
    var ElementHelper = (function () {
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
    exports.ElementHelper = ElementHelper;
});

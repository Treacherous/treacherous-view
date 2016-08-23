define(["require", "exports"], function (require, exports) {
    "use strict";
    var ElementHelper = (function () {
        function ElementHelper() {
        }
        ElementHelper.getTriggerArgsFrom = function (element, triggerName) {
            var attributeName = triggerName + "-trigger";
            var attributeContent = element.getAttribute(attributeName);
            if (!attributeContent) {
                return {};
            }
            var jsLiteralString = "{ " + attributeContent + " }";
            var jsonString = jsLiteralString.replace(ElementHelper.jsLiteralRegex, "$1\"$2\":");
            var jsonObject;
            try {
                jsonObject = JSON.parse(jsonString);
            }
            catch (error) {
                console.log("unable to process trigger arguments for: " + element + " | " + triggerName, error);
            }
            return jsonObject || {};
        };
        ElementHelper.getTriggersFrom = function (element) {
            var triggerString = element.getAttribute("validation-triggers");
            if (!triggerString) {
                return [];
            }
            var triggerNames = triggerString.replace(" ", "").split(",");
            return triggerNames;
        };
        ElementHelper.getPropertyRouteFrom = function (element) {
            return element.getAttribute("validate-property");
        };
        ElementHelper.getStrategyFrom = function (element) {
            return element.getAttribute("validation-strategy");
        };
        ElementHelper.jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;
        return ElementHelper;
    }());
    exports.ElementHelper = ElementHelper;
});

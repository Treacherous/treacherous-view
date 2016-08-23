define(["require", "exports", "../helpers/class-helper", "./inline-handler"], function (require, exports, class_helper_1, inline_handler_1) {
    "use strict";
    var InlineStrategy = (function () {
        function InlineStrategy(inlineHandler) {
            if (inlineHandler === void 0) { inlineHandler = new inline_handler_1.InlineHandler(); }
            this.inlineHandler = inlineHandler;
            this.strategyName = "inline";
        }
        InlineStrategy.prototype.elementBecomeValid = function (element) {
            class_helper_1.ClassHelper.removeClass(element, "invalid");
            class_helper_1.ClassHelper.addClass(element, "valid");
            this.inlineHandler.removeErrorElement(element);
        };
        InlineStrategy.prototype.elementBecomeInvalid = function (element, error) {
            class_helper_1.ClassHelper.removeClass(element, "valid");
            class_helper_1.ClassHelper.addClass(element, "invalid");
            this.inlineHandler.addElementError(error, element);
        };
        return InlineStrategy;
    }());
    exports.InlineStrategy = InlineStrategy;
});

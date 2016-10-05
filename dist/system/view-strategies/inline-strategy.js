System.register(["../helpers/class-helper", "./inline-handler"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var class_helper_1, inline_handler_1;
    var InlineStrategy;
    return {
        setters:[
            function (class_helper_1_1) {
                class_helper_1 = class_helper_1_1;
            },
            function (inline_handler_1_1) {
                inline_handler_1 = inline_handler_1_1;
            }],
        execute: function() {
            InlineStrategy = (function () {
                function InlineStrategy(inlineHandler) {
                    if (inlineHandler === void 0) { inlineHandler = new inline_handler_1.InlineHandler(); }
                    this.inlineHandler = inlineHandler;
                    this.strategyName = "inline";
                }
                InlineStrategy.prototype.propertyBecomeValid = function (element) {
                    class_helper_1.ClassHelper.removeClass(element, "invalid");
                    class_helper_1.ClassHelper.addClass(element, "valid");
                    this.inlineHandler.removeErrorElement(element);
                };
                InlineStrategy.prototype.propertyBecomeInvalid = function (element, error) {
                    class_helper_1.ClassHelper.removeClass(element, "valid");
                    class_helper_1.ClassHelper.addClass(element, "invalid");
                    this.inlineHandler.addElementError(error, element);
                };
                return InlineStrategy;
            }());
            exports_1("InlineStrategy", InlineStrategy);
        }
    }
});

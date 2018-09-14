"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_helper_1 = require("../helpers/class-helper");
var inline_handler_1 = require("./inline-handler");
var InlineStrategy = /** @class */ (function () {
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
exports.InlineStrategy = InlineStrategy;

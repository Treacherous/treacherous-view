define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassHelper = (function () {
        function ClassHelper() {
        }
        return ClassHelper;
    }());
    ClassHelper.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    };
    ClassHelper.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else if (!ClassHelper.hasClass(element, className)) {
            element.errorClassName += " " + className;
        }
    };
    ClassHelper.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else if (ClassHelper.hasClass(element, className)) {
            var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
            element.errorClassName = element.className.replace(reg, ' ');
        }
    };
    exports.ClassHelper = ClassHelper;
});

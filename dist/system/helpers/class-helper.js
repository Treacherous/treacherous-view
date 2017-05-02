System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClassHelper;
    return {
        setters: [],
        execute: function () {
            ClassHelper = (function () {
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
            exports_1("ClassHelper", ClassHelper);
        }
    };
});

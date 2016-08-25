"use strict";
var DOMEventTrigger = (function () {
    function DOMEventTrigger(eventName) {
        var _this = this;
        this.eventName = eventName;
        this.applyTrigger = function (element, callback) {
            element.addEventListener(_this.eventName, callback);
            return function () { element.removeEventListener(_this.eventName, callback); };
        };
        this.triggerName = eventName;
    }
    return DOMEventTrigger;
}());
exports.DOMEventTrigger = DOMEventTrigger;

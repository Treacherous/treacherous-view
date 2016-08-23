"use strict";
var ElementBinding = (function () {
    function ElementBinding(element, propertyRoute, triggerReferences) {
        if (triggerReferences === void 0) { triggerReferences = []; }
        this.element = element;
        this.propertyRoute = propertyRoute;
        this.triggerReferences = triggerReferences;
    }
    return ElementBinding;
}());
exports.ElementBinding = ElementBinding;

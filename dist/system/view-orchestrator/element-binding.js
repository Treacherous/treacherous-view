System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ElementBinding;
    return {
        setters:[],
        execute: function() {
            ElementBinding = (function () {
                function ElementBinding(element, propertyRoute, triggerReferences) {
                    if (triggerReferences === void 0) { triggerReferences = []; }
                    this.element = element;
                    this.propertyRoute = propertyRoute;
                    this.triggerReferences = triggerReferences;
                }
                return ElementBinding;
            }());
            exports_1("ElementBinding", ElementBinding);
        }
    }
});

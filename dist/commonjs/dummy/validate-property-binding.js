"use strict";
var element_helper_1 = require("../helpers/element-helper");
var validation_state_1 = require("../states/validation-state");
var ValidatePropertyBinding = (function () {
    function ValidatePropertyBinding() {
        this.previousState = validation_state_1.ValidationState.unknown;
    }
    ValidatePropertyBinding.prototype.startTriggers = function () {
        var _this = this;
        var triggerNames = element_helper_1.ElementHelper.getTriggersFrom(this.element);
        triggerNames.forEach(function (triggerName) {
            var triggerArgs = element_helper_1.ElementHelper.getTriggerArgsFrom(_this.element, triggerName);
            var trigger = _this.triggerRegistry.getTriggerNamed(triggerName);
            var activeTrigger = trigger.applyTrigger(_this.element, _this.triggerValidation, triggerArgs);
            _this.activeTriggers.push(activeTrigger);
        });
    };
    ValidatePropertyBinding.prototype.triggerValidation = function () {
        var _this = this;
        this.validationGroup.getPropertyError(this.propertyRoute, true)
            .then(function (error) {
            if (!error) {
                _this.viewStrategy.elementBecomeValid(_this.element, _this.propertyRoute, _this.previousState);
                _this.previousState = validation_state_1.ValidationState.valid;
            }
            else {
                _this.viewStrategy.elementBecomeInvalid(_this.element, error, _this.propertyRoute, _this.previousState);
                _this.previousState = validation_state_1.ValidationState.invalid;
            }
        });
    };
    return ValidatePropertyBinding;
}());
exports.ValidatePropertyBinding = ValidatePropertyBinding;
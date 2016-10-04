import {IViewStrategy} from "../view-strategies/iview-strategy";
import {IValidationGroup} from "treacherous";
import {ViewTriggerRegistry} from "../registries/view-trigger-registry";
import {ElementHelper} from "../helpers/element-helper";
import {ValidationState} from "../states/validation-state";

// This is just a dumping ground for me to get my mind around stuff
export class ValidatePropertyBinding {
    protected triggerRegistry: ViewTriggerRegistry;
    protected activeTriggers: Array<Function>;
    protected previousState = ValidationState.unknown;

    public viewStrategy: IViewStrategy;
    public validationGroup: IValidationGroup;
    public element: HTMLElement;
    public propertyRoute: string;

    public startTriggers() {
        var triggerNames = ElementHelper.getTriggersFrom(this.element);
        triggerNames.forEach((triggerName: string) => {
            var triggerArgs = ElementHelper.getTriggerArgsFrom(this.element, triggerName);
            var trigger = this.triggerRegistry.getTriggerNamed(triggerName);
            var activeTrigger = trigger.applyTrigger(this.element, this.triggerValidation, triggerArgs);
            this.activeTriggers.push(activeTrigger);
        });
    }

    protected triggerValidation() {
        this.validationGroup.getPropertyError(this.propertyRoute, true)
            .then((error) => {
                if(!error) {
                    this.viewStrategy.propertyBecomeValid(this.element, this.propertyRoute, this.previousState);
                    this.previousState = ValidationState.valid;
                }
                else {
                    this.viewStrategy.propertyBecomeInvalid(this.element, error, this.propertyRoute, this.previousState);
                    this.previousState = ValidationState.invalid;
                }
            })
    }
}
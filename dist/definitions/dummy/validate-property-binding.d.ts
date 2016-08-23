import { IViewStrategy } from "../view-strategies/iview-strategy";
import { IValidationGroup } from "treacherous";
import { ViewTriggerRegistry } from "../registries/view-trigger-registry";
import { ValidationState } from "../states/validation-state";
export declare class ValidatePropertyBinding {
    protected triggerRegistry: ViewTriggerRegistry;
    protected activeTriggers: Array<Function>;
    protected previousState: ValidationState;
    viewStrategy: IViewStrategy;
    validationGroup: IValidationGroup;
    element: HTMLElement;
    propertyRoute: string;
    startTriggers(): void;
    protected triggerValidation(): void;
}

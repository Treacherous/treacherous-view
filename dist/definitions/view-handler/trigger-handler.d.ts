import { ViewTriggerReference } from "../view-triggers/view-trigger-reference";
import { ViewTriggerRegistry } from "../registries/view-trigger-registry";
export declare class TriggerHandler {
    protected triggerRegistry: ViewTriggerRegistry;
    protected element: HTMLElement;
    protected triggerReferences: Array<ViewTriggerReference>;
    protected callback: any;
    protected activeTriggers: Array<Function>;
    constructor(triggerRegistry: ViewTriggerRegistry, element: HTMLElement, triggerReferences: Array<ViewTriggerReference>, callback: any);
    startHandling: () => void;
    stopHandling: () => void;
}

import { ViewTriggerReference } from "../view-triggers/view-trigger-reference";
export declare class ElementBinding {
    element: HTMLElement;
    propertyRoute: string;
    triggerReferences: Array<ViewTriggerReference>;
    constructor(element: HTMLElement, propertyRoute: string, triggerReferences?: Array<ViewTriggerReference>);
}

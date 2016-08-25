import { IViewTrigger } from "./iview-trigger";
export declare class DOMEventTrigger implements IViewTrigger {
    protected eventName: string;
    triggerName: string;
    constructor(eventName: string);
    applyTrigger: (element: HTMLElement, callback: () => void) => Function;
}

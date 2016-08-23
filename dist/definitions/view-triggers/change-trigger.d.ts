import { IViewTrigger } from "./iview-trigger";
export declare class ChangeTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void) => () => void;
}

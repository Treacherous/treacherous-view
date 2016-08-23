import { IViewTrigger } from "./iview-trigger";
export declare class SubmitTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void) => () => void;
}

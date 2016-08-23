import { IViewTrigger } from "./iview-trigger";
export declare class KeyUpTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void) => () => void;
}

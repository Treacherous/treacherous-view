import { IViewTrigger } from "./iview-trigger";
export declare class InitTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void) => () => void;
}

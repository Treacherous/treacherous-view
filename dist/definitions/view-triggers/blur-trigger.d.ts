import { IViewTrigger } from "./iview-trigger";
export declare class BlurTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void) => Function;
}

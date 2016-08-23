import { IViewTrigger } from "./iview-trigger";
export declare class IntervalTrigger implements IViewTrigger {
    triggerName: string;
    applyTrigger: (element: HTMLElement, callback: () => void, args: any) => () => void;
}

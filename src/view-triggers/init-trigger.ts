import {IViewTrigger} from "./iview-trigger";

export class InitTrigger implements IViewTrigger
{
    public triggerName = "init";

    public applyTrigger = (element: HTMLElement, callback: () => void) => {
        callback();
        return () => {};
    }
}
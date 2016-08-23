import {IViewTrigger} from "./iview-trigger";

export class ChangeTrigger implements IViewTrigger
{
    public triggerName = "change";

    public applyTrigger = (element: HTMLElement, callback: () => void) => {
        element.addEventListener("change", callback);

        return () => { element.removeEventListener("change", callback); }
    }
}
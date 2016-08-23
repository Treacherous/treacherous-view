import {IViewTrigger} from "./iview-trigger";

export class KeyUpTrigger implements IViewTrigger
{
    public triggerName = "keyup";

    public applyTrigger = (element: HTMLElement, callback: () => void) => {
        element.addEventListener("keyup", callback);
        return () => { element.removeEventListener("keyup", callback); }
    }
}
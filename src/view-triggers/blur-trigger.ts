import {IViewTrigger} from "./iview-trigger";

export class BlurTrigger implements IViewTrigger
{
    public triggerName = "blur";

    public applyTrigger = (element: HTMLElement, callback: () => void): Function => {
        element.addEventListener("blur", callback);

        return () => { element.removeEventListener("blur", callback); }
    }
}
import {IViewTrigger} from "./iview-trigger";

export class SubmitTrigger implements IViewTrigger
{
    public triggerName = "submit";

    public applyTrigger = (element: HTMLElement, callback: () => void) => {
        var formElement: HTMLElement = element["form"];
        if(!formElement) { throw new Error(`No form attached to ${element} for submission trigger`); }

        formElement.addEventListener("submit", callback);
        return () => { formElement.removeEventListener("submit", callback); }
    }
}
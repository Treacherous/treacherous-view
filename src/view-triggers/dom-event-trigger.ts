import {IViewTrigger} from "./iview-trigger";

export class DOMEventTrigger implements IViewTrigger
{
    public triggerName: string;

    constructor(protected eventName: string){
        this.triggerName = eventName;
    }

    public applyTrigger = (element: HTMLElement, callback: () => void): Function => {
        element.addEventListener(this.eventName, callback);
        return () => { element.removeEventListener(this.eventName, callback); }
    }
}
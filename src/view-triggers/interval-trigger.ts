import {IViewTrigger} from "./iview-trigger";

export class IntervalTrigger implements IViewTrigger
{
    public triggerName = "interval";

    public applyTrigger = (element: HTMLElement, callback: () => void, args: any) => {

        var intervalReference;
        if(!args.onlyWhenFocused) {
            intervalReference = setInterval(callback, args.interval);
            return () => { clearInterval(intervalReference); };
        }

        var listenerForFocus = () => { intervalReference = setInterval(callback, args.interval); };
        var listenerForBlur = () => { clearInterval(intervalReference); };

        element.addEventListener("focus", listenerForFocus);
        element.addEventListener("blur", listenerForBlur);

        return () => {
            element.removeEventListener("focus", listenerForFocus);
            element.removeEventListener("blur", listenerForBlur);

            if(intervalReference){ clearInterval(intervalReference); }
        }
    }
}
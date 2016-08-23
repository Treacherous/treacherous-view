import { IViewTrigger } from "../view-triggers/iview-trigger";
export declare class ViewTriggerRegistry {
    triggers: {};
    registerTrigger: (viewTrigger: IViewTrigger) => void;
    unregisterTrigger: (viewTrigger: IViewTrigger) => void;
    getTriggerNamed: (triggerName: string) => IViewTrigger;
    hasTriggerNamed: (triggerName: string) => boolean;
}

import {IViewTrigger} from "../view-triggers/iview-trigger";

export class ViewTriggerRegistry
{
    triggers = {};

    public registerTrigger = (viewTrigger: IViewTrigger): void =>
    { this.triggers[viewTrigger.triggerName] = viewTrigger; }

    public unregisterTrigger = (viewTrigger: IViewTrigger): void =>
    { delete this.triggers[viewTrigger.triggerName]; }

    public getTriggerNamed = (triggerName: string): IViewTrigger =>
    { return this.triggers[triggerName] || null; }

    public hasTriggerNamed = (triggerName: string): boolean =>
    { return this.getTriggerNamed(triggerName) != null; }
}
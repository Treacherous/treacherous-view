export interface IViewTrigger {
    triggerName: string;
    applyTrigger(element: HTMLElement, callback: () => void, args?: any): Function;
}

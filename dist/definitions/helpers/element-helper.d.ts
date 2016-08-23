export declare class ElementHelper {
    private static jsLiteralRegex;
    static getTriggerArgsFrom(element: HTMLElement, triggerName: string): any;
    static getTriggersFrom(element: HTMLElement): Array<string>;
    static getPropertyRouteFrom(element: HTMLElement): string;
    static getStrategyFrom(element: HTMLElement): string;
}

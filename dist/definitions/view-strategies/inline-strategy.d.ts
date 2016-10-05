import { IViewStrategy } from "./iview-strategy";
import { InlineHandler } from "./inline-handler";
export declare class InlineStrategy implements IViewStrategy {
    protected inlineHandler: InlineHandler;
    strategyName: string;
    constructor(inlineHandler?: InlineHandler);
    propertyBecomeValid(element: HTMLElement): void;
    propertyBecomeInvalid(element: HTMLElement, error: string): void;
}

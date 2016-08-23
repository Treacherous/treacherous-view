import { IViewStrategy } from "./iview-strategy";
import { InlineHandler } from "./inline-handler";
export declare class InlineStrategy implements IViewStrategy {
    protected inlineHandler: InlineHandler;
    strategyName: string;
    constructor(inlineHandler?: InlineHandler);
    elementBecomeValid(element: HTMLElement): void;
    elementBecomeInvalid(element: HTMLElement, error: string): void;
}

import { IViewStrategy } from "./iview-strategy";
import { SummaryHandler } from "./summary-handler";
export declare class SummaryStrategy implements IViewStrategy {
    protected summaryHandler: SummaryHandler;
    strategyName: string;
    protected errors: {};
    constructor(summaryHandler?: SummaryHandler);
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string): void;
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string): void;
}

import { IViewSummaryOptions } from "../view-options/iview-summary-options";
export interface IViewSummaryStrategy {
    summaryName: string;
    setupContainer(summaryContainerElement: HTMLElement, options: IViewSummaryOptions): any;
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string, options: IViewSummaryOptions): any;
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string, options: IViewSummaryOptions): any;
}

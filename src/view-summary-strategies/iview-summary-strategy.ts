import {IViewSummaryOptions} from "../view-options/iview-summary-options";

export interface IViewSummaryStrategy
{
    summaryName: string;
    setupContainer(summaryContainerElement: HTMLElement, options: IViewSummaryOptions);
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string, options: IViewSummaryOptions);
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string, options: IViewSummaryOptions);
}
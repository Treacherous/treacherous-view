export interface IViewSummary
{
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string);
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string);
}
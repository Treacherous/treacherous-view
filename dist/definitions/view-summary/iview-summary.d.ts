export interface IViewSummary {
    propertyBecomeValid(summaryContainerElement: HTMLElement, propertyRoute: string): any;
    propertyBecomeInvalid(summaryContainerElement: HTMLElement, error: string, propertyRoute: string): any;
}

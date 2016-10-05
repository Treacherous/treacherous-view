export declare class SummaryHandler {
    protected static elementIdFormat: string;
    getPropertyErrorElement: (summaryContainerElement: HTMLElement, propertyRoute: string) => Element;
    createPropertyErrorElement: (message: string, summaryContainerElement: HTMLElement, propertyRoute: string) => void;
    removePropertyErrorElement: (summaryContainerElement: HTMLElement, propertyRoute: string) => void;
}

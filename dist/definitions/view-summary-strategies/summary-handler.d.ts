export declare class SummaryHandler {
    protected static elementIdFormat: string;
    protected static errorClassName: string;
    protected static containerClassName: string;
    applyContainerClass: (summaryContainerElement: HTMLElement) => void;
    getPropertyElementName: (propertyRoute: string) => string;
    getPropertyErrorElement: (summaryContainerElement: HTMLElement, propertyRoute: string) => Element;
    createPropertyErrorElement: (message: string, summaryContainerElement: HTMLElement, propertyRoute: string) => HTMLElement;
    removePropertyErrorElement: (summaryContainerElement: HTMLElement, propertyRoute: string) => void;
}

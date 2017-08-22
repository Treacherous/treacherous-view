export declare class InlineHandler {
    protected static currentCount: number;
    getElementValidatorId: (element: any) => string;
    createErrorElement: (message: string, element: HTMLElement) => HTMLElement;
    removeErrorElement: (element: HTMLElement) => void;
    addElementError: (message: string, element: HTMLElement) => HTMLElement;
}

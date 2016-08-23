export declare class InlineHandler {
    protected static currentCount: number;
    getElementValidatorId: (element: any) => string;
    createErrorElement: (message: any, element: any) => void;
    removeErrorElement: (element: any) => void;
    addElementError: (message: any, element: any) => void;
}

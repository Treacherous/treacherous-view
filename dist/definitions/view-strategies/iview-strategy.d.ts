import { ValidationState } from "../states/validation-state";
export interface IViewStrategy {
    strategyName: string;
    propertyBecomeValid(element: HTMLElement, propertyRoute: string, previousState: ValidationState): any;
    propertyBecomeInvalid(element: HTMLElement, error: string, propertyRoute: string, previousState: ValidationState): any;
}

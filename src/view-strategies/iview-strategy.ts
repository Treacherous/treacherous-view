import {ValidationState} from "../states/validation-state";

export interface IViewStrategy
{
    strategyName: string;
    elementBecomeValid(element: HTMLElement, propertyRoute: string, previousState: ValidationState)
    elementBecomeInvalid(element: HTMLElement, error: string, propertyRoute: string, previousState: ValidationState);
}

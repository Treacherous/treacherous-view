import {IViewStrategy} from "./iview-strategy";
import {ClassHelper} from "../helpers/class-helper";
import {InlineHandler} from "./inline-handler";

export class InlineStrategy implements IViewStrategy
{
    public strategyName = "inline";

    constructor(protected inlineHandler = new InlineHandler()){}

    public propertyBecomeValid(element: HTMLElement) {
        ClassHelper.removeClass(element, "invalid");
        ClassHelper.addClass(element, "valid");
        this.inlineHandler.removeErrorElement(element);
    }

    public propertyBecomeInvalid(element: HTMLElement, error: string) {
        ClassHelper.removeClass(element, "valid");
        ClassHelper.addClass(element, "invalid");
        this.inlineHandler.addElementError(error, element);
    }
}
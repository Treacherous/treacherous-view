import { ClassHelper } from "../helpers/class-helper";
import { InlineHandler } from "./inline-handler";
export class InlineStrategy {
    constructor(inlineHandler = new InlineHandler()) {
        this.inlineHandler = inlineHandler;
        this.strategyName = "inline";
    }
    propertyBecomeValid(element) {
        ClassHelper.removeClass(element, "invalid");
        ClassHelper.addClass(element, "valid");
        this.inlineHandler.removeErrorElement(element);
    }
    propertyBecomeInvalid(element, error) {
        ClassHelper.removeClass(element, "valid");
        ClassHelper.addClass(element, "invalid");
        this.inlineHandler.addElementError(error, element);
    }
}

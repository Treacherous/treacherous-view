import {JsLiteralHelper} from "./js-literal-helper";
export class ElementHelper
{
    public static getPropertyRouteFrom(element: HTMLElement): string {
        return element.getAttribute("validate-property");
    }

    public static getStrategyFrom(element: HTMLElement): string {
        return element.getAttribute("validation-strategy");
    }

    public static getOptionsFrom(element: HTMLElement): any {
        var optionsLiteral = element.getAttribute("validation-options");
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }
}
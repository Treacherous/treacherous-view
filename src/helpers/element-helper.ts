import {JsLiteralHelper} from "./js-literal-helper";
export class ElementHelper
{
    public static getPropertyRouteFrom(element: HTMLElement): string {
        return element.getAttribute("validate-property");
    }

    public static getStrategyFrom(element: HTMLElement): string {
        return element.getAttribute("view-strategy");
    }

    public static getOptionsFrom(element: HTMLElement): any {
        var optionsLiteral = element.getAttribute("view-options");
        if(!optionsLiteral) { return; }
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }
}
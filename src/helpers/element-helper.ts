import {JsLiteralHelper} from "./js-literal-helper";

export class ElementHelper
{
    public static ValidatePropertyAttributeName = "validate-property";
    public static ViewStrategyAttributeName = "view-strategy";
    public static ViewOptionsAttributeName = "view-options";
    public static ViewSummaryStrategyAttributeName = "view-summary-strategy";
    public static SummaryOptionsAttributeName = "summary-options";

    public static getPropertyRouteFrom(element: HTMLElement): string {
        return element.getAttribute(ElementHelper.ValidatePropertyAttributeName);
    }

    public static getViewStrategyFrom(element: HTMLElement): string {
        return element.getAttribute(ElementHelper.ViewStrategyAttributeName);
    }

    public static getViewOptionsFrom(element: HTMLElement): any {
        let optionsLiteral = element.getAttribute(ElementHelper.ViewOptionsAttributeName);
        if(!optionsLiteral) { return; }
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }

    public static getSummaryStrategyFrom(element: HTMLElement): string {
        return element.getAttribute(ElementHelper.ViewSummaryStrategyAttributeName);
    }

    public static getSummaryOptionsFrom(element: HTMLElement): any {
        let optionsLiteral = element.getAttribute(ElementHelper.SummaryOptionsAttributeName);
        if(!optionsLiteral) { return; }
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }
}
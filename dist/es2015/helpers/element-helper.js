import { JsLiteralHelper } from "./js-literal-helper";
export class ElementHelper {
    static getPropertyRouteFrom(element) {
        return element.getAttribute(ElementHelper.ValidatePropertyAttributeName);
    }
    static getViewStrategyFrom(element) {
        return element.getAttribute(ElementHelper.ViewStrategyAttributeName);
    }
    static getViewOptionsFrom(element) {
        let optionsLiteral = element.getAttribute(ElementHelper.ViewOptionsAttributeName);
        if (!optionsLiteral) {
            return;
        }
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }
    static getSummaryStrategyFrom(element) {
        return element.getAttribute(ElementHelper.ViewSummaryStrategyAttributeName);
    }
    static getSummaryOptionsFrom(element) {
        let optionsLiteral = element.getAttribute(ElementHelper.SummaryOptionsAttributeName);
        if (!optionsLiteral) {
            return;
        }
        return JsLiteralHelper.literalToJson(optionsLiteral);
    }
}
ElementHelper.ValidatePropertyAttributeName = "validate-property";
ElementHelper.ViewStrategyAttributeName = "view-strategy";
ElementHelper.ViewOptionsAttributeName = "view-options";
ElementHelper.ViewSummaryStrategyAttributeName = "view-summary-strategy";
ElementHelper.SummaryOptionsAttributeName = "summary-options";

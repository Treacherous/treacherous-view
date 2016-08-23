export class ElementHelper
{
    private static jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;

    public static getTriggerArgsFrom(element: HTMLElement, triggerName: string): any {
        var attributeName = `${triggerName}-trigger`;
        var attributeContent = element.getAttribute(attributeName);
        if(!attributeContent) { return {}; }

        var jsLiteralString = `{ ${attributeContent} }`;
        var jsonString = jsLiteralString.replace(ElementHelper.jsLiteralRegex, "$1\"$2\":");
        var jsonObject;
        try { jsonObject = JSON.parse(jsonString); }
        catch(error) { console.log(`unable to process trigger arguments for: ${element} | ${triggerName}`, error); }

        return jsonObject || {};
    }

    public static getTriggersFrom(element: HTMLElement): Array<string> {
        var triggerString = element.getAttribute("validation-triggers");
        if(!triggerString) { return []; }

        var triggerNames = triggerString.replace(" ", "").split(",");
        return triggerNames;
    }

    public static getPropertyRouteFrom(element: HTMLElement): string {
        return element.getAttribute("validate-property");
    }

    public static getStrategyFrom(element: HTMLElement): string {
        return element.getAttribute("validation-strategy");
    }
}
export class JsLiteralHelper
{
    private static jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;

    public static literalToJson(literal: string) {
        var jsLiteralString = `{ ${literal} }`;
        var jsonString = jsLiteralString.replace(JsLiteralHelper.jsLiteralRegex, "$1\"$2\":");
        var jsonObject;
        try { jsonObject = JSON.parse(jsonString); }
        catch(error) { console.warn(`unable to process literal: ${literal}`, error); }
        return jsonObject || {};
    }
}
export class JsLiteralHelper
{
    private static jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;

    public static literalToJson(literal: string) {
        let jsLiteralString = `{ ${literal} }`;
        let jsonString = jsLiteralString.replace(JsLiteralHelper.jsLiteralRegex, "$1\"$2\":");
        let jsonObject;
        try { jsonObject = JSON.parse(jsonString); }
        catch(error) { console.warn(`unable to process literal: ${literal}`, error); }
        return jsonObject || {};
    }
}
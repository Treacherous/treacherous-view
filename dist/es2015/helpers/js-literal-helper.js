export class JsLiteralHelper {
    static literalToJson(literal) {
        let jsLiteralString = `{ ${literal} }`;
        let jsonString = jsLiteralString.replace(JsLiteralHelper.jsLiteralRegex, "$1\"$2\":");
        let jsonObject;
        try {
            jsonObject = JSON.parse(jsonString);
        }
        catch (error) {
            console.warn(`unable to process literal: ${literal}`, error);
        }
        return jsonObject || {};
    }
}
JsLiteralHelper.jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsLiteralHelper = (function () {
    function JsLiteralHelper() {
    }
    JsLiteralHelper.literalToJson = function (literal) {
        var jsLiteralString = "{ " + literal + " }";
        var jsonString = jsLiteralString.replace(JsLiteralHelper.jsLiteralRegex, "$1\"$2\":");
        var jsonObject;
        try {
            jsonObject = JSON.parse(jsonString);
        }
        catch (error) {
            console.warn("unable to process literal: " + literal, error);
        }
        return jsonObject || {};
    };
    JsLiteralHelper.jsLiteralRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;
    return JsLiteralHelper;
}());
exports.JsLiteralHelper = JsLiteralHelper;

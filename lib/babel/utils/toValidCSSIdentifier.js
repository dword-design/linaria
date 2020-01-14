"use strict";

require("core-js/modules/es.string.replace");

exports.__esModule = true;
exports.default = toValidCSSIdentifier;

function toValidCSSIdentifier(s) {
  return s.replace(/[^_0-9a-z]/gi, '_');
}
//# sourceMappingURL=toValidCSSIdentifier.js.map
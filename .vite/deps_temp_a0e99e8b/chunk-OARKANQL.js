import {
  n
} from "./chunk-DH5VWAPI.js";
import {
  m2 as m
} from "./chunk-7ROW6F7C.js";
import {
  a2 as a
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  o
} from "./chunk-RBMTPSG6.js";

// node_modules/@arcgis/core/rest/support/GPMessage.js
var p = new o({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
var i = class extends n {
  constructor(e) {
    super(e), this.description = null, this.type = null;
  }
};
__decorate([m({ type: String, json: { write: true } })], i.prototype, "description", void 0), __decorate([m({ type: String, json: { read: p.read, write: p.write } })], i.prototype, "type", void 0), i = __decorate([a("esri.rest.support.GPMessage")], i);
var a2 = i;

export {
  a2 as a
};
//# sourceMappingURL=chunk-OARKANQL.js.map

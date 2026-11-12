import {
  n
} from "./chunk-DH5VWAPI.js";
import {
  m2
} from "./chunk-7ROW6F7C.js";
import {
  a2 as a,
  m
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import "./chunk-U5N37DRX.js";
import "./chunk-BL6K2K3K.js";
import "./chunk-PXFESYJY.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-WWTPYTMN.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js
var p;
var i = p = class extends n {
  static from(r) {
    return m(p, r);
  }
  constructor(r) {
    super(r), this.sessionId = void 0, this.moment = null;
  }
};
__decorate([m2({ type: String, json: { write: true } })], i.prototype, "sessionId", void 0), __decorate([m2({ type: Date, json: { type: Number, write: { writer: (r, o) => {
  o.moment = r ? r.getTime() : null;
} } } })], i.prototype, "moment", void 0), i = p = __decorate([a("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")], i);
var m3 = i;
export {
  m3 as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-7ZDAG2E7.js.map

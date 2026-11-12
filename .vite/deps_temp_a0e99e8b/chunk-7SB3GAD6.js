import {
  g
} from "./chunk-A5N77F4Q.js";
import {
  _
} from "./chunk-NOLGHAEZ.js";
import {
  l
} from "./chunk-TVGGJOM3.js";
import {
  o
} from "./chunk-TDLZTKXF.js";
import {
  m2 as m
} from "./chunk-7ROW6F7C.js";
import {
  a2
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  a
} from "./chunk-4K6SV242.js";

// node_modules/@arcgis/core/AttributeBinsGraphic.js
var i;
var _a;
var a3 = (_a = class extends l(_) {
  constructor(t) {
    super(t), this.stackedAttributes = null;
  }
  cloneShallow() {
    return new i(Object.assign({ stackedAttributes: this.stackedAttributes }, super.cloneShallow()));
  }
  toJSON() {
    return { ...super.toJSON(), stackedAttributes: a(this.stackedAttributes) };
  }
}, i = _a, _a);
__decorate([m()], a3.prototype, "stackedAttributes", void 0), a3 = i = __decorate([a2("esri.AttributeBinsGraphic")], a3);

// node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js
var i2 = class extends l(g) {
  constructor(r) {
    super(r), this.features = [];
  }
  readFeatures(r, t) {
    return this.readFeaturesWithClass(r, t, a3);
  }
};
__decorate([m({ type: [a3], json: { write: true } })], i2.prototype, "features", void 0), __decorate([o("features")], i2.prototype, "readFeatures", null), i2 = __decorate([a2("esri.rest.support.AttributeBinsFeatureSet")], i2);

export {
  i2 as i
};
//# sourceMappingURL=chunk-7SB3GAD6.js.map

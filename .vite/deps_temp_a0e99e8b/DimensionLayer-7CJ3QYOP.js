import {
  c
} from "./chunk-JPCKANIK.js";
import {
  a as a4
} from "./chunk-YOKAK57B.js";
import {
  b2 as b
} from "./chunk-7OISQMAR.js";
import {
  l as l2
} from "./chunk-KINSHKLK.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-ZVTT4HJZ.js";
import "./chunk-CAKUSA2J.js";
import {
  Y
} from "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-U4RGADP6.js";
import "./chunk-2SHUULFD.js";
import "./chunk-WBIYJFPH.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import {
  b as b2
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-2NWSA4WH.js";
import {
  u
} from "./chunk-CMZYNK44.js";
import {
  f
} from "./chunk-TVGGJOM3.js";
import {
  e as e2,
  o as o2
} from "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import {
  e,
  n
} from "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import {
  O
} from "./chunk-RPZFAICW.js";
import "./chunk-2CXMHEOA.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
import {
  l,
  w
} from "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import {
  _
} from "./chunk-TDLZTKXF.js";
import {
  r
} from "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import {
  s
} from "./chunk-5JATF3X2.js";
import {
  a as a3
} from "./chunk-DH5VWAPI.js";
import {
  m2 as m
} from "./chunk-7ROW6F7C.js";
import {
  a,
  a2,
  x
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import "./chunk-RBMTPSG6.js";
import "./chunk-4GXW7QHT.js";
import "./chunk-U5N37DRX.js";
import "./chunk-BL6K2K3K.js";
import "./chunk-PXFESYJY.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-WWTPYTMN.js";
import "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  o4 as o
} from "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import {
  h
} from "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var a5 = class extends a3(f) {
  constructor(o3) {
    super(o3), this.type = "simple", this.color = new u("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new u("black"), this.textBackgroundColor = new u([255, 255, 255, 0.6]);
  }
  equals(o3) {
    return this === o3 || this.color.equals(o3.color) && this.lineSize === o3.lineSize && this.fontSize === o3.fontSize && this.textColor.equals(o3.textColor) && this.textBackgroundColor.equals(o3.textBackgroundColor);
  }
};
__decorate([m({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], a5.prototype, "type", void 0), __decorate([m({ type: u, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "color", void 0), __decorate([m({ type: Number, cast: o2, nonNullable: true, range: { min: e2(1) }, json: { write: { isRequired: true } } })], a5.prototype, "lineSize", void 0), __decorate([m({ type: Number, cast: o2, nonNullable: true, json: { write: { isRequired: true } } })], a5.prototype, "fontSize", void 0), __decorate([m({ type: u, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "textColor", void 0), __decorate([m({ type: u, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "textBackgroundColor", void 0), a5 = __decorate([a2("esri.analysis.DimensionSimpleStyle")], a5);

// node_modules/@arcgis/core/analysis/dimensionUtils.js
var t = ["horizontal", "vertical", "direct"];

// node_modules/@arcgis/core/analysis/LengthDimension.js
var u2 = class extends a3(f) {
  constructor(t2) {
    super(t2), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = "direct", this.offset = 0, this.orientation = 0;
  }
  get valid() {
    return null != this.startPoint && null != this.endPoint;
  }
  equals(t2) {
    return this === t2 || o(this.startPoint, t2.startPoint) && o(this.endPoint, t2.endPoint) && this.measureType === t2.measureType && this.offset === t2.offset && this.orientation === t2.orientation;
  }
};
__decorate([m({ type: ["length"], json: { write: { isRequired: true } } })], u2.prototype, "type", void 0), __decorate([m({ type: _, json: { write: { isRequired: true } } })], u2.prototype, "startPoint", void 0), __decorate([m({ type: _, json: { write: { isRequired: true } } })], u2.prototype, "endPoint", void 0), __decorate([m({ type: t, nonNullable: true, json: { write: { isRequired: true } } })], u2.prototype, "measureType", void 0), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], u2.prototype, "offset", void 0), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((t2) => a4.normalize(a(t2), 0, true))], u2.prototype, "orientation", void 0), __decorate([m({ readOnly: true })], u2.prototype, "valid", null), u2 = __decorate([a2("esri.analysis.LengthDimension")], u2);

// node_modules/@arcgis/core/analysis/DimensionAnalysis.js
var y = O.ofType(u2);
var f2 = class extends c {
  constructor(e3) {
    super(e3), this.type = "dimension", this.style = new a5(), this.extent = null;
  }
  initialize() {
    this.addHandles(l(() => this._computeExtent(), (e3) => {
      null == e3?.pending && this._set("extent", null != e3 ? e3.extent : null);
    }, w));
  }
  get dimensions() {
    return this._get("dimensions") || new y();
  }
  set dimensions(e3) {
    this._set("dimensions", n(e3, this.dimensions, y));
  }
  get spatialReference() {
    for (const e3 of this.dimensions) {
      if (null != e3.startPoint) return e3.startPoint.spatialReference;
      if (null != e3.endPoint) return e3.endPoint.spatialReference;
    }
    return null;
  }
  get valid() {
    return this.dimensions.every((e3) => e3.valid);
  }
  async waitComputeExtent() {
    const e3 = this._computeExtent();
    return null != e3 ? e3.pending : Promise.resolve();
  }
  _computeExtent() {
    const e3 = this.spatialReference;
    if (null == e3) return { pending: null, extent: null };
    const t2 = [];
    for (const o3 of this.dimensions) null != o3.startPoint && t2.push(o3.startPoint), null != o3.endPoint && t2.push(o3.endPoint);
    const n2 = Y(t2, e3);
    if (null != n2.pending) return { pending: n2.pending, extent: null };
    let s2 = null;
    return null != n2.geometries && (s2 = n2.geometries.reduce((e4, t3) => null == e4 ? null != t3 ? z.fromPoint(t3) : null : null != t3 ? e4.union(z.fromPoint(t3)) : e4, null)), { pending: null, extent: s2 };
  }
  clear() {
    this.dimensions.removeAll();
  }
  equals(e3) {
    return this === e3 || super.equals(e3) && this.style.equals(e3.style) && h(this.dimensions.toArray(), e3.dimensions.toArray(), (e4, t2) => e4.equals(t2));
  }
};
__decorate([m({ type: ["dimension"] })], f2.prototype, "type", void 0), __decorate([m({ cast: e, type: y, nonNullable: true })], f2.prototype, "dimensions", null), __decorate([m({ readOnly: true })], f2.prototype, "spatialReference", null), __decorate([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, nonNullable: true })], f2.prototype, "style", void 0), __decorate([m({ value: null, readOnly: true })], f2.prototype, "extent", void 0), __decorate([m({ readOnly: true })], f2.prototype, "valid", null), f2 = __decorate([a2("esri.analysis.DimensionAnalysis")], f2);

// node_modules/@arcgis/core/layers/DimensionLayer.js
var u3 = class extends b(l2(b2)) {
  constructor(e3) {
    if (super(e3), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new f2(), this.opacity = 1, e3) {
      const { source: t2, style: r2 } = e3;
      t2 && r2 && (t2.style = r2);
    }
  }
  initialize() {
    this.addHandles([l(() => this.source, (e3, t2) => {
      null != t2 && t2.parent === this && (t2.parent = null), null != e3 && (e3.parent = this);
    }, w)]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e3) {
    this.source.style = e3;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e3) {
    this.source === e3 && (this.source = new f2());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e3) {
    this.source = e3;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e3) {
    this.source.dimensions = e3;
  }
  writeDimensions(e3, t2, r2, s2) {
    t2.dimensions = e3.filter(({ startPoint: e4, endPoint: t3 }) => null != e4 && null != t3).toJSON(s2);
  }
};
__decorate([m({ json: { read: false }, readOnly: true })], u3.prototype, "type", void 0), __decorate([m({ type: ["ArcGISDimensionLayer"] })], u3.prototype, "operationalLayerType", void 0), __decorate([m({ nonNullable: true })], u3.prototype, "source", void 0), __decorate([m({ readOnly: true })], u3.prototype, "spatialReference", null), __decorate([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, json: { write: { ignoreOrigin: true } } })], u3.prototype, "style", null), __decorate([m({ readOnly: true })], u3.prototype, "fullExtent", null), __decorate([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u3.prototype, "opacity", void 0), __decorate([m({ type: ["show", "hide"] })], u3.prototype, "listMode", void 0), __decorate([m({ type: O.ofType(u2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], u3.prototype, "dimensions", null), __decorate([r("web-scene", "dimensions")], u3.prototype, "writeDimensions", null), u3 = __decorate([a2("esri.layers.DimensionLayer")], u3);
var d = u3;
export {
  d as default
};
//# sourceMappingURL=DimensionLayer-7CJ3QYOP.js.map

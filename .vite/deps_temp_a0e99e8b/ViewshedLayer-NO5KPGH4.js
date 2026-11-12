import {
  c as c2,
  d
} from "./chunk-GIUVTMNV.js";
import {
  c
} from "./chunk-JPCKANIK.js";
import "./chunk-YQGN74DT.js";
import "./chunk-OP4S5PYC.js";
import "./chunk-DQOOLFC2.js";
import "./chunk-IUYOZV3Q.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import {
  a as a4
} from "./chunk-YOKAK57B.js";
import {
  b2 as b
} from "./chunk-7OISQMAR.js";
import {
  l as l2
} from "./chunk-KINSHKLK.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
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
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
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
  f
} from "./chunk-TVGGJOM3.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import {
  r as r2,
  s as s2
} from "./chunk-HXC5WSBJ.js";
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
  a2
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

// node_modules/@arcgis/core/analysis/Viewshed.js
var u = class extends a3(f) {
  constructor(e2) {
    super(e2), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  get valid() {
    return null != this.observer && this.farDistance > 0;
  }
  equals(e2) {
    return o(this.observer, e2.observer) && this.farDistance === e2.farDistance && this.heading === e2.heading && this.tilt === e2.tilt && this.horizontalFieldOfView === e2.horizontalFieldOfView && this.verticalFieldOfView === e2.verticalFieldOfView && c2(this.feature, e2.feature);
  }
};
__decorate([m({ type: _, json: { write: { isRequired: true } } })], u.prototype, "observer", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], u.prototype, "farDistance", void 0), __decorate([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((e2) => a4.normalize(a(e2), void 0, true))], u.prototype, "heading", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "tilt", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], u.prototype, "horizontalFieldOfView", void 0), __decorate([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "verticalFieldOfView", void 0), __decorate([m(d)], u.prototype, "feature", void 0), __decorate([m({ readOnly: true, json: { read: false } })], u.prototype, "valid", null), u = __decorate([a2("esri.analysis.Viewshed")], u);

// node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
var v = O.ofType(u);
var y = class extends c {
  constructor(e2) {
    super(e2), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(l(() => this._computeExtent(), (e2) => {
      null == e2.pending && (this._extent = e2.extent);
    }, w));
  }
  get viewsheds() {
    return this._get("viewsheds") || new v();
  }
  set viewsheds(e2) {
    this._set("viewsheds", n(e2, this.viewsheds, v));
  }
  get spatialReference() {
    for (const e2 of this.viewsheds) if (null != e2.observer) return e2.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get valid() {
    return this.viewsheds.every((e2) => e2.valid);
  }
  async waitComputeExtent() {
    const e2 = this._computeExtent();
    null != e2.pending && await e2.pending;
  }
  _computeExtent() {
    const { spatialReference: e2 } = this;
    if (null == e2) return { pending: null, extent: null };
    const t = this.viewsheds.filter((e3) => null != e3.observer), r3 = t.map((e3) => e3.observer).toArray(), s3 = Y(r3, e2);
    if (null != s3.pending) return { pending: s3.pending, extent: null };
    return { pending: null, extent: s3.geometries.map((e3, r4) => {
      const s4 = t.at(r4);
      return null != e3 && null != s4 ? this._computeViewshedExtent(this.viewsheds.at(r4), e3) : null;
    }).filter((e3) => null != e3).reduce((e3, t2) => x(e3, t2), null) };
  }
  _computeViewshedExtent(e2, t) {
    const { farDistance: r3, heading: s3, tilt: n2, horizontalFieldOfView: i, verticalFieldOfView: o2 } = e2, { spatialReference: u3 } = t, c3 = i / 2, m2 = o2 / 2, h2 = r3 / u3.metersPerUnit, f2 = [a4.normalize(s3 - c3), s3, a4.normalize(s3 + c3)], v2 = z.fromPoint(t), y3 = (e3) => {
      const t2 = f2.map((t3) => a4.normalize(t3 - e3));
      if (t2[0] > t2[2] || 360 === i) return h2;
      const r4 = t2.map((e4) => Math.abs(e4 > 180 ? 360 - e4 : e4)).reduce((e4, t3) => e4 > t3 ? t3 : e4);
      return r4 > 90 ? 0 : h2 * Math.cos(s2(r4));
    };
    v2.xmax += y3(90), v2.xmin -= y3(-90), v2.ymax += y3(0), v2.ymin -= y3(180);
    const x2 = t.z;
    if (null != x2) {
      let e3 = x2, t2 = x2;
      const s4 = n2 - 90, i2 = r2(s4 + m2, -90, 90), o3 = r2(s4 - m2, -90, 90), l3 = u3?.isGeographic ? r3 : h2;
      e3 += l3 * g(i2), t2 += l3 * g(o3);
      const a5 = w2(m2) * l3, d2 = g(s4) * a5 * (1 - w2(c3));
      n2 < 90 && (e3 -= d2), n2 > 90 && (t2 -= d2), v2.zmax = Math.max(e3, x2), v2.zmin = Math.min(t2, x2);
    }
    return v2;
  }
  equals(e2) {
    return this === e2 || super.equals(e2) && h(this.viewsheds.toArray(), e2.viewsheds.toArray(), (e3, t) => e3.equals(t));
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function x(e2, t) {
  return null == e2 ? t : null == t ? e2 : e2.union(t);
}
function w2(e2) {
  return Math.cos(s2(e2));
}
function g(e2) {
  return Math.sin(s2(e2));
}
__decorate([m({ type: ["viewshed"] })], y.prototype, "type", void 0), __decorate([m({ cast: e, type: v, nonNullable: true })], y.prototype, "viewsheds", null), __decorate([m({ readOnly: true })], y.prototype, "spatialReference", null), __decorate([m()], y.prototype, "_extent", void 0), __decorate([m()], y.prototype, "extent", null), __decorate([m({ readOnly: true })], y.prototype, "valid", null), y = __decorate([a2("esri.analysis.ViewshedAnalysis")], y);

// node_modules/@arcgis/core/layers/ViewshedLayer.js
var y2 = class extends b(l2(b2)) {
  constructor(e2) {
    super(e2), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new y(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l(() => this.source, (e2, r3) => {
      null != r3 && r3.parent === this && (r3.parent = null), null != e2 && (e2.parent = this);
    }, w));
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new y());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(e2) {
    this.source.viewsheds = e2;
  }
  writeViewsheds(e2, r3, s3, t) {
    r3.viewsheds = e2.filter((e3) => e3.valid).toJSON(t);
  }
};
__decorate([m({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), __decorate([m({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), __decorate([m({ type: y, nonNullable: true })], y2.prototype, "source", void 0), __decorate([m({ readOnly: true })], y2.prototype, "spatialReference", null), __decorate([m({ readOnly: true })], y2.prototype, "fullExtent", null), __decorate([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), __decorate([m({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), __decorate([m({ type: O.ofType(u), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), __decorate([r("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = __decorate([a2("esri.layers.ViewshedLayer")], y2);
var u2 = y2;
export {
  u2 as default
};
//# sourceMappingURL=ViewshedLayer-NO5KPGH4.js.map

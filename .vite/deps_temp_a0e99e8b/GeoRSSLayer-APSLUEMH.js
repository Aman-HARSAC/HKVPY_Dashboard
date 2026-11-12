import {
  f as f2
} from "./chunk-MHGT7BS2.js";
import {
  b2 as b,
  d,
  u as u2,
  y
} from "./chunk-7OISQMAR.js";
import {
  j
} from "./chunk-SLIUBAOH.js";
import {
  l
} from "./chunk-KINSHKLK.js";
import "./chunk-ZKYU6D6M.js";
import {
  p
} from "./chunk-J73UGMGX.js";
import "./chunk-5C45ZMDP.js";
import "./chunk-U4PVARIM.js";
import {
  t
} from "./chunk-25APZXN7.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-ZVTT4HJZ.js";
import "./chunk-CAKUSA2J.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-M4KX5WGY.js";
import "./chunk-O6VUD37E.js";
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import {
  a as a2
} from "./chunk-6HP3W5KM.js";
import {
  m as m3,
  u
} from "./chunk-NO6F2VEN.js";
import {
  c,
  m as m2
} from "./chunk-NNAJXNL7.js";
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
import "./chunk-CL6GWXVQ.js";
import {
  b as b2
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-2NWSA4WH.js";
import "./chunk-CMZYNK44.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import "./chunk-E3ECGPOW.js";
import "./chunk-2CXMHEOA.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import {
  o
} from "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import {
  I
} from "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import {
  m2 as m
} from "./chunk-7ROW6F7C.js";
import {
  a2 as a
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
import {
  H2 as H,
  qt
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  f2 as f
} from "./chunk-W6MJCXR6.js";
import {
  s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var P = { base: c, key: "type", typeMap: { "simple-line": m2 }, errorContext: "symbol" };
var R = { base: c, key: "type", typeMap: { "picture-marker": a2, "simple-marker": u }, errorContext: "symbol" };
var k = { base: c, key: "type", typeMap: { "simple-fill": m3 }, errorContext: "symbol" };
var _ = class extends p(f2(b(j(t(l(b2)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, o2) {
    return "string" == typeof e ? { url: e, ...o2 } : e;
  }
  readFeatureCollections(e, o2) {
    return o2.featureCollection.layers.forEach((e2) => {
      const o3 = e2.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && o3.outline?.style.includes("esriSFS") && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && "defaults" !== this.originOf("title") ? e : this.url ? qt(this.url, G) || "GeoRSS" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const o2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(f).then(() => this._fetchService(o2)).then((e2) => {
      this.read(e2, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e) {
    const t2 = this.spatialReference, { data: s2 } = await H(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: I(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e });
    return s2;
  }
  _hasGeometry(e) {
    return this.featureCollections?.some((o2) => o2.featureSet?.geometryType === e && o2.featureSet.features?.length > 0) ?? false;
  }
};
__decorate([m()], _.prototype, "description", void 0), __decorate([m()], _.prototype, "featureCollections", void 0), __decorate([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), __decorate([m({ type: z, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), __decorate([m(u2)], _.prototype, "id", void 0), __decorate([m(d)], _.prototype, "legendEnabled", void 0), __decorate([m({ types: P, json: { write: true } })], _.prototype, "lineSymbol", void 0), __decorate([m({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), __decorate([m({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), __decorate([m({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), __decorate([m({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), __decorate([m(y)], _.prototype, "url", void 0), __decorate([m({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], _.prototype, "title", null), __decorate([m({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = __decorate([a("esri.layers.GeoRSSLayer")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=GeoRSSLayer-APSLUEMH.js.map

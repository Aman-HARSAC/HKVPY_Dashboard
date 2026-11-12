import {
  E,
  R as R2
} from "./chunk-PX4TGTRZ.js";
import {
  R,
  j as j2,
  w
} from "./chunk-VYYE3MMB.js";
import "./chunk-2DDKJLYG.js";
import {
  o
} from "./chunk-4C2DHYUE.js";
import {
  l as l2
} from "./chunk-5YEKOBS4.js";
import {
  s as s2
} from "./chunk-XPR6AEKM.js";
import {
  b2 as b,
  m as m2,
  y
} from "./chunk-7OISQMAR.js";
import {
  j
} from "./chunk-SLIUBAOH.js";
import {
  l
} from "./chunk-KINSHKLK.js";
import "./chunk-ZKYU6D6M.js";
import "./chunk-YY3HPPJV.js";
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
import "./chunk-CL6GWXVQ.js";
import {
  b as b2
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-2NWSA4WH.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-NOPG2N5A.js";
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
import "./chunk-TDLZTKXF.js";
import {
  f as f2
} from "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
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
  H2 as H
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  f2 as f
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-4K6SV242.js";
import {
  has
} from "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/GaussianSplatLayer.js
var E2 = class extends l2(b(j(t(l(s2(o(b2))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "GaussianSplatLayer", this.type = "gaussian-splat", this.opacity = 1, this.minScale = 0, this.maxScale = 0, this.url = null, this.rootTilesetJSON = null, this.fullExtent = new z(-180, -90, 180, 90, this.spatialReference), this.spatialReference = new f2({ wkid: 4326, vcsWkid: 115700 }), this.esriCrsSpatialReference = null, this.esriCrsFullExtent = null;
  }
  get supportedSpatialReferences() {
    return this.initialized && this.esriCrsSpatialReference ? [this.spatialReference, this.esriCrsSpatialReference] : [this.spatialReference];
  }
  get fullExtents() {
    return this.initialized && this.esriCrsFullExtent ? [this.fullExtent, this.esriCrsFullExtent] : [this.fullExtent];
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const r = null != e ? e.signal : null;
    if (!has("enable-feature:gaussianSplatLayer")) throw new s("GaussianSplatLayer-init:not-supported", "This layer is currently not supported.");
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e2) => {
        if (e2.typeKeywords?.includes("GaussianSplat")) return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service" });
      } }, e);
    } catch (s3) {
      f(s3);
    }
    if (this.url) {
      const e2 = H(this.url, { query: { ...this.customParameters, token: this.apiKey }, responseType: "json", signal: r }).then((e3) => {
        this.rootTilesetJSON = e3.data;
        const t2 = R2(this.rootTilesetJSON);
        this.fullExtent = E(this.rootTilesetJSON, false), this.spatialReference = this.fullExtent.spatialReference, t2 && (this.esriCrsFullExtent = E(this.rootTilesetJSON, true), this.esriCrsSpatialReference = this.esriCrsFullExtent.spatialReference);
      }, (e3) => {
        f(e3);
      });
      await e2;
    }
  }
  _validateElevationInfo(e) {
    const t2 = "Gaussian Splat layers";
    j2(i.getLogger(this), w(t2, "absolute-height", e)), j2(i.getLogger(this), R(t2, e));
  }
};
__decorate([m({ type: ["GaussianSplatLayer"] })], E2.prototype, "operationalLayerType", void 0), __decorate([m({ readOnly: true })], E2.prototype, "type", void 0), __decorate([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], E2.prototype, "opacity", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], E2.prototype, "minScale", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], E2.prototype, "maxScale", void 0), __decorate([m(y)], E2.prototype, "url", void 0), __decorate([m({ type: z })], E2.prototype, "fullExtent", void 0), __decorate([m({ type: f2 })], E2.prototype, "spatialReference", void 0), __decorate([m({ readOnly: true })], E2.prototype, "supportedSpatialReferences", null), __decorate([m({ type: [z] })], E2.prototype, "fullExtents", null), __decorate([m({ type: ["show", "hide"] })], E2.prototype, "listMode", void 0), __decorate([m(m2)], E2.prototype, "elevationInfo", null), E2 = __decorate([a("esri.layers.GaussianSplatLayer")], E2);
var L = E2;
export {
  L as default
};
//# sourceMappingURL=GaussianSplatLayer-6537ZHRW.js.map

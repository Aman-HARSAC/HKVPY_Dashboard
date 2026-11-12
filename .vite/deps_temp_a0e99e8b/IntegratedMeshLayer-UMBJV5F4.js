import {
  n
} from "./chunk-ANAD5KI6.js";
import {
  a as a3,
  m as m3,
  p as p2,
  y
} from "./chunk-UC4C57UC.js";
import {
  _
} from "./chunk-HZV5PCB6.js";
import "./chunk-ASEUIR3H.js";
import {
  R,
  j as j2,
  w
} from "./chunk-VYYE3MMB.js";
import "./chunk-BU2Q3LXM.js";
import "./chunk-2K4ROQS6.js";
import "./chunk-LLT4D4WD.js";
import "./chunk-LZ4A2IQS.js";
import "./chunk-IF5GUNS5.js";
import {
  o as o2
} from "./chunk-4C2DHYUE.js";
import {
  l as l3
} from "./chunk-5YEKOBS4.js";
import {
  s as s2
} from "./chunk-XPR6AEKM.js";
import {
  b2 as b,
  m as m2
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
  t as t2
} from "./chunk-25APZXN7.js";
import "./chunk-4UVOIPRT.js";
import "./chunk-ZVTT4HJZ.js";
import "./chunk-CAKUSA2J.js";
import {
  j as j3
} from "./chunk-CCPDCB53.js";
import "./chunk-KV46PYGE.js";
import "./chunk-JJHBCOSL.js";
import "./chunk-BX43VHN2.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-XG5BA6RK.js";
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
import {
  t
} from "./chunk-CL6GWXVQ.js";
import {
  b as b2
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-2NWSA4WH.js";
import {
  l as l2
} from "./chunk-TVGGJOM3.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import "./chunk-E3ECGPOW.js";
import "./chunk-2CXMHEOA.js";
import "./chunk-SJ73CYXJ.js";
import {
  U,
  a as a2
} from "./chunk-O2JWOAJX.js";
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
  p
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  f2 as f
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
var A = class extends _(l3(b(j(t2(l(s2(o2(l2(b2))))))))) {
  constructor(...e) {
    super(...e), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this.path = null, this.definitionExpression = null, this._canReplaceTerrain = false;
  }
  initialize() {
    this.addHandles(a2(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
  }
  normalizeCtorArgs(e, t3) {
    return "string" == typeof e ? { url: e, ...t3 } : e;
  }
  readModifications(e, t3, r) {
    this._modificationsSource = { url: p(e, r), context: r };
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t3 = e?.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (r) {
      f(r);
    }
    if (await this._fetchService(t3), null != this._modificationsSource) {
      const t4 = await n.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", t4, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t3);
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  async saveAs(e, t3) {
    return this._debouncedSaveOperations(1, { ...t3, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(0, e);
  }
  validateLayer(e) {
    if (e.layerType && "IntegratedMesh" !== e.layerType) throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo(e) {
    const t3 = "Integrated mesh layers";
    j2(i.getLogger(this), w(t3, "absolute-height", e)), j2(i.getLogger(this), R(t3, e));
  }
  get replacesTerrain() {
    return this._canReplaceTerrain && this._isUsedAsGroundLayer;
  }
  get _isUsedAsGroundLayer() {
    return t(this.parent);
  }
};
__decorate([m({ type: String, readOnly: true })], A.prototype, "geometryType", void 0), __decorate([m({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), __decorate([m({ type: ["IntegratedMeshLayer"] })], A.prototype, "operationalLayerType", void 0), __decorate([m({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), __decorate([m({ type: p2, readOnly: true, clonable: false })], A.prototype, "nodePages", void 0), __decorate([m({ type: [a3], readOnly: true, clonable: false })], A.prototype, "materialDefinitions", void 0), __decorate([m({ type: [y], readOnly: true, clonable: false })], A.prototype, "textureSetDefinitions", void 0), __decorate([m({ type: [m3], readOnly: true, clonable: false })], A.prototype, "geometryDefinitions", void 0), __decorate([m({ readOnly: true })], A.prototype, "serviceUpdateTimeStamp", void 0), __decorate([m({ type: n, clonable: (e) => e?.clone() ?? e }), j3({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), __decorate([m(m2)], A.prototype, "elevationInfo", null), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), __decorate([m()], A.prototype, "replacesTerrain", null), __decorate([m()], A.prototype, "_isUsedAsGroundLayer", null), __decorate([m()], A.prototype, "_canReplaceTerrain", void 0), A = __decorate([a("esri.layers.IntegratedMeshLayer")], A);
var P = A;
export {
  P as default
};
//# sourceMappingURL=IntegratedMeshLayer-UMBJV5F4.js.map

import {
  p
} from "./chunk-WE2PZ5XM.js";
import "./chunk-GQDI3UCG.js";
import "./chunk-DO4QHVVV.js";
import {
  o as o2
} from "./chunk-WNS6S2PB.js";
import "./chunk-RZFKWVYS.js";
import "./chunk-YVV2C5KB.js";
import "./chunk-HLZJBRL2.js";
import {
  l as l2
} from "./chunk-5YEKOBS4.js";
import {
  b2 as b,
  y
} from "./chunk-7OISQMAR.js";
import {
  j
} from "./chunk-SLIUBAOH.js";
import {
  l
} from "./chunk-KINSHKLK.js";
import "./chunk-ZKYU6D6M.js";
import "./chunk-Q2YWI3MD.js";
import "./chunk-MMRUQKTW.js";
import "./chunk-OH73XB3O.js";
import "./chunk-N4HSWD3N.js";
import {
  m as m2
} from "./chunk-YY3HPPJV.js";
import "./chunk-NBAPQNZI.js";
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
import "./chunk-TB4PV3L4.js";
import "./chunk-2YRG6OI2.js";
import "./chunk-RKUP6IGK.js";
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
import "./chunk-SJ73CYXJ.js";
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
  A,
  H2 as H
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  f2 as f,
  s as s2,
  t2 as t
} from "./chunk-W6MJCXR6.js";
import {
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/support/ElevationTileData.js
var a2 = class {
  constructor(a3, t3, s4, e) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in a3 ? (this.values = a3.pixelData, this.width = a3.width, this.height = a3.height, this.noDataValue = a3.noDataValue) : (this.values = a3, this.width = t3, this.height = s4, this.noDataValue = e);
  }
  get hasNoDataValues() {
    if (null == this._hasNoDataValues) {
      const a3 = this.noDataValue;
      this._hasNoDataValues = this.values.includes(a3);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  get usedMemory() {
    return this.values.byteLength + 256;
  }
  _ensureBounds() {
    if (null != this._minValue) return;
    const { noDataValue: a3, values: t3 } = this;
    let s4 = 1 / 0, e = -1 / 0, i = true;
    for (const u of t3) u === a3 ? this._hasNoDataValues = true : (s4 = u < s4 ? u : s4, e = u > e ? u : e, i = false);
    i ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = s4, this._maxValue = e > -3e38 ? e : 0);
  }
};

// node_modules/@arcgis/core/layers/support/LercDecoder.js
var r = class extends o2 {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (e2) => [e2.buffer] }, e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, r2, t3) {
    return e && 0 !== e.byteLength ? this.invoke({ buffer: e, options: r2 }, t3) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t2.forEach((e, r2) => {
      e === this && t2.delete(r2);
    }), this.destroy());
  }
};
var t2 = /* @__PURE__ */ new Map();
function s3(e = null) {
  let s4 = t2.get(e);
  return s4 || (null != e ? (s4 = new r((r2) => e.immediate.schedule(r2)), t2.set(e, s4)) : (s4 = new r(), t2.set(null, s4))), ++s4.ref, s4;
}

// node_modules/@arcgis/core/layers/ElevationLayer.js
var S = class extends p(l2(b(j(l(b2))))) {
  constructor(...e) {
    super(...e), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s3();
  }
  normalizeCtorArgs(e, r2) {
    return "string" == typeof e ? { url: e, ...r2 } : e;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e, r2) {
    const t3 = r2.capabilities && r2.capabilities.split(",").map((e2) => e2.toLowerCase().trim());
    if (!t3) return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t3.includes("tilemap") } };
  }
  readVersion(e, r2) {
    let t3 = r2.currentVersion;
    return t3 || (t3 = 9.3), t3;
  }
  load(e) {
    const r2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e2) => {
      if (e2.typeKeywords) {
        for (let r3 = 0; r3 < e2.typeKeywords.length; r3++) if ("elevation 3d layer" === e2.typeKeywords[r3].toLowerCase()) return true;
      }
      throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e).catch(f).then(() => this._fetchImageService(r2))), Promise.resolve(this);
  }
  fetchTile(e, t3, i, o3) {
    const s4 = o3?.signal, a3 = { responseType: "array-buffer", signal: s4 }, p2 = { noDataValue: o3?.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e, t3, i, o3)).then(() => H(this.getTileUrl(e, t3, i), a3)).then((e2) => this._lercDecoder.decode(e2.data, p2, s4)).then((e2) => new a2(e2));
  }
  getTileUrl(e, r2, t3) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o3 = A({ ...this.parsedUrl.query, blankTile: !i && null });
    return `${this.parsedUrl.path}/tile/${e}/${r2}/${t3}${o3 ? "?" + o3 : ""}`;
  }
  async queryElevation(e, r2) {
    const { query: t3 } = await import("./ElevationQuery-7ABT577E.js");
    return s2(r2), t3(this, e, r2);
  }
  async createElevationSampler(e, r2) {
    const { createSampler: t3 } = await import("./ElevationQuery-7ABT577E.js");
    return s2(r2), t3(this, e, r2);
  }
  _fetchTileAvailability(e, r2, t3, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r2, t3, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(e) {
    if (this.sourceJSON) return this.sourceJSON;
    const t3 = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: e }, i = await H(this.parsedUrl.path, t3);
    i.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[w];
  }
};
__decorate([m({ readOnly: true })], S.prototype, "capabilities", void 0), __decorate([o("service", "capabilities", ["capabilities"])], S.prototype, "readCapabilities", null), __decorate([m({ json: { read: { source: "copyrightText" } } })], S.prototype, "copyright", void 0), __decorate([m({ readOnly: true, type: m2 })], S.prototype, "heightModelInfo", void 0), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], S.prototype, "path", void 0), __decorate([m({ type: ["show", "hide"] })], S.prototype, "listMode", void 0), __decorate([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "minScale", void 0), __decorate([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "maxScale", void 0), __decorate([m({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], S.prototype, "opacity", void 0), __decorate([m({ type: ["ArcGISTiledElevationServiceLayer"] })], S.prototype, "operationalLayerType", void 0), __decorate([m()], S.prototype, "sourceJSON", void 0), __decorate([m({ json: { read: false }, value: "elevation", readOnly: true })], S.prototype, "type", void 0), __decorate([m(y)], S.prototype, "url", void 0), __decorate([m()], S.prototype, "version", void 0), __decorate([o("version", ["currentVersion"])], S.prototype, "readVersion", null), S = __decorate([a("esri.layers.ElevationLayer")], S);
var w = /* @__PURE__ */ Symbol("default-fetch-tile");
S.prototype.fetchTile[w] = true;
var T = S;
export {
  T as default
};
//# sourceMappingURL=ElevationLayer-4JZUJZFL.js.map

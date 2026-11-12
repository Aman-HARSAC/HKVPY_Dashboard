import {
  o as o2
} from "./chunk-TWDAPOST.js";
import {
  l as l2,
  z as z2
} from "./chunk-YVV2C5KB.js";
import {
  e
} from "./chunk-HLZJBRL2.js";
import {
  f as f2
} from "./chunk-MHGT7BS2.js";
import {
  b2 as b
} from "./chunk-7OISQMAR.js";
import {
  l
} from "./chunk-KINSHKLK.js";
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
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-U4RGADP6.js";
import "./chunk-2SHUULFD.js";
import "./chunk-WBIYJFPH.js";
import "./chunk-UJKR5KHP.js";
import {
  b as b2
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-2NWSA4WH.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import {
  i as i3
} from "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
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
  _
} from "./chunk-TDLZTKXF.js";
import {
  f
} from "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import {
  i as i2,
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
import "./chunk-W6MJCXR6.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/BaseTileLayer.js
var d;
var h = new e(0, 0, 0);
var g = d = class extends p(t(f2(b2))) {
  constructor() {
    super(...arguments), this.tileInfo = z2.create({ spatialReference: f.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new z(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, f.WebMercator), this.spatialReference = f.WebMercator;
  }
  addResolvingPromise(e2) {
    super.addResolvingPromise(e2);
  }
  getTileBounds(e2, t2, r, o3) {
    const s2 = o3 || i3();
    return h.level = e2, h.row = t2, h.col = r, h.extent = s2, this.tileInfo.updateTileInfo(h), s2;
  }
  fetchTile(e2, r, o3, s2 = {}) {
    const { signal: i4 } = s2, a2 = this.getTileUrl(e2, r, o3), p2 = { responseType: "image", signal: i4, query: { ...this.refreshParameters } };
    return H(a2 ?? "", p2).then((e3) => e3.data);
  }
  async fetchImageBitmapTile(e2, r, o3, s2 = {}) {
    const { signal: i4 } = s2;
    if (this.fetchTile !== d.prototype.fetchTile) {
      const t2 = await this.fetchTile(e2, r, o3, s2);
      return o2(t2, e2, r, o3, i4);
    }
    const a2 = this.getTileUrl(e2, r, o3) ?? "", p2 = { responseType: "blob", signal: i4, query: { ...this.refreshParameters } }, { data: l3 } = await H(a2, p2);
    return o2(l3, e2, r, o3, i4);
  }
  getTileUrl() {
    throw new s("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
__decorate([m({ type: z2 })], g.prototype, "tileInfo", void 0), __decorate([m({ type: ["show", "hide"] })], g.prototype, "listMode", void 0), __decorate([m({ readOnly: true, value: "base-tile" })], g.prototype, "type", void 0), __decorate([m({ nonNullable: true })], g.prototype, "fullExtent", void 0), __decorate([m()], g.prototype, "spatialReference", void 0), g = d = __decorate([a("esri.layers.BaseTileLayer")], g);

// node_modules/@arcgis/core/layers/BingMapsLayer.js
var h2 = new o({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" });
var b3 = "https://dev.virtualearth.net";
i2(i.getLogger("esri.layers.BingMapsLayer"), "esri.layers.BingMapsLayer", { version: "4.33", warnOnce: true });
var w = class extends p(b(l(g))) {
  constructor(e2) {
    super(e2), this.type = "bing-maps", this.tileInfo = new z2({ size: [256, 256], dpi: 96, origin: new _({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: f.WebMercator }), spatialReference: f.WebMercator, lods: [new l2({ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }), new l2({ level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }), new l2({ level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }), new l2({ level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }), new l2({ level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }), new l2({ level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }), new l2({ level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }), new l2({ level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }), new l2({ level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }), new l2({ level: 10, resolution: 152.874056570411, scale: 577790.554289 }), new l2({ level: 11, resolution: 76.4370282850732, scale: 288895.277144 }), new l2({ level: 12, resolution: 38.2185141425366, scale: 144447.638572 }), new l2({ level: 13, resolution: 19.1092570712683, scale: 72223.819286 }), new l2({ level: 14, resolution: 9.55462853563415, scale: 36111.909643 }), new l2({ level: 15, resolution: 4.77731426794937, scale: 18055.954822 }), new l2({ level: 16, resolution: 2.38865713397468, scale: 9027.977411 }), new l2({ level: 17, resolution: 1.19432856685505, scale: 4513.988705 }), new l2({ level: 18, resolution: 0.597164283559817, scale: 2256.994353 }), new l2({ level: 19, resolution: 0.298582141647617, scale: 1128.497176 }), new l2({ level: 20, resolution: 0.1492910708238085, scale: 564.248588 })] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e2) {
    this._set("bingMetadata", e2);
  }
  get copyright() {
    return null != this.bingMetadata ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return h2.toJSON(this.style);
  }
  get bingLogo() {
    return null != this.bingMetadata ? this.bingMetadata.brandLogoUri : null;
  }
  load(e2) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e2, t2, r) {
    if (!this.loaded || null == this.bingMetadata) return null;
    const o3 = this.bingMetadata.resourceSets[0].resources[0], a2 = o3.imageUrlSubdomains[t2 % o3.imageUrlSubdomains.length], s2 = this._getQuadKey(e2, t2, r);
    return o3.imageUrl.replace("{subdomain}", a2).replace("{quadkey}", s2);
  }
  async fetchAttributionData() {
    return this.load().then(() => {
      if (null == this.bingMetadata) return null;
      return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e2) => ({ attribution: e2.attribution, coverageAreas: e2.coverageAreas.map((e3) => ({ zoomMin: e3.zoomMin, zoomMax: e3.zoomMax, score: 1, bbox: [e3.bbox[0], e3.bbox[1], e3.bbox[2], e3.bbox[3]] })) })) };
    });
  }
  _getMetadata() {
    const e2 = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return H(`${b3}/REST/v1/Imagery/Metadata/${e2}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e3) => {
      const t2 = e3.data;
      if (200 !== t2.statusCode) throw new s("bingmapslayer:getmetadata", t2.statusDescription);
      if (this.bingMetadata = t2, 0 === this.bingMetadata.resourceSets.length) throw new s("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length) throw new s("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e3) => {
      throw new s("bingmapslayer:getmetadata", e3.message);
    });
  }
  _getPortalBingKey() {
    return H(this.portalUrl ?? "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e2) => {
      if (!e2.data.bingKey) throw new s("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e2.data.bingKey;
    }).catch((e2) => {
      throw new s("bingmapslayer:getportalbingkey", e2.message);
    });
  }
  _getQuadKey(e2, t2, r) {
    let o3 = "";
    for (let a2 = e2; a2 > 0; a2--) {
      let e3 = 0;
      const s2 = 1 << a2 - 1;
      0 !== (r & s2) && (e3 += 1), 0 !== (t2 & s2) && (e3 += 2), o3 += e3.toString();
    }
    return o3;
  }
};
__decorate([m({ json: { read: false, write: false }, value: null })], w.prototype, "bingMetadata", null), __decorate([m({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], w.prototype, "type", void 0), __decorate([m({ type: z2 })], w.prototype, "tileInfo", void 0), __decorate([m({ type: String, readOnly: true, json: { read: false, write: false } })], w.prototype, "copyright", null), __decorate([m({ type: String, json: { write: false, read: false } })], w.prototype, "key", void 0), __decorate([m({ type: h2.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: h2.read } } })], w.prototype, "style", void 0), __decorate([m({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], w.prototype, "operationalLayerType", null), __decorate([m({ type: String, json: { write: false, read: false } })], w.prototype, "culture", void 0), __decorate([m({ type: String, json: { write: false, read: false } })], w.prototype, "region", void 0), __decorate([m({ type: String, json: { write: true, read: true } })], w.prototype, "portalUrl", void 0), __decorate([m({ type: Boolean, json: { write: false, read: false } })], w.prototype, "hasAttributionData", void 0), __decorate([m({ type: String, readOnly: true })], w.prototype, "bingLogo", null), w = __decorate([a("esri.layers.BingMapsLayer")], w);
var v = w;
export {
  v as default
};
//# sourceMappingURL=BingMapsLayer-K5QISI5O.js.map

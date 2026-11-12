import {
  n
} from "./chunk-ANAD5KI6.js";
import {
  E
} from "./chunk-PX4TGTRZ.js";
import {
  R,
  j as j2,
  w
} from "./chunk-VYYE3MMB.js";
import "./chunk-2DDKJLYG.js";
import {
  o as o2
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
import "./chunk-TVGGJOM3.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import {
  M
} from "./chunk-E3ECGPOW.js";
import "./chunk-2CXMHEOA.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
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
  H2 as H,
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

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var D = class extends l2(b(j(t2(l(s2(o2(b2))))))) {
  readModifications(e, t3, o3) {
    this._modificationsSource = { url: p(e, o3), context: o3 };
  }
  initialize() {
    this.addHandles(a2(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
  }
  constructor(e) {
    super(e), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.modifications = null, this._modificationsSource = null, this.spatialReference = new f2({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new z(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0, this._rootTilesetJSON = null, this._rootTileset = null, this._key = null, this._session = null, this._rootRequestPromise = null;
  }
  set elevationInfo(e) {
    null != e && "absolute-height" !== e.mode || this._set("elevationInfo", e), this._validateElevationInfo(e);
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  get rootTilesetJSON() {
    return this._rootTilesetJSON;
  }
  get rootTileset() {
    return this._rootTileset;
  }
  get key() {
    return this._key;
  }
  get session() {
    return this._session;
  }
  _findSessionParameter(e) {
    const t3 = [e];
    for (; t3?.length > 0; ) {
      const e2 = t3.pop();
      if (!e2) return;
      for (const [r, i2] of Object.entries(e2)) {
        if ("uri" === r) try {
          const e3 = new URL("https://tmp" + i2).searchParams.get("session");
          if (e3) return e3;
        } catch (o3) {
        }
        "object" == typeof i2 && null !== i2 && t3.push(i2);
      }
    }
    return null;
  }
  async requestRootAndSession(e) {
    const i2 = (e2, t3) => new s("3dtiles-init:" + e2, t3);
    return this._rootRequestPromise || (this._rootRequestPromise = new Promise((o3, n2) => {
      this.url || n2(i2("url-missing", "Layer url missing")), this._key = this.customParameters ? this.customParameters.key : null;
      new Promise((e2, o4) => {
        if (this.replacesTerrain && !this._key) {
          const r = this.portalItem?.portal || this.parent?.portalItem?.portal || M.getDefault();
          r.signIn().then(() => {
            r.g3dTilesEnabled ? H(r.restUrl + "/portals/self/modules/g3dtiles", { responseType: "json", query: { f: "json" } }).then((t3) => {
              this._key = t3.data.keyString, e2();
            }, () => o4(i2("g3dtiles-key-error", "Error fetching Google 3D Tiles key from portal"))) : o4(i2("g3dTilesEnabled-false", "Google 3D Tiles are not enabled on Portal " + r.url));
          }, () => o4(i2("sign-in-failed", "Error signing in to Portal")));
        } else e2();
      }).then(() => {
        H(this.url, { query: this._key ? { key: this._key, token: this.apiKey } : { token: this.apiKey }, responseType: "array-buffer", signal: e }).then((e2) => {
          try {
            this._rootTilesetJSON = JSON.parse(new TextDecoder().decode(e2.data));
          } catch (t3) {
            return void n2(i2("root-parse-failed", "Error parsing root tile, details: " + t3));
          }
          this._rootTilesetJSON ? (this._session = this._findSessionParameter(this._rootTilesetJSON), this._rootTileset = e2.data, this.fullExtent = E(this._rootTilesetJSON), o3(), this._rootRequestPromise = null) : n2(i2("root-is-null", "Root tile is null."));
        }, (e2) => {
          f(e2), n2(i2("root-load-failed", "Error loading root tile")), this._rootRequestPromise = null, i.getLogger("IntegratedMesh3DTilesLayer").error("Layer loading failed", e2);
        });
      }, (e2) => n2(e2));
    })), this._rootRequestPromise;
  }
  async _doLoad(e) {
    const t3 = null != e ? e.signal : null;
    if (this._isUsedAsGroundLayer) throw new s("3dtiles-init:not-supported-in-groundlayers", "Layer is not supported in basemap.");
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e2) => {
        if (e2.typeKeywords?.includes("IntegratedMesh")) return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, e);
    } catch (r) {
      f(r);
    }
    if (null != this._modificationsSource) {
      const t4 = await n.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", t4, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this.requestRootAndSession(t3);
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  get hasAttributionData() {
    return false;
  }
  async fetchAttributionData() {
    return {};
  }
  _validateElevationInfo(e) {
    const t3 = "Integrated mesh 3d tiles layers";
    j2(i.getLogger(this), w(t3, "absolute-height", e)), j2(i.getLogger(this), R(t3, e));
  }
  get replacesTerrain() {
    return false;
  }
  get _isUsedAsGroundLayer() {
    return t(this.parent);
  }
  get hasGoogleUrl() {
    return !!this.url?.match(/.+\.googleapis.com/);
  }
};
__decorate([m({ type: ["IntegratedMesh3DTilesLayer"] })], D.prototype, "operationalLayerType", void 0), __decorate([m({ type: n, clonable: (e) => e.clone() }), j3({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], D.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], D.prototype, "readModifications", null), __decorate([m({ type: f2 })], D.prototype, "spatialReference", void 0), __decorate([m({ type: z })], D.prototype, "fullExtent", void 0), __decorate([m(m2)], D.prototype, "elevationInfo", null), __decorate([m({ type: ["show", "hide"] })], D.prototype, "listMode", void 0), __decorate([m(y)], D.prototype, "url", void 0), __decorate([m({ readOnly: true })], D.prototype, "type", void 0), __decorate([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], D.prototype, "path", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], D.prototype, "minScale", void 0), __decorate([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], D.prototype, "maxScale", void 0), __decorate([m()], D.prototype, "replacesTerrain", null), __decorate([m()], D.prototype, "_isUsedAsGroundLayer", null), __decorate([m()], D.prototype, "hasGoogleUrl", null), D = __decorate([a("esri.layers.IntegratedMesh3DTilesLayer")], D);
var O = D;
export {
  O as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-VUNUKGFJ.js.map

import {
  i as i2,
  o
} from "./chunk-T2LSCP5N.js";
import "./chunk-SSPOLLJ7.js";
import "./chunk-AWNAXMXW.js";
import "./chunk-ZVVRXPEY.js";
import "./chunk-Z2VNECWP.js";
import "./chunk-MBWURBUA.js";
import {
  h as h2
} from "./chunk-Y34KVYB3.js";
import "./chunk-YV6ABWAQ.js";
import "./chunk-BKFJDMH7.js";
import "./chunk-VZ2NWL7V.js";
import {
  P,
  t
} from "./chunk-VYYE3MMB.js";
import "./chunk-DQOOLFC2.js";
import "./chunk-GKYYWAKB.js";
import "./chunk-YQLWLFLO.js";
import "./chunk-IUYOZV3Q.js";
import "./chunk-ZTT7LSRG.js";
import {
  i,
  n,
  r
} from "./chunk-RCSIGYMT.js";
import "./chunk-AV2HQ3H2.js";
import "./chunk-5NXULY7B.js";
import "./chunk-C5FWCZWA.js";
import "./chunk-4LGH2O4H.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import "./chunk-BKL2NWNR.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-Q2YWI3MD.js";
import "./chunk-MMRUQKTW.js";
import "./chunk-WUQC3FBO.js";
import "./chunk-TTY3P4AN.js";
import "./chunk-TDIAO7MQ.js";
import "./chunk-ZNBUZ7FK.js";
import "./chunk-GIPM3SSV.js";
import "./chunk-SOVAWJ7Z.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-NBAPQNZI.js";
import "./chunk-CAKUSA2J.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-N75LYAXI.js";
import "./chunk-WWZXCVZD.js";
import {
  l as l2
} from "./chunk-2SHUULFD.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import {
  a as a2,
  h,
  l
} from "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import {
  b,
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
import "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import {
  p,
  s
} from "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var f = class extends b {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this, { layer: t2 } = this.layerSource, i3 = null != e && "3d" === e.type;
    if (!i3 || "subtype-group" === t2.type) return i();
    const r2 = async (i4, r3) => (await p(e.whenLayerView(t2), r3)).elevationAlignPointsInFeatures(i4, r3);
    return i(i3, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: r2 });
  }
  get _snappingElevationFilter() {
    const { view: e } = this, t2 = null != e && "3d" === e.type && "subtype-group" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    return null != e && "3d" === e.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, async (i3, n2) => {
      const o2 = await e.whenLayerView(t2);
      return s(n2), o2.queryForSymbologySnapping({ candidates: i3, spatialReference: e.spatialReference }, n2);
    }) : n();
  }
  get _layerView() {
    const { view: e } = this;
    if (null == e) return null;
    const { layer: t2 } = this.layerSource;
    return e.allLayerViews.find((e2) => e2.layer === t2);
  }
  get _layerView3D() {
    const { view: e } = this;
    return null == e || "2d" === e.type ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    null != e && "3d" === e.type && "subtype-group" !== t2.type && this.addHandles([e.elevationProvider.on("elevation-change", ({ context: e2 }) => {
      const { elevationInfo: i3 } = t2;
      P(e2, i3) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), l(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h), l(() => null != this._layerView3D ? this._layerView3D.layer?.renderer : null, () => this._symbologySnappingFetcher.notifySymbologyChange(), h), a2(() => this._layerView3D?.layer, ["edits", "apply-edits"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  constructor(e) {
    super(e), this.view = null, this.updating = false, this._memoizedMakeGetGroundElevation = t(i2);
  }
  refresh() {
  }
  async fetchCandidates(e, t2) {
    const { layer: i3 } = this.layerSource, { source: n2 } = i3;
    if (!n2?.querySnapping) return [];
    const o2 = i3.createQuery();
    this._layerView && "effectiveDisplayFilter" in this._layerView && (o2.where = l2(o2.where, this._layerView.effectiveDisplayFilter?.where));
    const a3 = "returnZ" in i3 ? i3.returnZ : void 0, s2 = h2({ parameters: e, mode: this.view?.type ?? "2d", returnZ: a3, filter: o2 }), p2 = await n2.querySnapping(s2, { signal: t2 });
    s(t2);
    const y = e.coordinateHelper.spatialReference, c = await this._snappingElevationAligner.alignCandidates(p2.candidates, y, t2);
    s(t2);
    const g = await this._symbologySnappingFetcher.fetch(c, t2);
    s(t2);
    const m2 = 0 === g.length ? c : [...c, ...g], d = this._snappingElevationFilter.filter(s2, m2), v = this._memoizedMakeGetGroundElevation(this.view, y);
    return d.map((e2) => o(e2, v));
  }
};
__decorate([m({ constructOnly: true })], f.prototype, "layerSource", void 0), __decorate([m({ constructOnly: true })], f.prototype, "view", void 0), __decorate([m()], f.prototype, "_snappingElevationAligner", null), __decorate([m()], f.prototype, "_snappingElevationFilter", null), __decorate([m()], f.prototype, "_symbologySnappingFetcher", null), __decorate([m()], f.prototype, "_layerView", null), __decorate([m()], f.prototype, "_layerView3D", null), __decorate([m()], f.prototype, "_symbologySnappingSupported", null), f = __decorate([a("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-TY4PUS7V.js.map

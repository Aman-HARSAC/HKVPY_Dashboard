import {
  b
} from "./chunk-VUEXSBZU.js";
import {
  d
} from "./chunk-Q6JE466B.js";
import "./chunk-OTZD4WFU.js";
import "./chunk-6WMXSEHS.js";
import "./chunk-DLJ6Y2UM.js";
import "./chunk-7IQLH32C.js";
import "./chunk-RDFDFTO6.js";
import "./chunk-JVEDEHYM.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-GY7MB74R.js";
import "./chunk-HB6HRUDJ.js";
import "./chunk-U4PVARIM.js";
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-N75LYAXI.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-CMZYNK44.js";
import "./chunk-PVAT2NHO.js";
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
import "./chunk-SJ73CYXJ.js";
import {
  U,
  l
} from "./chunk-O2JWOAJX.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
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
import "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends d {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new O();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e2) => {
      e2.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), l(() => this.layer?.visibilityMode, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, U), l(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, U)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  get creatingLayerViews() {
    return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer) ?? false;
  }
  set layerViews(i) {
    this._set("layerViews", n(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i, e2) => i + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e2) => e2.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((i2) => {
      const e2 = this._findLayerViewForLayer(i2);
      return !!e2?.visible;
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i2) => l(() => i2.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i2.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i2 : null)), U)).toArray(), "grouplayerview:visible");
    const e2 = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e2?.visible ? e2 : null));
  }
  _applyVisibility(i, e2) {
    this._hasLayerViewVisibleOverrides() && ("inherited" === this.layer?.visibilityMode ? i() : "exclusive" === this.layer?.visibilityMode && e2());
  }
};
__decorate([m({ readOnly: true })], h.prototype, "creatingLayerViews", null), __decorate([m({ cast: e })], h.prototype, "layerViews", null), __decorate([m({ readOnly: true })], h.prototype, "updatingProgress", null), __decorate([m()], h.prototype, "view", void 0), h = __decorate([a("esri.views.layers.GroupLayerView")], h);

// node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js
var o = class extends b(h) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
o = __decorate([a("esri.views.2d.layers.GroupLayerView2D")], o);
var s = o;
export {
  s as default
};
//# sourceMappingURL=GroupLayerView2D-T5LV4XRZ.js.map

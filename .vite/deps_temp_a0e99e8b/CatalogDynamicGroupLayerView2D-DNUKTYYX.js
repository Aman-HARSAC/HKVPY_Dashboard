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
import {
  l
} from "./chunk-2SHUULFD.js";
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
import "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import {
  O
} from "./chunk-RPZFAICW.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
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
import {
  L,
  e,
  t,
  y
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var l2 = /* @__PURE__ */ Symbol();
var y2 = (y3) => {
  const u = y3;
  let c2 = class extends u {
    constructor(...e2) {
      super(...e2), this.layerViews = new O(), this._debouncedUpdate = L(async () => {
        const { layer: e3, parent: r } = this, t2 = r?.footprintLayerView;
        let i3 = [];
        const s = this._createQuery();
        if (s && t2) {
          const { features: r2 } = await t2.queryFeatures(s);
          this.suspended || (i3 = r2.map((r3) => e3.acquireLayer(r3)));
        }
        this.removeHandles(l2), this.addHandles(i3, l2);
      });
    }
    get creatingLayerViews() {
      return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer) ?? false;
    }
    isUpdating() {
      return this.creatingLayerViews || this.layer.updating || this.layerViews.some((e2) => e2.updating);
    }
    enableLayerUpdates() {
      return t([this._updatingHandles.addWhen(() => false === this.parent?.footprintLayerView?.dataUpdating, () => this.updateLayers()), this._updatingHandles.add(() => [this.layer.maximumVisibleSublayers, this.layer.parent?.orderBy, this.parent?.footprintLayerView?.filter, this.parent?.footprintLayerView?.timeExtent, this.suspended], () => this.updateLayers()), e(() => this.removeHandles(l2))]);
    }
    updateLayers() {
      this.suspended ? this.removeHandles(l2) : this._updatingHandles.addPromise(y(this._debouncedUpdate()).catch((e2) => {
        i.getLogger(this).error(e2);
      }));
    }
    _createQuery() {
      const e2 = this.parent?.footprintLayerView, r = this.layer?.parent;
      if (!e2 || !r || r.destroyed) return null;
      const { layer: { maximumVisibleSublayers: t2 }, view: { scale: i3 } } = this;
      if (!t2) return null;
      const { itemTypeField: s, itemSourceField: a2, itemNameField: o, minScaleField: d2, maxScaleField: p, objectIdField: l3, orderBy: y4 } = r, u2 = l(`${d2} IS NULL OR ${i3} <= ${d2} OR ${d2} = 0`, `${p} IS NULL OR ${i3} >= ${p}`), c3 = y4?.find((e3) => e3.field && !e3.valueExpression), m2 = e2.createQuery();
      if (m2.returnGeometry = false, m2.num = t2, m2.outFields = [l3, a2, o], m2.where = l(m2.where, u2), null != this.unsupportedItemTypes) {
        const e3 = `${s} NOT IN (${this.unsupportedItemTypes.map((e4) => `'${e4}'`)})`;
        m2.where = l(m2.where, e3);
      }
      return c3?.field && (m2.orderByFields = [`${c3.field} ${"descending" === c3.order ? "DESC" : "ASC"}`], m2.outFields.push(c3.field)), m2;
    }
  };
  return __decorate([m({ readOnly: true })], c2.prototype, "creatingLayerViews", null), __decorate([m()], c2.prototype, "layer", void 0), __decorate([m()], c2.prototype, "layerViews", void 0), __decorate([m({ readOnly: true })], c2.prototype, "unsupportedItemTypes", void 0), __decorate([m()], c2.prototype, "parent", void 0), __decorate([m({ readOnly: true })], c2.prototype, "isUpdating", null), c2 = __decorate([a("esri.views.layers.CatalogDynamicGroupLayerView")], c2), c2;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogDynamicGroupLayerView2D.js
var i2 = class extends y2(b(d)) {
  constructor() {
    super(...arguments), this.unsupportedItemTypes = ["Scene Service"], this.layerViews = new O();
  }
  attach() {
    this.addAttachHandles([this.layerViews.on("after-changes", () => this._updateStageChildren()), this.enableLayerUpdates()]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
    this.updateLayers();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
i2 = __decorate([a("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], i2);
var c = i2;
export {
  c as default
};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-DNUKTYYX.js.map

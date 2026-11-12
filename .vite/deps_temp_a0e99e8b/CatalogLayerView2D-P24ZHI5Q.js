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
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/layers/CatalogLayerView.js
var i = (i2) => {
  const a2 = i2;
  let s = class extends a2 {
    constructor(...r) {
      super(...r), this.layerViews = new O();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.dynamicGroupLayer);
    }
    get footprintLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.footprintLayer);
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return __decorate([m()], s.prototype, "layer", void 0), __decorate([m()], s.prototype, "layerViews", void 0), __decorate([m({ readOnly: true })], s.prototype, "dynamicGroupLayerView", null), __decorate([m({ readOnly: true })], s.prototype, "footprintLayerView", null), s = __decorate([a("esri.views.layers.CatalogLayerView")], s), s;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogLayerView2D.js
var l = class extends i(b(d)) {
  constructor() {
    super(...arguments), this.layerViews = new O();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: true })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, r) => this.container.addChildAt(e.container, r));
  }
};
__decorate([m()], l.prototype, "layerViews", void 0), l = __decorate([a("esri.views.2d.layers.CatalogLayerView2D")], l);
var c = l;
export {
  c as default
};
//# sourceMappingURL=CatalogLayerView2D-P24ZHI5Q.js.map

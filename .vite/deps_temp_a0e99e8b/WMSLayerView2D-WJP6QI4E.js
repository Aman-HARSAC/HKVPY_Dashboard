import {
  M
} from "./chunk-BE2RDAPC.js";
import {
  s as s3
} from "./chunk-JZT7EVE3.js";
import "./chunk-7IWWVLXS.js";
import "./chunk-HQBA5CXB.js";
import {
  i as i3
} from "./chunk-XL2AWKK2.js";
import {
  i as i2
} from "./chunk-TUP4XPID.js";
import {
  b
} from "./chunk-VUEXSBZU.js";
import {
  d as d2
} from "./chunk-Q6JE466B.js";
import "./chunk-NW5QA5L7.js";
import "./chunk-HVH25NPP.js";
import "./chunk-OTZD4WFU.js";
import "./chunk-KLDMYKH3.js";
import "./chunk-OFGBFLAH.js";
import "./chunk-2SJNYXD3.js";
import {
  a as a2
} from "./chunk-VBILRQVR.js";
import "./chunk-5M6PZ6TD.js";
import "./chunk-6WMXSEHS.js";
import "./chunk-3NWXKZCR.js";
import "./chunk-4DIUWYHT.js";
import "./chunk-7TTBI2HO.js";
import "./chunk-LHXB2FVV.js";
import "./chunk-VTQ3M52V.js";
import "./chunk-5XPSWKAI.js";
import "./chunk-GXBKLQ4R.js";
import "./chunk-52224I66.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-JKDLXAJZ.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-ZUHK7ZF3.js";
import "./chunk-Y37XMD6B.js";
import "./chunk-RZFKWVYS.js";
import "./chunk-4LGH2O4H.js";
import "./chunk-DLJ6Y2UM.js";
import "./chunk-E7XZD3BU.js";
import "./chunk-7IQLH32C.js";
import "./chunk-RDFDFTO6.js";
import "./chunk-JVEDEHYM.js";
import "./chunk-DHTE4BFD.js";
import "./chunk-MRVM6XH5.js";
import "./chunk-6XIPZBT7.js";
import "./chunk-FISZH27W.js";
import "./chunk-2KJCRN2H.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import "./chunk-GY7MB74R.js";
import "./chunk-YVV2C5KB.js";
import "./chunk-HLZJBRL2.js";
import "./chunk-HB6HRUDJ.js";
import "./chunk-WUQC3FBO.js";
import "./chunk-U4PVARIM.js";
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-GLGQSUTI.js";
import "./chunk-N75LYAXI.js";
import "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-CMZYNK44.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
import {
  l
} from "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
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
  d,
  s as s2,
  u2 as u
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/layers/WMSLayerView.js
var m2 = (m3) => {
  const n = m3;
  let c = class extends n {
    initialize() {
      this.exportImageParameters = new a2({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return i3(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(e, r) {
      const { layer: s4 } = this;
      if (!e) throw new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s4 });
      const { popupEnabled: p } = s4;
      if (!p) throw new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: p });
      const a3 = this.createFetchPopupFeaturesQuery(e);
      if (!a3) return [];
      const { extent: i4, width: m4, height: n2, x: c2, y: h } = a3;
      if (!(i4 && m4 && n2)) throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: i4, width: m4, height: n2 });
      const u2 = await s4.fetchFeatureInfo(i4, m4, n2, c2, h);
      return s2(r), u2;
    }
  };
  return __decorate([m()], c.prototype, "exportImageParameters", void 0), __decorate([m({ readOnly: true })], c.prototype, "exportImageVersion", null), __decorate([m()], c.prototype, "layer", void 0), __decorate([m({ readOnly: true })], c.prototype, "timeExtent", null), c = __decorate([a("esri.views.layers.WMSLayerView")], c), c;
};

// node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js
var g = class extends m2(i2(b(d2))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new s3();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((e2) => {
      d(e2) || i.getLogger(this).error(e2);
    });
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: r } = e;
    this.bitmapContainer = new s3(), this.container.addChild(this.bitmapContainer), this.strategy = new M({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(l(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r } = this, { x: i4, y: s4 } = e, { spatialReference: a3 } = t;
    let o, m3 = 0, p = 0;
    if (r.children.some((e2) => {
      const { width: t2, height: r2, resolution: h2, x: c2, y: d4 } = e2, u2 = c2 + h2 * t2, g2 = d4 - h2 * r2;
      return i4 >= c2 && i4 <= u2 && s4 <= d4 && s4 >= g2 && (o = new z({ xmin: c2, ymin: g2, xmax: u2, ymax: d4, spatialReference: a3 }), m3 = t2, p = r2, true);
    }), !o) return null;
    const h = o.width / m3, c = Math.round((i4 - o.xmin) / h), d3 = Math.round((o.ymax - s4) / h);
    return { extent: o, width: m3, height: p, x: c, y: d3 };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r, i4) {
    return this.layer.fetchImageBitmap(e, t, r, { timeExtent: this.timeExtent, ...i4 });
  }
};
__decorate([m()], g.prototype, "strategy", void 0), g = __decorate([a("esri.views.2d.layers.WMSLayerView2D")], g);
var y = g;
export {
  y as default
};
//# sourceMappingURL=WMSLayerView2D-WJP6QI4E.js.map

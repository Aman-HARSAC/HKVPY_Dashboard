import {
  M
} from "./chunk-BE2RDAPC.js";
import {
  s
} from "./chunk-JZT7EVE3.js";
import "./chunk-7IWWVLXS.js";
import "./chunk-HQBA5CXB.js";
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
import "./chunk-CMZYNK44.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
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
  d
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var h = class extends i2(b(d2)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      d(t2) || i.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new s(), this.container.addChild(this._bitmapContainer), this._strategy = new M({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e, r) {
    return this.layer.fetchImageBitmap(t, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
__decorate([m()], h.prototype, "_strategy", void 0), h = __decorate([a("esri.views.2d.layers.BaseDynamicLayerView2D")], h);
var c = h;
export {
  c as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-SYBMUTJ3.js.map

import {
  j
} from "./chunk-SLIUBAOH.js";
import {
  l
} from "./chunk-KINSHKLK.js";
import "./chunk-ZKYU6D6M.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-M4KX5WGY.js";
import "./chunk-O6VUD37E.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-CL6GWXVQ.js";
import {
  b
} from "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
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
import {
  A
} from "./chunk-U5N37DRX.js";
import "./chunk-BL6K2K3K.js";
import "./chunk-PXFESYJY.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-WWTPYTMN.js";
import "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import {
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/UnsupportedLayer.js
var l2 = class extends j(l(b)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e, o) => {
      A(() => {
        const e2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let t = "Unsupported layer type";
        e2 && (t += " " + e2), o(new s("layer:unsupported-layer-type", t, { layerType: e2 }));
      });
    }));
  }
  read(e, r) {
    const o = { resourceInfo: e };
    null != e.id && (o.id = e.id), null != e.title && (o.title = e.title), super.read(o, r);
  }
  write(e, r) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
__decorate([m({ readOnly: true })], l2.prototype, "resourceInfo", void 0), __decorate([m({ type: ["show", "hide"] })], l2.prototype, "listMode", void 0), __decorate([m({ type: Boolean, readOnly: false })], l2.prototype, "persistenceEnabled", void 0), __decorate([m({ json: { read: false }, readOnly: true, value: "unsupported" })], l2.prototype, "type", void 0), l2 = __decorate([a("esri.layers.UnsupportedLayer")], l2);
var a2 = l2;
export {
  a2 as default
};
//# sourceMappingURL=UnsupportedLayer-ZERBHUSG.js.map

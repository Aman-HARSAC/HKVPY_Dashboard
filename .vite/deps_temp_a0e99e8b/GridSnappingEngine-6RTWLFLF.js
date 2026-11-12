import {
  n
} from "./chunk-FZMT5JQ4.js";
import {
  i as i2
} from "./chunk-F3XDZIJW.js";
import "./chunk-Z2VNECWP.js";
import "./chunk-25XCDK4Y.js";
import {
  d
} from "./chunk-Y34KVYB3.js";
import "./chunk-YV6ABWAQ.js";
import {
  f,
  l as l2
} from "./chunk-BKFJDMH7.js";
import {
  l,
  t,
  u as u2
} from "./chunk-XPWPAFPT.js";
import "./chunk-VZ2NWL7V.js";
import "./chunk-VYYE3MMB.js";
import "./chunk-DQOOLFC2.js";
import "./chunk-GKYYWAKB.js";
import "./chunk-YQLWLFLO.js";
import "./chunk-IUYOZV3Q.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-AV2HQ3H2.js";
import "./chunk-5NXULY7B.js";
import "./chunk-C5FWCZWA.js";
import "./chunk-4LGH2O4H.js";
import "./chunk-H7NF3WNO.js";
import {
  w
} from "./chunk-2DDKJLYG.js";
import {
  L
} from "./chunk-UJ7GKG37.js";
import "./chunk-PRLR6XRF.js";
import "./chunk-A5YSIKNU.js";
import "./chunk-YOKAK57B.js";
import "./chunk-MOHPT53R.js";
import "./chunk-BKL2NWNR.js";
import {
  u
} from "./chunk-2HCEQ7ZS.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
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
import {
  W,
  b as b2
} from "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-N75LYAXI.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-2SHUULFD.js";
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
import {
  s
} from "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import {
  N2 as N
} from "./chunk-34BRYRUD.js";
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
import "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js
var w2 = class extends b {
  constructor(t2) {
    super(t2), this.options = null;
  }
  destroy() {
    this._set("options", null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    return this.grid?.rotateWithMap ? 0 : s(this.view.rotation ?? 0);
  }
  get gridRotation() {
    return s(this.grid?.rotation ?? 0);
  }
  get gridCenter() {
    const { spatialReference: t2, grid: e } = this;
    if (!e || !t2 || !b2(e.center.spatialReference, t2)) return null;
    try {
      const r = W(e.center, t2), i3 = t2.isWrappable && null != this.view?.center ? L(r.x, this.view.center.x, t2) : r.x;
      return l2(i3, r.y, r.z);
    } catch (i3) {
      return i.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.", i3), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: t2, grid: e } = this;
    if (!e || !t2) return 1;
    const { majorLineInterval: r, dynamicScaling: i3 } = e;
    return r < 1 ? null : l(r, t2, i3);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: t2 } = this;
    return t2 ? N(t2.spacing, t2.units, "meters") : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: t2 } = this;
    return null == t2 ? null : t2 * u(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: t2 } = this.view;
    return this.gridCenter ? u2(this.gridCenter[0], this.gridCenter[1], t2) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: t2, viewMetersPerPixel: e } = this;
    return e && t2 ? t2 / e : null;
  }
  get updating() {
    return null != this.grid && null != this.spatialReference && null == this.viewMetersPerSRUnit;
  }
  async fetchCandidates(t2, e, r) {
    const { options: i3, view: n2 } = this;
    if (!i3?.effectiveGridEnabled || !n2.grid || r.feature?.attributes && d in r.feature.attributes) return [];
    const o = r.coordinateHelper.arrayToPoint(t2), s2 = i3.distance * ("touch" === r.pointer ? i3.touchSensitivityMultiplier : 1);
    return this.fetchCandidatesSync(o, s2);
  }
  fetchCandidatesSync(t2, e) {
    const r = [], { grid: i3, effectiveViewRotation: n2, gridRotation: o, gridCenter: s2, viewMetersPerPixel: a2, viewMetersPerSRUnit: c, offsetScaleFactor: u3, spatialReference: g, gridMetersPerStride: f2, pixelsPerStride: m2 } = this;
    if (!(i3 && a2 && c && s2 && g && u3 && f2 && m2)) return r;
    if (!i3.dynamicScaling && m2 < t) return r;
    if (!b2(t2.spatialReference, g)) return r;
    const S = W(t2, g), w3 = l2(S.x, S.y, S.z), x = P(w3, -o, s2, -n2), C = f2 / c * u3, U = R(x, C, s2), { shouldSnapX: b3, shouldSnapY: L2 } = j(U, x, e, a2, c);
    if (!b3 && !L2) return [];
    const z = l2((b3 ? U : x)[0], (L2 ? U : x)[1]), E = P(z, o, s2, n2), F = P(U, o, s2, n2);
    if (L2) {
      const t3 = M(U, x, C, "y"), e2 = P(t3, o, s2, n2);
      r.push(new i2({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    if (b3) {
      const t3 = M(U, x, C, "x"), e2 = P(t3, o, s2, n2);
      r.push(new i2({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    return b3 && L2 && r.push(new n(E, r[0], r[1], false)), r;
  }
};
__decorate([m({ constructOnly: true })], w2.prototype, "view", void 0), __decorate([m()], w2.prototype, "options", void 0), __decorate([m()], w2.prototype, "grid", null), __decorate([m()], w2.prototype, "effectiveViewRotation", null), __decorate([m()], w2.prototype, "gridRotation", null), __decorate([m()], w2.prototype, "gridCenter", null), __decorate([m()], w2.prototype, "offsetScaleFactor", null), __decorate([m()], w2.prototype, "spatialReference", null), __decorate([m()], w2.prototype, "gridMetersPerStride", null), __decorate([m()], w2.prototype, "viewMetersPerPixel", null), __decorate([m()], w2.prototype, "viewMetersPerSRUnit", null), __decorate([m()], w2.prototype, "pixelsPerStride", null), __decorate([m()], w2.prototype, "updating", null), w2 = __decorate([a("esri.views.interactive.snapping.GridSnappingEngine")], w2);
var P = (t2, e, r, i3) => {
  const n2 = f(t2[0], t2[1], t2[2]);
  return w(n2, w(n2, n2, r, e), r, i3);
};
var R = (t2, e, r) => {
  const i3 = (t2[0] - r[0]) / e, n2 = (t2[1] - r[1]) / e, o = Math.trunc(i3), s2 = Math.trunc(n2), a2 = Math.round(i3 % 1), p = Math.round(n2 % 1), l3 = r[0] + (o + a2) * e, c = r[1] + (s2 + p) * e;
  return l2(l3, c);
};
var j = (t2, e, r, i3, n2) => {
  if (i3 <= 0) return { shouldSnapX: false, shouldSnapY: false };
  const o = (t2[0] - e[0]) / i3, s2 = (t2[1] - e[1]) / i3;
  return { shouldSnapX: Math.abs(o * n2) < r, shouldSnapY: Math.abs(s2 * n2) < r };
};
var M = (t2, e, r, i3) => {
  if ("y" === i3) {
    const i4 = e[0] > t2[0] ? 1 : -1;
    return l2(t2[0] + r * i4, t2[1]);
  }
  const n2 = e[1] > t2[1] ? 1 : -1;
  return l2(t2[0], t2[1] + r * n2);
};
export {
  w2 as GridSnappingEngine
};
//# sourceMappingURL=GridSnappingEngine-6RTWLFLF.js.map

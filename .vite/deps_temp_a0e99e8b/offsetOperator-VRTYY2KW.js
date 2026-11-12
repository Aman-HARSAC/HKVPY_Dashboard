import {
  j,
  w
} from "./chunk-XDCJDK53.js";
import {
  Be,
  Ee,
  Re,
  Ue
} from "./chunk-GMTAZ6K3.js";
import "./chunk-3Z5JSQVJ.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-GYG7YE62.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-U6KP2EF3.js";
import {
  F
} from "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-DH5VWAPI.js";
import "./chunk-7ROW6F7C.js";
import "./chunk-DYRGLTSD.js";
import "./chunk-A44PNKPT.js";
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
import {
  N
} from "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/operators/json/offsetOperator.js
var u = { round: 0, bevel: 1, miter: 2, square: 3 };
function a(t, o, m = {}) {
  const { miterLimit: a2 = 10, flattenError: c2 = 0, joins: f = "round", unit: p } = m, j2 = Ee(t);
  p && j2 && (o = F(o, p, j2));
  const l = Re(t), x = l.getSpatialReference();
  return Ue(w(l.getGeometry(), x, o, u[f], a2, c2), x);
}
function c(e, i, a2 = {}) {
  const { miterLimit: c2 = 10, flattenError: f = 0, joins: p = "round", unit: j2 } = a2, l = Ee(e);
  j2 && l && (i = F(i, j2, l));
  const [x, d] = Be(e);
  return j(x, d, i, u[p], c2, f).map((t) => Ue(t, d)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=offsetOperator-VRTYY2KW.js.map

import {
  f,
  l
} from "./chunk-6EP6AZQK.js";
import "./chunk-X2MFPE6F.js";
import "./chunk-WCTNFDIP.js";
import "./chunk-WQNPUDXY.js";
import "./chunk-75RW7Z2A.js";
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

// node_modules/@arcgis/core/geometry/operators/json/bufferOperator.js
function a(t, o, m = {}) {
  const { unit: a2 } = m, c2 = Ee(t);
  a2 && c2 && (o = F(o, a2, c2));
  const u = Re(t), p = u.getSpatialReference();
  return Ue(f(u.getGeometry(), p, o), p);
}
function c(e, i, a2 = {}) {
  let { maxDeviation: c2 = NaN, maxVerticesInFullCircle: u = 96, union: p = false, unit: f2 } = a2;
  const l2 = Ee(e);
  f2 && l2 && (i = i.map((t) => F(t, f2, l2)), c2 && (c2 = F(c2, f2, l2)));
  const [j, x] = Be(e);
  return l(j, x, i, c2, u, p).map((t) => Ue(t, x)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=bufferOperator-CAKJT76W.js.map

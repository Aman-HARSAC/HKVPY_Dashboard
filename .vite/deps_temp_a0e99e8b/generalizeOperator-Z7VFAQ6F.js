import {
  o,
  t
} from "./chunk-N2K5ZPBS.js";
import "./chunk-WCTNFDIP.js";
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
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/operators/json/generalizeOperator.js
function u(r, a, u2 = {}) {
  const { removeDegenerateParts: i2 = false, unit: c } = u2, m = Ee(r);
  c && m && (a = F(a, c, m));
  const p = Re(r), l = t(p.getGeometry(), a, i2);
  return null == l ? null : Ue(l, p.getSpatialReference());
}
function i(t2, o2, u2 = {}) {
  const { removeDegenerateParts: i2 = false, unit: c } = u2, m = Ee(t2);
  c && m && (o2 = F(o2, c, m));
  const [p, l] = Be(t2);
  return o(p, o2, i2).map((e) => Ue(e, l));
}
export {
  u as execute,
  i as executeMany
};
//# sourceMappingURL=generalizeOperator-Z7VFAQ6F.js.map

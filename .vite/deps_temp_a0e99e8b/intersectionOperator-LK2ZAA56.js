import {
  o,
  u
} from "./chunk-CL6ZTTAQ.js";
import {
  Be,
  Re,
  Ue,
  Ve
} from "./chunk-GMTAZ6K3.js";
import "./chunk-3Z5JSQVJ.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-GYG7YE62.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
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

// node_modules/@arcgis/core/geometry/operators/json/intersectionOperator.js
function c(e, t) {
  const a = Re(e), c2 = a.getSpatialReference();
  return Ue(o(a.getGeometry(), Ve(t), c2), c2);
}
function i(r, o2) {
  const [c2, i2] = Be(r);
  return u(c2, Ve(o2), i2, 7).map((e) => Ue(e, i2)).filter(N);
}
export {
  c as execute,
  i as executeMany
};
//# sourceMappingURL=intersectionOperator-LK2ZAA56.js.map

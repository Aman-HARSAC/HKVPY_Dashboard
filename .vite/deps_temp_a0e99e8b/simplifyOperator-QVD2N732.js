import {
  e,
  o,
  u
} from "./chunk-FO4OITXD.js";
import {
  Be,
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
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/operators/json/simplifyOperator.js
function p(t) {
  const r = Re(t), c = r.getSpatialReference();
  return Ue(e(r.getGeometry(), c, false), c);
}
function a(e2) {
  const [r, o2] = Be(e2);
  return u(r, o2, false).map((e3) => Ue(e3, o2));
}
function i(e2) {
  const t = Re(e2);
  return o(t.getGeometry(), t.getSpatialReference(), false);
}
export {
  p as execute,
  a as executeMany,
  i as isSimple
};
//# sourceMappingURL=simplifyOperator-QVD2N732.js.map

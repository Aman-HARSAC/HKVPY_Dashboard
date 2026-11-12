import {
  D,
  _,
  w
} from "./chunk-2W5OWLER.js";
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
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/operators/json/convexHullOperator.js
function a(t) {
  const r = Re(t);
  return Ue(w(r.getGeometry()), r.getSpatialReference());
}
function c(e, r = {}) {
  const { merge: o = false } = r, [u, a2] = Be(e);
  return _(u, o).map((e2) => Ue(e2, a2));
}
function p(e) {
  return D(Ve(e));
}
export {
  a as execute,
  c as executeMany,
  p as isConvex
};
//# sourceMappingURL=convexHullOperator-NZRK2W2A.js.map

import {
  c,
  i
} from "./chunk-6VLBUSGM.js";
import {
  F,
  n,
  r
} from "./chunk-4UOM2HCU.js";
import "./chunk-7ROW6F7C.js";
import "./chunk-DYRGLTSD.js";
import "./chunk-A44PNKPT.js";
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

// node_modules/@arcgis/core/geometry/operators/support/geographicTransformationUtils.js
var i2;
var s;
var c2;
var a;
function p() {
  return !!i2 && r();
}
async function u() {
  if (!p()) {
    const [t, o, r2, p2] = await Promise.all([import("./Envelope2D-333EIQW7.js"), import("./ProjectionTransformation-YQFTRVGV.js").then(({ queryTransformationList: n2 }) => n2), import("./SpatialReference-ELVDX42I.js").then(({ injectPe: n2 }) => n2), import("./apiConverter-TLZHCSYQ.js"), n()]);
    c2 = t.Envelope2D.construct, a = t.Envelope2D.constructEmpty(), i2 = o, r2(F), s = p2.fromSpatialReference;
  }
}
function m(n2, t, e = null) {
  const o = e ? l(e) : a, r2 = i2(0, s(n2), s(t), o, 1, true);
  return r2.length > 0 ? h(r2[0]) : null;
}
function f(n2, t, e = null) {
  const o = e ? l(e) : a;
  return i2(0, s(n2), s(t), o, 0, true).map((n3) => h(n3));
}
function l(n2) {
  return c2(n2.xmin, n2.ymin, n2.xmax, n2.ymax);
}
function h(n2) {
  const t = new c();
  for (let e = 0; e < n2.count(); e++) {
    const o = n2.getStep(e);
    t.steps.push(new i({ wkid: o.getID(), isInverse: o.isInverted() }));
  }
  return t;
}
export {
  m as getTransformation,
  f as getTransformations,
  p as isLoaded,
  u as load
};
//# sourceMappingURL=geographicTransformationUtils-CYY7OZF6.js.map

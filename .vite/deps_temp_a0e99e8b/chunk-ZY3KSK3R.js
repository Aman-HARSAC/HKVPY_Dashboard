import {
  s
} from "./chunk-JJZLVRAQ.js";
import {
  F,
  n,
  r
} from "./chunk-4UOM2HCU.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorProject.js
var o;
function u() {
  return !!o && r();
}
async function c() {
  if (!u()) {
    const [n2, t] = await Promise.all([import("./OperatorProject-EDYXI4UP.js"), import("./SpatialReference-ELVDX42I.js").then(({ injectPe: n3 }) => n3), n()]);
    o = new n2.OperatorProject(), t(F);
  }
}
function s2(n2, e) {
  return o.execute(n2, e, null);
}
function a(e, r2) {
  const t = o.executeMany(new s(e), r2, null);
  return Array.from(t);
}
function m() {
  return o.supportsCurves();
}

export {
  u,
  c,
  s2 as s,
  a,
  m
};
//# sourceMappingURL=chunk-ZY3KSK3R.js.map

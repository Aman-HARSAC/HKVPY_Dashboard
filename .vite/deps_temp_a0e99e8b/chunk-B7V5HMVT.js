import {
  v
} from "./chunk-OHBYMNL4.js";
import {
  s
} from "./chunk-DQOOLFC2.js";
import {
  _,
  c,
  r
} from "./chunk-2DDKJLYG.js";
import {
  n,
  t
} from "./chunk-NOPG2N5A.js";

// node_modules/@arcgis/core/geometry/support/triangle.js
function j(t2) {
  return t2 ? { p0: t(t2.p0), p1: t(t2.p1), p2: t(t2.p2) } : { p0: n(), p1: n(), p2: n() };
}
function v2(t2, e, n2) {
  const r2 = e[0] - t2[0], o = e[1] - t2[1], s3 = n2[0] - t2[0], c3 = n2[1] - t2[1];
  return 0.5 * Math.abs(r2 * c3 - o * s3);
}
function S(t2, o, s3) {
  return c(M2, o, t2), c(O, s3, t2), 0.5 * r(_(M2, M2, O));
}
var w = new s(v);
var x = new s(() => j());
var M2 = n();
var O = n();

export {
  v2 as v,
  S
};
//# sourceMappingURL=chunk-B7V5HMVT.js.map

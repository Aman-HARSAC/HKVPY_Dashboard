import {
  C,
  Z,
  j,
  x
} from "./chunk-MTUKHQKJ.js";
import {
  Km
} from "./chunk-3Z5JSQVJ.js";
import {
  s
} from "./chunk-JJZLVRAQ.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorDifference.js
var t = new Km();
function o(n2, r, o2) {
  return t.execute(n2, r, o2, null);
}
function e(r, o2, e2) {
  const s3 = t.executeMany(new s(r), new s([o2]), e2, null);
  return Array.from(s3);
}
function s2() {
  return t.supportsCurves();
}

// node_modules/@arcgis/core/chunks/differenceOperator.js
function n(e2, t2) {
  const n2 = C(e2);
  return j(o(x(e2), x(t2), Z(n2)), n2);
}
function u(e2, r) {
  const n2 = e2.map(x), u2 = C(e2);
  return e(n2, x(r), Z(u2)).map((e3) => j(e3, u2));
}
var c = s2();
var m = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, executeMany: u, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  u,
  c,
  m
};
//# sourceMappingURL=chunk-ZD4L5R2R.js.map

import {
  f as f4
} from "./chunk-MIG4OKAJ.js";
import {
  l as l5
} from "./chunk-HW4UQQKF.js";
import {
  n
} from "./chunk-IHW4OXUY.js";
import {
  u as u2
} from "./chunk-IKVQGOZP.js";
import {
  p as p3
} from "./chunk-5X5HNLPJ.js";
import {
  p as p2
} from "./chunk-7NX2COJX.js";
import {
  c as c4
} from "./chunk-GRUH6ZIP.js";
import "./chunk-YHXHEPYA.js";
import "./chunk-FO4OITXD.js";
import {
  D,
  _,
  q,
  w
} from "./chunk-2W5OWLER.js";
import {
  g as g2
} from "./chunk-6F4KBPNN.js";
import "./chunk-IIJIYCNQ.js";
import {
  f as f2,
  m as m2
} from "./chunk-4JTSZITY.js";
import {
  i as i6
} from "./chunk-WP3I572A.js";
import {
  l as l3
} from "./chunk-SYPODYA4.js";
import {
  g,
  l
} from "./chunk-EZLQAJW3.js";
import "./chunk-MCUYWXSP.js";
import {
  c as c3
} from "./chunk-5EMKGQ4N.js";
import "./chunk-N2K5ZPBS.js";
import {
  f as f3,
  l as l2,
  x as x2
} from "./chunk-6EP6AZQK.js";
import "./chunk-X2MFPE6F.js";
import "./chunk-WCTNFDIP.js";
import {
  a,
  c,
  i,
  s,
  u
} from "./chunk-BXNMLR5J.js";
import "./chunk-CL6ZTTAQ.js";
import {
  o,
  r,
  s as s2
} from "./chunk-47CRWQCI.js";
import {
  m as m3
} from "./chunk-ZD4L5R2R.js";
import {
  i as i7
} from "./chunk-OMDPJ2JZ.js";
import {
  i as i4
} from "./chunk-EQNKPMVR.js";
import {
  i as i5
} from "./chunk-BRIWFJPC.js";
import {
  i as i3
} from "./chunk-RYBQ3VJ5.js";
import {
  f,
  m
} from "./chunk-GO5P6RUL.js";
import "./chunk-BIXDJUP4.js";
import {
  t as t3
} from "./chunk-LDUHJDO5.js";
import {
  t
} from "./chunk-FEUBT4TL.js";
import {
  t as t4
} from "./chunk-I5HDKRLD.js";
import {
  t as t2
} from "./chunk-2JSUFV7N.js";
import {
  l as l4
} from "./chunk-5G2TIV6E.js";
import {
  y
} from "./chunk-ZOU4HYNH.js";
import {
  i as i2
} from "./chunk-W6S2YVPV.js";
import {
  u as u3
} from "./chunk-MXTDUTRC.js";
import "./chunk-XDCJDK53.js";
import {
  e as e2
} from "./chunk-J6U6ARLA.js";
import {
  p
} from "./chunk-G3XIH7AI.js";
import "./chunk-WQNPUDXY.js";
import "./chunk-OD723H25.js";
import {
  c as c2
} from "./chunk-LLVHJAW5.js";
import "./chunk-75RW7Z2A.js";
import {
  C,
  Z,
  d,
  j,
  x
} from "./chunk-MTUKHQKJ.js";
import "./chunk-FAIX6EUL.js";
import "./chunk-GMTAZ6K3.js";
import {
  ul
} from "./chunk-3Z5JSQVJ.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-GYG7YE62.js";
import {
  e
} from "./chunk-JTZJWVKG.js";
import "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-U4ORDVXL.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import {
  F,
  N2
} from "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
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

// node_modules/@arcgis/core/chunks/geodesicBufferOperator.js
var p4;
var u4;
var m4;
var c5;
var l6;
function f5() {
  return !!p4 && s();
}
async function y2() {
  if (!f5()) {
    const [e3] = await Promise.all([import("./apiConverter-TLZHCSYQ.js"), u()]);
    p4 = e3.fromGeometry, u4 = e3.fromSpatialReference, m4 = e3.getSpatialReference, c5 = e3.toPolygon, l6 = a();
  }
}
function g3(e3, r2, o2 = {}) {
  let { curveType: s8 = "geodesic", maxDeviation: i10 = NaN, unit: l8 } = o2;
  l8 && (r2 = N2(r2, l8, "meters"), i10 && (i10 = N2(i10, l8, "meters")));
  const f6 = m4(e3);
  return c5(c(p4(e3), u4(f6), e2[s8], r2, i10), f6);
}
function d2(r2, o2, s8 = {}) {
  let { curveType: a7 = "geodesic", maxDeviation: l8 = NaN, union: f6 = false, unit: y4 } = s8;
  y4 && (o2 = o2.map((e3) => N2(e3, y4, "meters")), l8 && (l8 = N2(l8, y4, "meters")));
  const g4 = r2.map(p4), d3 = m4(r2);
  return i(g4, u4(d3), e2[a7], o2, l8, f6).map((e3) => c5(e3, d3)).filter(N);
}
var v = Object.freeze(Object.defineProperty({ __proto__: null, execute: g3, executeMany: d2, isLoaded: f5, load: y2, get supportsCurves() {
  return l6;
} }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/bufferOperator.js
function p5(e3, t5, s8 = {}) {
  const { unit: p12 } = s8, m7 = C(e3);
  return p12 && (t5 = F(t5, p12, m7)), d(f3(x(e3), Z(m7), t5), m7);
}
function m5(t5, o2, p12 = {}) {
  let { maxDeviation: m7 = NaN, maxVerticesInFullCircle: c12 = 96, union: l8 = false, unit: f6 } = p12;
  const x3 = C(t5);
  f6 && (o2 = o2.map((e3) => F(e3, f6, x3)), m7 && (m7 = F(m7, f6, x3)));
  const j2 = t5.map(x);
  return l2(j2, Z(x3), o2, m7, c12, l8).map((e3) => d(e3, x3)).filter(N);
}
var c6 = x2();
var l7 = Object.freeze(Object.defineProperty({ __proto__: null, execute: p5, executeMany: m5, supportsCurves: c6 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/convexHullOperator.js
function u5(e3) {
  const r2 = C(e3);
  return j(w(x(e3)), r2);
}
function p6(e3, o2 = {}) {
  const { merge: t5 = false } = o2, u10 = e3.map(x), p12 = C(e3);
  return _(u10, t5).map((e4) => j(e4, p12));
}
function c7(e3) {
  return D(x(e3));
}
var i8 = q();
var m6 = Object.freeze(Object.defineProperty({ __proto__: null, execute: u5, executeMany: p6, isConvex: c7, supportsCurves: i8 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/crossesOperator.js
var s3 = new t();
function a2(e3) {
  const a7 = C(e3);
  return s3.accelerateGeometry(x(e3), Z(a7), 1);
}
function n2(e3, r2) {
  return s3.execute(x(e3), x(r2), Z(e3.spatialReference), null);
}
var c8 = s3.supportsCurves();
var p7 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a2, execute: n2, supportsCurves: c8 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/disjointOperator.js
var s4 = new ul();
function a3(e3) {
  const a7 = C(e3);
  return s4.accelerateGeometry(x(e3), Z(a7), 1);
}
function n3(e3, t5) {
  return s4.execute(x(e3), x(t5), Z(e3.spatialReference));
}
var c9 = s4.supportsCurves();
var p8 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a3, execute: n3, supportsCurves: c9 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/overlapsOperator.js
var s5 = new t2();
function a4(e3) {
  const a7 = C(e3);
  return s5.accelerateGeometry(x(e3), Z(a7), 1);
}
function n4(e3, r2) {
  return s5.execute(x(e3), x(r2), Z(e3.spatialReference), null);
}
var p9 = s5.supportsCurves();
var u6 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a4, execute: n4, supportsCurves: p9 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/touchesOperator.js
var s6 = new t3();
function a5(e3) {
  const a7 = C(e3);
  return s6.accelerateGeometry(x(e3), Z(a7), 1);
}
function n5(e3, r2) {
  return s6.execute(x(e3), x(r2), Z(e3.spatialReference), null);
}
var u7 = s6.supportsCurves();
var c10 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a5, execute: n5, supportsCurves: u7 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/unionOperator.js
function u8(e3, r2) {
  const u10 = C(e3);
  return j(r(x(e3), x(r2), Z(u10)), u10);
}
function p10(e3) {
  const o2 = e3.map(x), u10 = C(e3);
  return j(o(o2, Z(u10)), u10);
}
var c11 = s2();
var i9 = Object.freeze(Object.defineProperty({ __proto__: null, execute: u8, executeMany: p10, supportsCurves: c11 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/withinOperator.js
var s7 = new t4();
function a6(e3) {
  const a7 = C(e3);
  return s7.accelerateGeometry(x(e3), Z(a7), 1);
}
function n6(e3, r2) {
  return s7.execute(x(e3), x(r2), Z(e3.spatialReference), null);
}
var p11 = s7.supportsCurves();
var u9 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a6, execute: n6, supportsCurves: p11 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/arcade/geometry/operators.js
function y3(r2, e3, o2, s8) {
  const t5 = new i2().rotate(e3, o2, s8);
  return p(r2, t5);
}
var D2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
function v2(r2) {
  const e3 = new e();
  return !c2(r2, e3) && D2.has(e3.m_reason);
}
async function A() {
  await Promise.all([m(), y2(), l(), m2()]);
}
export {
  i3 as area,
  l7 as buffer,
  p2 as centroid,
  i4 as clip,
  u2 as contains,
  m6 as convexHull,
  p7 as crosses,
  i5 as cut,
  l3 as densify,
  m3 as difference,
  p8 as disjoint,
  i6 as distance,
  l4 as equals,
  u3 as executeOffset,
  c3 as generalize,
  v as geodesicBuffer,
  f as geodeticArea,
  g as geodeticDensify,
  f2 as geodeticLength,
  l5 as intersection,
  p3 as intersects,
  v2 as isSelfIntersecting,
  c4 as labelPoint,
  n as length,
  A as loadAll,
  u6 as overlaps,
  g2 as proximity,
  y as relate,
  y3 as rotate,
  f4 as simplify,
  i7 as symmetricDifference,
  c10 as touches,
  i9 as union,
  u9 as within
};
//# sourceMappingURL=operators-GCOZWUWL.js.map

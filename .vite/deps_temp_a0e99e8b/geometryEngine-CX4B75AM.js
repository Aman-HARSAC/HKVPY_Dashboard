import {
  e
} from "./chunk-BLAOSNV4.js";
import "./chunk-PAB34USM.js";
import {
  m as m2
} from "./chunk-D3ZX65FB.js";
import {
  P,
  y3 as y
} from "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
import {
  _,
  o2 as o
} from "./chunk-TDLZTKXF.js";
import {
  f
} from "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import "./chunk-7ROW6F7C.js";
import {
  m
} from "./chunk-DYRGLTSD.js";
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

// node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js
var r = { convertToGEGeometry: s, exportPoint: a, exportPolygon: c, exportPolyline: h, exportMultipoint: m3, exportExtent: x };
function s(e2, n) {
  if (null == n) return null;
  let t = "cache" in n ? n.cache._geVersion : void 0;
  return null == t && (t = e2.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t)), t;
}
function a(e2, n, o3) {
  const i2 = e2.hasZ(n), r2 = e2.hasM(n), s3 = new _({ x: e2.getPointX(n), y: e2.getPointY(n), spatialReference: o3 });
  return i2 && (s3.z = e2.getPointZ(n)), r2 && (s3.m = e2.getPointM(n)), s3.cache._geVersion = n, s3;
}
function c(e2, n, t) {
  const i2 = new P({ rings: e2.exportPaths(n), hasZ: e2.hasZ(n), hasM: e2.hasM(n), spatialReference: t });
  return i2.cache._geVersion = n, i2;
}
function h(e2, n, t) {
  const o3 = new y({ paths: e2.exportPaths(n), hasZ: e2.hasZ(n), hasM: e2.hasM(n), spatialReference: t });
  return o3.cache._geVersion = n, o3;
}
function m3(e2, t, o3) {
  const i2 = new m2({ hasZ: e2.hasZ(t), hasM: e2.hasM(t), points: e2.exportPoints(t), spatialReference: o3 });
  return i2.cache._geVersion = t, i2;
}
function x(n, t, o3) {
  const i2 = n.hasZ(t), r2 = n.hasM(t), s3 = new z({ xmin: n.getXMin(t), ymin: n.getYMin(t), xmax: n.getXMax(t), ymax: n.getYMax(t), spatialReference: o3 });
  if (i2) {
    const e2 = n.getZExtent(t);
    s3.zmin = e2.vmin, s3.zmax = e2.vmax;
  }
  if (r2) {
    const e2 = n.getMExtent(t);
    s3.mmin = e2.vmin, s3.mmax = e2.vmax;
  }
  return s3.cache._geVersion = t, s3;
}

// node_modules/@arcgis/core/geometry/geometryEngine.js
function i(e2) {
  const r2 = Array.isArray(e2) ? e2[0].spatialReference : e2.spatialReference;
  return r2 ? m(f, r2) : f.WGS84;
}
function o2(n) {
  return e.extendedSpatialReferenceInfo(n);
}
function c2(n, t) {
  return o(n), e.clip(r, i(n), n, t);
}
function f2(n, t) {
  return o(n), e.cut(r, i(n), n, t);
}
function s2(n, t) {
  return o(n), o(t), e.contains(r, i(n), n, t);
}
function a2(n, t) {
  return o(n), o(t), e.crosses(r, i(n), n, t);
}
function l(n, t, o3) {
  return o(n), o(t), e.distance(r, i(n), n, t, o3);
}
function p(n, t) {
  return o(n), o(t), e.equals(r, i(n), n, t);
}
function m4(n, t) {
  return o(n), o(t), e.intersects(r, i(n), n, t);
}
function d(n, t) {
  return o(n), o(t), e.touches(r, i(n), n, t);
}
function g(n, t) {
  return o(n), o(t), e.within(r, i(n), n, t);
}
function h2(n, t) {
  return o(n), o(t), e.disjoint(r, i(n), n, t);
}
function w(n, t) {
  return o(n), o(t), e.overlaps(r, i(n), n, t);
}
function R(n, t, o3) {
  return o(n), o(t), e.relate(r, i(n), n, t, o3);
}
function x2(n) {
  return o(n), e.isSimple(r, i(n), n);
}
function y2(n) {
  return o(n), e.simplify(r, i(n), n);
}
function S(n, e2 = false) {
  return e.convexHull(r, i(n), n, e2);
}
function j(n, t) {
  return o(t), e.difference(r, i(n), n, t);
}
function A(n, t) {
  return o(t), e.symmetricDifference(r, i(n), n, t);
}
function D(n, t) {
  return o(t), e.intersect(r, i(n), n, t);
}
function T(n) {
  return e.union(r, i(n), n);
}
function E(n, e2, t, o3, c3, f3) {
  return e.offset(r, i(n), n, e2, t, o3, c3, f3);
}
function J(n, e2, t, o3 = false) {
  return e.buffer(r, i(n), n, e2, t, o3);
}
function L(n, e2, t, o3, c3, f3) {
  return e.geodesicBuffer(r, i(n), n, e2, t, o3, c3, f3);
}
function N(n, t, o3 = true) {
  return o(n), e.nearestCoordinate(r, i(n), n, t, o3);
}
function O(n, t) {
  return o(n), e.nearestVertex(r, i(n), n, t);
}
function V(n, t, o3, c3) {
  return o(n), e.nearestVertices(r, i(n), n, t, o3, c3);
}
function v(n) {
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent?.center ?? null : null;
}
function z2(n, e2, t) {
  if (null == n) throw new M();
  const u = n.spatialReference;
  if (null == (t = t ?? v(n))) throw new M();
  const i2 = n.constructor.fromJSON(e.rotate(n, e2, t));
  return i2.spatialReference = u, i2;
}
function B(n, e2) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e2 = e2 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e.flipHorizontal(n, e2));
  return u.spatialReference = t, u;
}
function G(n, e2) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e2 = e2 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e.flipVertical(n, e2));
  return u.spatialReference = t, u;
}
function H(n, t, o3, c3) {
  return o(n), e.generalize(r, i(n), n, t, o3, c3);
}
function I(n, t, o3) {
  return o(n), e.densify(r, i(n), n, t, o3);
}
function b(n, t, o3, c3 = 0) {
  return o(n), e.geodesicDensify(r, i(n), n, t, o3, c3);
}
function k(n, t) {
  return o(n), e.planarArea(r, i(n), n, t);
}
function q(n, t) {
  return o(n), e.planarLength(r, i(n), n, t);
}
function C(n, t, o3) {
  return o(n), e.geodesicArea(r, i(n), n, t, o3);
}
function P2(n, t, o3) {
  return o(n), e.geodesicLength(r, i(n), n, t, o3);
}
function W(n, e2) {
  return e.intersectLinesToPoints(r, i(n), n, e2);
}
function F(n, e2) {
  e.changeDefaultSpatialReferenceTolerance(n, e2);
}
function K(n) {
  e.clearDefaultSpatialReferenceTolerance(n);
}
var M = class extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
};
export {
  J as buffer,
  F as changeDefaultSpatialReferenceTolerance,
  K as clearDefaultSpatialReferenceTolerance,
  c2 as clip,
  s2 as contains,
  S as convexHull,
  a2 as crosses,
  f2 as cut,
  I as densify,
  j as difference,
  h2 as disjoint,
  l as distance,
  p as equals,
  o2 as extendedSpatialReferenceInfo,
  B as flipHorizontal,
  G as flipVertical,
  H as generalize,
  C as geodesicArea,
  L as geodesicBuffer,
  b as geodesicDensify,
  P2 as geodesicLength,
  D as intersect,
  W as intersectLinesToPoints,
  m4 as intersects,
  x2 as isSimple,
  N as nearestCoordinate,
  O as nearestVertex,
  V as nearestVertices,
  E as offset,
  w as overlaps,
  k as planarArea,
  q as planarLength,
  R as relate,
  z2 as rotate,
  y2 as simplify,
  A as symmetricDifference,
  d as touches,
  T as union,
  g as within
};
//# sourceMappingURL=geometryEngine-CX4B75AM.js.map

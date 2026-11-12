import {
  f
} from "./chunk-N75LYAXI.js";
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
import "./chunk-34BRYRUD.js";
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
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorker.js
function t(e, t2) {
  let r2;
  return { loaded: false, load: () => r2 ??= t2().then((t3) => {
    o[e] = { loaded: true, execute: t3 };
  }) };
}
function r(e) {
  return null == e ? null : e.toJSON();
}
var o = { disjoint: t("disjoint", () => import("./disjointOperator-EFUMBB47.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-DE3APVVP.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-76KFUAL2.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-SWOXPGCO.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-NLJQK2IT.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-XYF26LUL.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-QEWNQTLN.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-QAINKRWQ.js");
  return (r2, o2) => t2.execute(f(r2), f(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-YNKYSETZ.js");
  return (r2, o2, n2) => t2.execute(f(r2), f(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-LK2ZAA56.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-YZI2GTLY.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-CH6IMXKC.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-RE4CE5XE.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-NUWS2H3S.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-7UPB5U32.js");
  return (o2, n2) => t2.execute(f(o2), f(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-RMP2BXWI.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (n2, a) => {
    const s = t2.execute(f(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-5YGPS6LI.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-D2UAVYGJ.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-XBGY7K7C.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-3VB7BRUP.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-D2UAVYGJ.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-KKNLI5GR.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (n2, a, s) => {
    const i = t2.execute(f(n2), f(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-G24AOBZ4.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-NHKW35FQ.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-D2UAVYGJ.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(f(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-A66FL6HP.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-CAKJT76W.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-D2UAVYGJ.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-PDZOLCN2.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-D2UAVYGJ.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-4VIISBN5.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-TWGLT6GI.js"), { default: o2 } = await import("./Transformation-YUZS5ZDL.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(f(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-BFG2P57T.js");
  return (o2) => r(t2.execute(f(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-CSEICXNN.js");
  return (o2) => r(t2.execute(f(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-QVD2N732.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-RTLR5BFX.js"), r2 = await import("./simplifyOGCOperator-UMHQ3LR7.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(f(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-QVD2N732.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-NZRK2W2A.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-4LQWJSFZ.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(f(o2), f(n2), a);
    return { ...s, coordinate: r(s.coordinate) };
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const t2 = await import("./proximityOperator-4LQWJSFZ.js");
  return (o2, n2) => {
    const a = t2.getNearestVertex(f(o2), f(n2));
    return { ...a, coordinate: r(a.coordinate) };
  };
}) };
function n(e, t2) {
  const r2 = o[e];
  return r2.loaded ? r2.execute.apply(void 0, t2) : r2.load().then(() => n(e, t2));
}
export {
  n as invokeGeometryOp
};
//# sourceMappingURL=operatorsWorker-WYMLV7MJ.js.map

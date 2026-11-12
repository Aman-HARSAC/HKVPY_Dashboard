import {
  s,
  s2
} from "./chunk-DDOH6XQD.js";
import {
  a
} from "./chunk-2KOXC6YZ.js";
import "./chunk-XHM6OPA5.js";
import "./chunk-M2B6XHRJ.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-4OHTOVA6.js";
import "./chunk-5ARE3HRS.js";
import "./chunk-LQRNXK47.js";
import "./chunk-UJ67ZHZE.js";
import "./chunk-JKDLXAJZ.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-ZUHK7ZF3.js";
import "./chunk-Y37XMD6B.js";
import "./chunk-RZFKWVYS.js";
import "./chunk-EFHBHAA4.js";
import {
  n as n2
} from "./chunk-6KWDQ4WZ.js";
import "./chunk-RIBJ5N3I.js";
import {
  n
} from "./chunk-U4ORDVXL.js";
import "./chunk-OH73XB3O.js";
import "./chunk-N4HSWD3N.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-NBAPQNZI.js";
import "./chunk-TB4PV3L4.js";
import "./chunk-2YRG6OI2.js";
import "./chunk-RKUP6IGK.js";
import "./chunk-GLGQSUTI.js";
import "./chunk-N75LYAXI.js";
import "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-U4RGADP6.js";
import "./chunk-2SHUULFD.js";
import "./chunk-WBIYJFPH.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function c(i) {
  return async (c2, f2, p) => {
    if (oe(p, 2, 2, c2, f2), null === (p = Je(p))[0] && null === p[1]) return false;
    if (B(p[0])) {
      if (U(p[1])) return new s2({ parentfeatureset: p[0], relation: i, relationGeom: p[1] });
      if (null === p[1]) return new s({ parentfeatureset: p[0] });
      throw new n(c2, "InvalidParameter", f2);
    }
    if (U(p[0])) {
      if (U(p[1])) {
        switch (i) {
          case "esriSpatialRelEnvelopeIntersects": {
            const e = n2(p[0]), n3 = n2(p[1]);
            return null != e && null != n3 && a("intersects", [e.toJSON(), n3.toJSON()]);
          }
          case "esriSpatialRelIntersects":
            return a("intersects", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelContains":
            return a("contains", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelOverlaps":
            return a("overlaps", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelWithin":
            return a("within", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelTouches":
            return a("touches", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelCrosses":
            return a("crosses", [p[0].toJSON(), p[1].toJSON()]);
        }
        throw new n(c2, "InvalidParameter", f2);
      }
      if (B(p[1])) return new s2({ parentfeatureset: p[1], relation: i, relationGeom: p[0] });
      if (null === p[1]) return false;
      throw new n(c2, "InvalidParameter", f2);
    }
    if (null === p[0]) {
      if (B(p[1])) return new s({ parentfeatureset: p[1] });
      if (U(p[1]) || null === p[1]) return false;
    }
    throw new n(c2, "InvalidParameter", f2);
  };
}
function f(t) {
  "async" === t.mode && (t.functions.intersects = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelIntersects"));
  }, t.functions.envelopeintersects = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelEnvelopeIntersects"));
  }, t.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), t.functions.contains = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelContains"));
  }, t.functions.overlaps = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelOverlaps"));
  }, t.functions.within = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelWithin"));
  }, t.functions.touches = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelTouches"));
  }, t.functions.crosses = function(e, n3) {
    return t.standardFunctionAsync(e, n3, c("esriSpatialRelCrosses"));
  }, t.functions.relate = function(o, c2) {
    return t.standardFunctionAsync(o, c2, async (t2, f2, p) => {
      if (p = Je(p), oe(p, 3, 3, o, c2), U(p[0]) && U(p[1])) return a("relate", [p[0].toJSON(), p[1].toJSON(), ge(p[2])]);
      if (U(p[0]) && null === p[1]) return false;
      if (U(p[1]) && null === p[0]) return false;
      if (B(p[0]) && null === p[1]) return new s({ parentfeatureset: p[0] });
      if (B(p[1]) && null === p[0]) return new s({ parentfeatureset: p[1] });
      if (B(p[0]) && U(p[1])) return p[0].relate(p[1], ge(p[2]));
      if (B(p[1]) && U(p[0])) return p[1].relate(p[0], ge(p[2]));
      if (null === p[0] && null === p[1]) return false;
      throw new n(o, "InvalidParameter", c2);
    });
  });
}
export {
  f as registerFunctions
};
//# sourceMappingURL=featuresetgeom-JK5DJBVK.js.map

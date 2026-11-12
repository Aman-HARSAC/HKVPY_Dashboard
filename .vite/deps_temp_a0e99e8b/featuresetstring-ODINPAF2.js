import {
  $e,
  B,
  Be,
  Ce,
  H,
  He,
  Ke,
  Oe,
  Qe,
  We,
  be,
  ge,
  oe,
  p,
  xe,
  z
} from "./chunk-4OHTOVA6.js";
import {
  P
} from "./chunk-5ARE3HRS.js";
import "./chunk-LQRNXK47.js";
import "./chunk-UJ67ZHZE.js";
import "./chunk-6KWDQ4WZ.js";
import "./chunk-RIBJ5N3I.js";
import {
  n
} from "./chunk-U4ORDVXL.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-N75LYAXI.js";
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
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function h(a, e) {
  return a && a.domain ? "coded-value" === a.domain.type || "codedValue" === a.domain.type ? p.convertObjectToArcadeDictionary({ type: "codedValue", name: a.domain.name, dataType: P[a.field.type], codedValues: a.domain.codedValues.map((n2) => ({ name: n2.name, code: n2.code })) }, Ke(e)) : p.convertObjectToArcadeDictionary({ type: "range", name: a.domain.name, dataType: P[a.field.type], min: a.domain.minValue, max: a.domain.maxValue }, Ke(e)) : null;
}
function T(p2) {
  "async" === p2.mode && (p2.functions.domain = function(n2, s) {
    return p2.standardFunctionAsync(n2, s, async (d, u, m) => {
      if (oe(m, 2, 3, n2, s), H(m[0])) {
        return h(He(m[0], ge(m[1]), void 0 === m[2] ? void 0 : m[2]), n2);
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        return h(Ce(ge(m[1]), m[0], null, void 0 === m[2] ? void 0 : m[2]), n2);
      }
      throw new n(n2, "InvalidParameter", s);
    });
  }, p2.functions.subtypes = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, u, m) => {
      if (oe(m, 1, 1, r, o), H(m[0])) {
        const a = We(m[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        const a = m[0].subtypeMetaData();
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  }, p2.functions.domainname = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, f) => {
      if (oe(f, 2, 4, n2, r), H(f[0])) return $e(f[0], ge(f[1]), f[2], void 0 === f[3] ? void 0 : f[3]);
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        const n3 = Ce(ge(f[1]), f[0], null, void 0 === f[3] ? void 0 : f[3]);
        return xe(n3, f[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domainname", min: 2, max: 4 }), p2.functions.domaincode = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, u) => {
      if (oe(u, 2, 4, n2, r), H(u[0])) return Be(u[0], ge(u[1]), u[2], void 0 === u[3] ? void 0 : u[3]);
      if (B(u[0])) {
        await u[0]._ensureLoaded();
        const n3 = Ce(ge(u[1]), u[0], null, void 0 === u[3] ? void 0 : u[3]);
        return Oe(n3, u[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domaincode", min: 2, max: 4 }), p2.functions.text = function(n2, t) {
    return p2.standardFunctionAsync(n2, t, async (r, o, c) => {
      if (oe(c, 1, 2, n2, t), B(c[0])) {
        const e = z(c[1], "");
        if ("" === e) return c[0].castToText();
        if ("schema" === e.toLowerCase()) return c[0].convertToText("schema", r.abortSignal);
        if ("featureset" === e.toLowerCase()) return c[0].convertToText("featureset", r.abortSignal);
        throw new n(n2, "InvalidParameter", t);
      }
      return be(c[0], c[1]);
    });
  }, p2.functions.gdbversion = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (o, c, s) => {
      if (oe(s, 1, 1, n2, r), H(s[0])) return s[0].gdbVersion();
      if (B(s[0])) {
        return (await s[0].load()).gdbVersion;
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.functions.schema = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, s, u) => {
      if (oe(u, 1, 1, r, o), B(u[0])) return await u[0].load(), p.convertObjectToArcadeDictionary(u[0].schema(), Ke(r));
      if (H(u[0])) {
        const a = Qe(u[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  });
}
export {
  T as registerFunctions
};
//# sourceMappingURL=featuresetstring-ODINPAF2.js.map

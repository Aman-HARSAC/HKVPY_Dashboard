import {
  t
} from "./chunk-YJLNGOA5.js";
import {
  f
} from "./chunk-MOHPT53R.js";
import {
  g
} from "./chunk-A5N77F4Q.js";
import {
  u
} from "./chunk-L725BIDN.js";
import "./chunk-SOVAWJ7Z.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-NOLGHAEZ.js";
import "./chunk-66ZPDDI6.js";
import "./chunk-Z4YXFUOU.js";
import "./chunk-YGTIDF4L.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-GLGQSUTI.js";
import "./chunk-N75LYAXI.js";
import "./chunk-ESM52TVO.js";
import "./chunk-CJPJIT22.js";
import "./chunk-6HP3W5KM.js";
import "./chunk-SUVWYL6G.js";
import "./chunk-3OOESFBZ.js";
import "./chunk-NO6F2VEN.js";
import "./chunk-NNAJXNL7.js";
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
import "./chunk-2NWSA4WH.js";
import "./chunk-CMZYNK44.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import "./chunk-E3ECGPOW.js";
import "./chunk-2CXMHEOA.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import {
  A
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
import {
  H2 as H
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !o?.returnCountOnly ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = A(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({ source: r2.dynamicDataSource }), delete r2.dynamicDataSource), r2;
}
async function s(e, t2, o) {
  const r2 = await a(e, t2, o), s2 = r2.data, n3 = s2.geometryType, d = s2.spatialReference, c = {};
  for (const a2 of s2.relatedRecordGroups) {
    const e2 = { fields: void 0, geometryType: n3, spatialReference: d, hasZ: !!s2.hasZ, hasM: !!s2.hasM, features: a2.relatedRecords };
    if (null != a2.objectId) c[a2.objectId] = e2;
    else for (const t3 of Object.keys(a2)) "relatedRecords" !== t3 && (c[a2[t3]] = e2);
  }
  return { ...r2, data: c };
}
async function n(e, t2, o) {
  const r2 = await a(e, t2, o, { returnCountOnly: true }), s2 = r2.data, n3 = {};
  for (const a2 of s2.relatedRecordGroups) null != a2.objectId && (n3[a2.objectId] = a2.count);
  return { ...r2, data: n3 };
}
async function a(t2, s2, n3 = {}, a2) {
  const d = t({ ...t2.query, f: "json", ...a2, ...r(s2, a2) });
  return H(t2.path + "/queryRelatedRecords", { ...n3, query: { ...n3.query, ...d } });
}

// node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
async function n2(e, n3, u3) {
  n3 = u.from(n3);
  const a2 = f(e);
  return s(a2, n3, u3).then((t2) => {
    const r2 = t2.data, e2 = {};
    return Object.keys(r2).forEach((t3) => e2[t3] = g.fromJSON(r2[t3])), e2;
  });
}
async function u2(r2, o, n3) {
  o = u.from(o);
  const u3 = f(r2);
  return n(u3, o, { ...n3 }).then((t2) => t2.data);
}
export {
  n2 as executeRelationshipQuery,
  u2 as executeRelationshipQueryForCount
};
//# sourceMappingURL=executeRelationshipQuery-SC6S5YUQ.js.map

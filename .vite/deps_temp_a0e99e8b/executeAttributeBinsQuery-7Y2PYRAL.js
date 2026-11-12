import {
  i
} from "./chunk-7SB3GAD6.js";
import {
  T as T2
} from "./chunk-OHASCYTE.js";
import {
  t
} from "./chunk-YJLNGOA5.js";
import "./chunk-Y6MXIULC.js";
import "./chunk-V2Z2TRGN.js";
import {
  P
} from "./chunk-UJ7GKG37.js";
import "./chunk-PRLR6XRF.js";
import "./chunk-A5YSIKNU.js";
import "./chunk-YOKAK57B.js";
import {
  f
} from "./chunk-MOHPT53R.js";
import "./chunk-A5N77F4Q.js";
import "./chunk-SFCQZULW.js";
import "./chunk-ZNBUZ7FK.js";
import "./chunk-GIPM3SSV.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-NOLGHAEZ.js";
import "./chunk-66ZPDDI6.js";
import "./chunk-Z4YXFUOU.js";
import "./chunk-YGTIDF4L.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-GLGQSUTI.js";
import {
  v
} from "./chunk-N75LYAXI.js";
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
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
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
  A,
  T
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
  H2 as H,
  I,
  V
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
function l(t2) {
  const e = t2.geometry, i3 = t2.toJSON(), r = i3;
  let u, l2, a2;
  if (null != e && (l2 = e.spatialReference, a2 = A(l2), r.geometryType = v(e), r.geometry = JSON.stringify(e), r.inSR = a2), i3.outSR ? (r.outSR = A(i3.outSR), u = t2.outSpatialReference) : e && (r.outSR = r.inSR, u = l2), r.bin &&= JSON.stringify(r.bin), r.quantizationParameters &&= JSON.stringify(r.quantizationParameters), r.outStatistics &&= JSON.stringify(r.outStatistics), r.outTimeReference &&= JSON.stringify(r.outTimeReference), i3.timeExtent) {
    const t3 = i3.timeExtent, { start: e2, end: n } = t3;
    null == e2 && null == n || (r.time = e2 === n ? e2 : `${e2 ?? "null"},${n ?? "null"}`), delete i3.timeExtent;
  }
  return t2.defaultSpatialReference && T(l2, u) && (r.defaultSR = r.inSR, delete r.inSR, delete r.outSR), r;
}
async function a(t2, e, i3) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : await m(t2, e, i3);
}
async function m(n, o, s = {}) {
  const a2 = "string" == typeof n ? I(n) : n, m2 = o.geometry ? [o.geometry] : [], f2 = await P(m2, null, { signal: s.signal }), y = f2?.[0];
  null != y && ((o = o.clone()).geometry = y);
  const p = t({ ...a2.query, f: "json", ...l(o) });
  return H(V(a2.path, "queryBins"), { ...s, query: { ...p, ...s.query } });
}

// node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
async function i2(i3, s, u) {
  const { data: m2 } = await a(f(i3), T2.from(s), u);
  return i.fromJSON(m2);
}
export {
  i2 as executeAttributeBinsQuery
};
//# sourceMappingURL=executeAttributeBinsQuery-7Y2PYRAL.js.map

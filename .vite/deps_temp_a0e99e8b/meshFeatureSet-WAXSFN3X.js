import {
  i as i3,
  n as n2
} from "./chunk-QW45GFWI.js";
import {
  Y
} from "./chunk-OH76UYQ5.js";
import "./chunk-PYVUNDEQ.js";
import "./chunk-52224I66.js";
import "./chunk-YQLWLFLO.js";
import "./chunk-IUYOZV3Q.js";
import {
  i as i2,
  n
} from "./chunk-CSGUTUA3.js";
import "./chunk-QXDEU3TJ.js";
import "./chunk-BBZ26CZX.js";
import "./chunk-AK7EPLYP.js";
import "./chunk-RPCOHHP2.js";
import "./chunk-B3JUOOGN.js";
import "./chunk-MM2UZVE7.js";
import "./chunk-AOKZGJE5.js";
import "./chunk-P6TVAF45.js";
import "./chunk-ZTT7LSRG.js";
import "./chunk-EZWSEPLV.js";
import "./chunk-B4CIU6RO.js";
import "./chunk-WSIW6YPM.js";
import "./chunk-IO36QNTJ.js";
import "./chunk-ZIBDEYEG.js";
import "./chunk-J2R2JU44.js";
import "./chunk-GSUMMKWK.js";
import "./chunk-MEXFH2NS.js";
import "./chunk-IZZQL5QY.js";
import "./chunk-UTJNNXNU.js";
import "./chunk-WKZE7VLE.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-L22N2CNH.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import {
  g
} from "./chunk-A5N77F4Q.js";
import {
  s
} from "./chunk-MNR24HCP.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UZVXLLR6.js";
import {
  _
} from "./chunk-NOLGHAEZ.js";
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
import {
  z
} from "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import {
  f
} from "./chunk-U6KP2EF3.js";
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
import {
  e
} from "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/rest/support/meshFeatureSet.js
var p = () => i.getLogger("esri.rest.support.meshFeatureSet");
function l(t, r, s2) {
  const o = s2.features;
  s2.features = [], delete s2.geometryType;
  const a = g.fromJSON(s2);
  if (a.geometryType = "mesh", !s2.assetMaps) return a;
  const u = g2(r, s2.assetMaps), i4 = t.sourceSpatialReference ?? f.WGS84, m = s2.globalIdFieldName, { outFields: c } = t, p2 = null != c && c.length > 0 ? y(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const n3 of o) {
    const t2 = h(n3, m, i4, r, u);
    a.features.push(new _({ geometry: t2, attributes: p2(n3) }));
  }
  return a;
}
function y(e2) {
  return ({ attributes: t }) => {
    if (!t) return {};
    if (!e2) return t;
    for (const r in t) e2.has(r) || delete t[r];
    return t;
  };
}
function h(e2, t, r, n3, a) {
  const u = e2.attributes[t], i4 = a.get(u);
  if (null == i4 || !e2.geometry) return null;
  const f2 = n2(e2.attributes, r, n3.transformFieldRoles), p2 = z.fromJSON(e2.geometry);
  p2.spatialReference = r;
  const l2 = i3(e2.attributes, n3.transformFieldRoles), y2 = r.isGeographic ? "local" : "georeferenced", h2 = d(i4);
  return h2 ? Y.createWithExternalSource(f2, h2, { extent: p2, transform: l2, vertexSpace: y2, unitConversionDisabled: true }) : Y.createIncomplete(f2, { extent: p2, transform: l2, vertexSpace: y2 });
}
function g2(e2, t) {
  const s2 = /* @__PURE__ */ new Map();
  for (const o of t) {
    const t2 = o.parentGlobalId;
    if (null == t2) continue;
    const n3 = o.assetName, a = o.assetType, u = o.assetHash, f2 = o.assetURL, m = o.conversionStatus, c = o.seqNo, l2 = s(a, e2.supportedFormats);
    if (!l2) {
      p().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a}, but it does not list it as a supported type`);
      continue;
    }
    const y2 = e(s2, t2, () => ({ files: /* @__PURE__ */ new Map() }));
    e(y2.files, n3, () => ({ name: n3, type: a, mimeType: l2, status: S(m), parts: [] })).parts[c] = { hash: u, url: f2 };
  }
  return s2;
}
function d(e2) {
  const t = Array.from(e2.files.values()), r = new Array();
  for (const s2 of t) {
    if (2 !== s2.status) return null;
    const e3 = new Array();
    for (const t2 of s2.parts) {
      if (!t2) return null;
      e3.push(new n(t2.url, t2.hash));
    }
    r.push(new i2(s2.name, s2.mimeType, e3));
  }
  return { type: "service", assets: r };
}
function S(e2) {
  switch (e2) {
    case "COMPLETED":
    case "SUBMITTED":
      return 2;
    case "INPROGRESS":
      return 1;
    default:
      return 0;
  }
}
export {
  g2 as assetMapFromAssetMapsJSON,
  h as extractMesh,
  l as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-WAXSFN3X.js.map

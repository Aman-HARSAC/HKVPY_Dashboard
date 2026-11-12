import {
  $,
  P
} from "./chunk-2MA3AWZD.js";
import "./chunk-BU2Q3LXM.js";
import "./chunk-2K4ROQS6.js";
import "./chunk-LLT4D4WD.js";
import {
  E,
  c,
  i,
  l,
  u
} from "./chunk-ZKYU6D6M.js";
import "./chunk-JJHBCOSL.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-O6VUD37E.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-CL6GWXVQ.js";
import "./chunk-OAFK63FV.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
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

// node_modules/@arcgis/core/layers/save/mapImageLayerUtils.js
var o = "Map Service";
var l2 = "map-image-layer-save";
var m = "map-image-layer-save-as";
function c2(e) {
  return { isValid: "map-image" === e.type && !e.sourceJSON?.tileInfo, errorMessage: "Layer.type should be 'map-image' and reference a dynamic (non-cached) map service" };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function u2(e, t) {
  return f(e, t), Promise.resolve();
}
async function y(e, t) {
  const { parsedUrl: s, title: i2, fullExtent: o2 } = e;
  t.url = s.path, t.title ||= i2, t.extent = o2 ? await l(o2) : null, c(t, E.METADATA), f(e, t);
}
function f(e, t) {
  i(t, E.DYNAMIC);
  const r = e.sublayers?.length ?? 0;
  u(t, E.MULTI_LAYER, r > 1), u(t, E.SINGLE_LAYER, 1 === r);
}
async function v(t, r) {
  return P({ layer: t, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: l2, setItemProperties: u2 }, r);
}
async function I(e, r, a) {
  return $({ layer: e, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: m, newItem: r, setItemProperties: y }, a);
}
export {
  v as save,
  I as saveAs
};
//# sourceMappingURL=mapImageLayerUtils-V7NKSIN2.js.map

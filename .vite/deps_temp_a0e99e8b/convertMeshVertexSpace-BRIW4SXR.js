import {
  c
} from "./chunk-RPCOHHP2.js";
import "./chunk-B3JUOOGN.js";
import {
  e
} from "./chunk-AOKZGJE5.js";
import {
  q
} from "./chunk-WSIW6YPM.js";
import "./chunk-IO36QNTJ.js";
import "./chunk-ZIBDEYEG.js";
import "./chunk-J2R2JU44.js";
import "./chunk-GSUMMKWK.js";
import "./chunk-MEXFH2NS.js";
import "./chunk-IZZQL5QY.js";
import "./chunk-UTJNNXNU.js";
import "./chunk-WKZE7VLE.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
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
import {
  s as s2
} from "./chunk-W6MJCXR6.js";
import {
  a,
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
async function m(m2, n, c2) {
  await Promise.resolve(), s2(c2);
  const l = q(m2, n, { useEllipsoid: c2?.useEllipsoid });
  if (!l) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  return m2.clone(e(void 0, { vertexAttributes: new c({ ...l, uv: a(m2.vertexAttributes.uv), color: a(m2.vertexAttributes.color) }), vertexSpace: n, transform: null }));
}
export {
  m as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-BRIW4SXR.js.map

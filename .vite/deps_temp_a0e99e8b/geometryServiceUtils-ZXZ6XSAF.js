import {
  n,
  p
} from "./chunk-5SU5YNOB.js";
import "./chunk-A5YSIKNU.js";
import "./chunk-MOHPT53R.js";
import "./chunk-N75LYAXI.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import {
  M
} from "./chunk-E3ECGPOW.js";
import "./chunk-2CXMHEOA.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-NNNAQZPE.js";
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
import {
  s,
  s2
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
async function n2(t = null, i) {
  if (s.geometryServiceUrl) return s.geometryServiceUrl;
  if (!t) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  let n3;
  n3 = "portal" in t ? t.portal || M.getDefault() : t, await n3.load({ signal: i });
  const a2 = n3.helperServices?.geometry?.url;
  if (!a2) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  return a2;
}
async function a(e, o, a2 = null, c) {
  const l = await n2(a2, c), m = new p({ geometries: [e], outSpatialReference: o }), s3 = await n(l, m, { signal: c });
  if (s3 && Array.isArray(s3) && 1 === s3.length) return s3[0];
  throw new s2("internal:geometry-service-projection-failed", "Geometry projection failed on service");
}
export {
  n2 as getGeometryServiceURL,
  a as projectGeometry
};
//# sourceMappingURL=geometryServiceUtils-ZXZ6XSAF.js.map

import {
  e
} from "./chunk-Q2YWI3MD.js";
import "./chunk-MMRUQKTW.js";
import {
  c
} from "./chunk-CJPJIT22.js";
import {
  p,
  u
} from "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
import {
  n
} from "./chunk-NOPG2N5A.js";
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
import {
  H2 as H
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import {
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = a();
function a() {
  return new e(50);
}
function u2() {
  c2 = a();
}
async function l(e2, o) {
  if (e2.resource?.href) return m(e2.resource.href).then((e3) => [e3.width, e3.height]);
  if (e2.resource?.primitive) return null != o ? [o, o] : [256, 256];
  throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function m(r) {
  return H(r, { responseType: "image" }).then((e2) => e2.data);
}
async function f(e2, o = null) {
  if (!e2.isPrimitive) {
    const o2 = e2.resource?.href;
    if (!o2) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s2 = c2.get(o2);
    if (null != s2) return s2;
    const { fetch: n2 } = await import("./objectResourceUtils-OA2LZZRT.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u3 = p(a3.referenceBoundingBox, n());
    return c2.put(o2, u3), u3;
  }
  if (!e2.resource?.primitive) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
  const a2 = u(c(e2.resource.primitive));
  if (null != o) for (let r = 0; r < a2.length; r++) a2[r] *= o;
  return p(a2, n());
}
export {
  u2 as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-TROQOM3F.js.map

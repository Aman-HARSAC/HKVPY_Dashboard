import {
  d
} from "./chunk-BDRDZ3WN.js";
import {
  S
} from "./chunk-NH46KSM6.js";
import "./chunk-YJLNGOA5.js";
import "./chunk-UJ7GKG37.js";
import "./chunk-PRLR6XRF.js";
import "./chunk-A5YSIKNU.js";
import "./chunk-YOKAK57B.js";
import {
  f
} from "./chunk-MOHPT53R.js";
import "./chunk-IPBALR4C.js";
import "./chunk-GIPM3SSV.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-N75LYAXI.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-V4EKSFRL.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import {
  z
} from "./chunk-SJ73CYXJ.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-COZ6V3AW.js";
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

// node_modules/@arcgis/core/rest/query/executeForTopExtents.js
async function e(e2, n, m) {
  const s = f(e2), i = await d(s, S.from(n), { ...m }), u = i.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: i.data.count, extent: null } : { count: i.data.count, extent: z.fromJSON(u) };
}
export {
  e as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-LHRRUH37.js.map

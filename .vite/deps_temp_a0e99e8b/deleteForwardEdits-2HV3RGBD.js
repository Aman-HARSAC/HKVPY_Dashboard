import {
  f,
  s as s2,
  u
} from "./chunk-MOHPT53R.js";
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

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js
async function e(e2, n, m, a) {
  if (!n) throw new s("post:missing-guid", "guid for version is missing");
  const u2 = f(e2), d = m.toJSON(), f2 = s2(u2.query, { query: u({ ...d, f: "json" }), ...a, method: "post" });
  n.startsWith("{") && (n = n.slice(1, -1));
  const p = `${u2.path}/versions/${n}/deleteForwardEdits`, { data: c } = await H(p, f2);
  return c;
}
export {
  e as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-2HV3RGBD.js.map

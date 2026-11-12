import {
  y
} from "./chunk-R47TJFZY.js";
import {
  f
} from "./chunk-MOHPT53R.js";
import {
  g
} from "./chunk-A5N77F4Q.js";
import {
  b
} from "./chunk-TTY3P4AN.js";

// node_modules/@arcgis/core/rest/query/executeQueryJSON.js
async function s(r, t, e, s2) {
  const n = await a(r, t, e, s2);
  return g.fromJSON(n);
}
async function a(o, s2, a2, n) {
  const i = f(o), p = { ...a2 }, u = b.from(s2), { data: m } = await y(i, u, u.sourceSpatialReference, p, n);
  return m;
}

export {
  s,
  a
};
//# sourceMappingURL=chunk-TPVTXEUC.js.map

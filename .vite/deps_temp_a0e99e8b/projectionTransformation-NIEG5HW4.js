import {
  Jc,
  Lc,
  Og,
  Rg,
  Wg,
  Yg,
  t_,
  zc
} from "./chunk-3Z5JSQVJ.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-GYG7YE62.js";
import "./chunk-JTZJWVKG.js";
import {
  n
} from "./chunk-3QMQSBQ4.js";
import "./chunk-KNBNEFVY.js";
import "./chunk-A44PNKPT.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/geometry/operators/support/projectionTransformation.js
function f(c, f2, m) {
  let u, l;
  if (m?.geographicTransformation) {
    if (m.geographicTransformation.steps?.length) {
      const s = new t_();
      s.setInputSpatialReference(c), s.setOutputSpatialReference(f2);
      for (const e of m.geographicTransformation.steps) {
        let a;
        a = e.wkid ? Lc(e.wkid, e.isInverse) : zc(e.wkt, e.isInverse), s.add(a);
      }
      u = s.create();
    } else u = Jc();
    if (m.extendedParams) {
      l = Wg();
      const { densificationStep: e } = m.extendedParams;
      null != e && (l.densificationStep = e);
    }
  } else if (m?.areaOfInterestExtent) return Yg(c, f2, p(m.areaOfInterestExtent));
  return u ? Rg(c, f2, u, l) : Og(c, f2);
}
function p(e) {
  return n.construct(e.xmin, e.ymin, e.xmax, e.ymax);
}
export {
  f as createProjectionTransformation
};
//# sourceMappingURL=projectionTransformation-NIEG5HW4.js.map

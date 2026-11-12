import {
  Q,
  j as j2
} from "./chunk-K2XD27KY.js";
import "./chunk-OD723H25.js";
import "./chunk-LBAP3LTS.js";
import "./chunk-3Z5JSQVJ.js";
import "./chunk-JJZLVRAQ.js";
import "./chunk-GYG7YE62.js";
import "./chunk-JTZJWVKG.js";
import "./chunk-3QMQSBQ4.js";
import {
  P,
  j
} from "./chunk-KNBNEFVY.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-A44PNKPT.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticDistance.js
var u = class {
  getOperatorType() {
    return 10316;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, r, t) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, r, t, o, a) {
    return this.executeEx(e, r, t, o, a, null, null, Number.NaN);
  }
  executeEx(u2, n, c, i, m, l, p, y) {
    const N = { stack: [], error: void 0, hasError: false };
    try {
      if (0 === c.getCoordinateSystemType() && P(""), j(u2), j(n), u2.isEmpty() || n.isEmpty()) return Number.NaN;
      Number.isNaN(y) && (y = Number.MAX_VALUE);
      const r = __addDisposableResource(N, new Q(c, i, m, y, 1), false), E = j2(), x = j2(), b = r.calculate(u2, n, E, x);
      return l && l.outPoint.assign(E.outPoint), p && p.outPoint.assign(x.outPoint), b;
    } catch (E) {
      N.error = E, N.hasError = true;
    } finally {
      __disposeResources(N);
    }
  }
};
export {
  u as OperatorGeodeticDistance,
  j2 as makeOutput
};
//# sourceMappingURL=OperatorGeodeticDistance-YAMQJ2HG.js.map

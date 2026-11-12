import {
  s2 as s
} from "./chunk-BKFJDMH7.js";
import {
  H
} from "./chunk-2DDKJLYG.js";

// node_modules/@arcgis/core/views/interactive/snapping/hints/RightAngleSnappingHint.js
var r = class _r extends s {
  constructor(e, t, r2, s2, i = 3) {
    super(s2, i), this.previousVertex = e, this.centerVertex = t, this.nextVertex = r2;
  }
  equals(t) {
    return t instanceof _r && (H(this.previousVertex, t.previousVertex) && H(this.centerVertex, t.centerVertex) && H(this.nextVertex, t.nextVertex));
  }
};

export {
  r
};
//# sourceMappingURL=chunk-KIZ6K6DT.js.map

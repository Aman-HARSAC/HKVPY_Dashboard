import {
  e
} from "./chunk-ZVVRXPEY.js";
import {
  At
} from "./chunk-YV6ABWAQ.js";
import {
  s3 as s
} from "./chunk-BKFJDMH7.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js
var e2 = class extends e {
  constructor(n) {
    super({ ...n, isDraped: true, constraint: new At(n.edgeStart, n.edgeEnd, n.getGroundElevation) });
  }
  get hints() {
    return [new s(1, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  e2 as e
};
//# sourceMappingURL=chunk-AWNAXMXW.js.map

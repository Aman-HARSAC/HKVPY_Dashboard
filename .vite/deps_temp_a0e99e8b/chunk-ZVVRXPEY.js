import {
  t
} from "./chunk-Z2VNECWP.js";
import {
  mt
} from "./chunk-YV6ABWAQ.js";
import {
  s3 as s
} from "./chunk-BKFJDMH7.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js
var e = class extends t {
  constructor({ targetPoint: t2, objectId: e2, constraint: o, isDraped: r }) {
    super(t2, o, r, 1), this.objectId = e2;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js
var i = class extends e {
  constructor(n) {
    super({ ...n, constraint: new mt(n.edgeStart, n.edgeEnd) });
  }
  get hints() {
    return [new s(1, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  e,
  i
};
//# sourceMappingURL=chunk-ZVVRXPEY.js.map

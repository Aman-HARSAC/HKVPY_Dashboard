import {
  e
} from "./chunk-ZVVRXPEY.js";
import {
  n
} from "./chunk-MBWURBUA.js";
import {
  dt
} from "./chunk-YV6ABWAQ.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var r = class extends e {
  constructor(n2) {
    super({ ...n2, constraint: new dt(n2.targetPoint) });
  }
  get hints() {
    return [new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-SSPOLLJ7.js.map

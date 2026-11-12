import {
  a as a2
} from "./chunk-O2JWOAJX.js";
import {
  a2 as a
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
import {
  d
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";

// node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var i2 = (i3) => {
  const a3 = i3;
  let c = class extends a3 {
    initialize() {
      this.addHandles(a2(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((r2) => {
          d(r2) || i.getLogger(this).error(r2);
        });
      }), "RefreshableLayerView");
    }
  };
  return c = __decorate([a("esri.views.layers.RefreshableLayerView")], c), c;
};

export {
  i2 as i
};
//# sourceMappingURL=chunk-TUP4XPID.js.map

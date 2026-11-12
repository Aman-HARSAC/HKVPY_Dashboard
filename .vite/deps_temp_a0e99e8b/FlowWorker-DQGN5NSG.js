import {
  f as f2,
  x
} from "./chunk-LG2MYC7J.js";
import {
  d,
  f
} from "./chunk-VZHAHDHH.js";
import "./chunk-YOKAK57B.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import "./chunk-7ROW6F7C.js";
import {
  a2 as a
} from "./chunk-DYRGLTSD.js";
import {
  __decorate
} from "./chunk-A44PNKPT.js";
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

// node_modules/@arcgis/core/views/3d/support/flow/FlowWorker.js
var i = class {
  constructor() {
    this._tileData = /* @__PURE__ */ new Map();
  }
  async generateStreamlines(t) {
    const { flowData: e, flowExtentInfo: r, needsMagnitude: o, simulationSettings: a2, startPositions: i2 } = t, n2 = l(f(a2, e), a2, r.modelSize, o, i2);
    return { result: { streamlines: n2 }, transferList: n2?.map((t2) => t2.vertices.buffer) };
  }
  async generateTiledStreamlines(t) {
    const { flowDataTiles: e, flowExtentInfo: s, needsMagnitude: r, reset: a2, simulationSettings: i2, startPositions: n2 } = t;
    this._updateTileData(e, a2);
    const c = l(x(i2, this._tileData, s), i2, s.modelSize, r, n2);
    return { result: { streamlines: c }, transferList: c?.map((t2) => t2.vertices.buffer) ?? [] };
  }
  _updateTileData(t, e) {
    e && this._tileData.forEach((e2, s) => {
      null == t.get(s) && this._tileData.delete(s);
    }), t.forEach((t2, e2) => {
      "delete" === t2.type ? this._tileData.delete(e2) : "on-worker" !== t2.type && "waiting" !== t2.type && this._tileData.set(e2, t2.data);
    });
  }
};
i = __decorate([a("esri.views.3d.support.flow.FlowWorker")], i);
var n = i;
function l(t, e, s, o, i2) {
  if (null == t) return;
  const n2 = d(e, t, s[0], s[1], { positions: i2 }), l2 = [], c = f2(o);
  for (const { vertices: r, stage: a2 } of n2) {
    const t2 = new Float32Array(r.length * c);
    for (let e2 = 0; e2 < r.length; e2++) t2[e2 * c] = r[e2].x, t2[e2 * c + 1] = r[e2].y, t2[e2 * c + 2] = r[e2].t, o && (t2[e2 * c + 3] = r[e2].speed);
    l2.push({ vertices: t2, stage: a2, hasMagnitude: o });
  }
  return l2;
}
export {
  n as default
};
//# sourceMappingURL=FlowWorker-DQGN5NSG.js.map

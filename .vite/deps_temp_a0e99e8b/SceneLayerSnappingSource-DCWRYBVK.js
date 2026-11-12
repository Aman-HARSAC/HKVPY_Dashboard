import {
  r
} from "./chunk-SSPOLLJ7.js";
import {
  i
} from "./chunk-ZVVRXPEY.js";
import "./chunk-Z2VNECWP.js";
import "./chunk-MBWURBUA.js";
import "./chunk-YV6ABWAQ.js";
import {
  c as c3,
  p
} from "./chunk-BKFJDMH7.js";
import "./chunk-VZ2NWL7V.js";
import "./chunk-VYYE3MMB.js";
import {
  A
} from "./chunk-DQOOLFC2.js";
import {
  o
} from "./chunk-WNS6S2PB.js";
import "./chunk-GKYYWAKB.js";
import "./chunk-YQLWLFLO.js";
import "./chunk-IUYOZV3Q.js";
import "./chunk-ZTT7LSRG.js";
import {
  t
} from "./chunk-ZSWCEZVP.js";
import {
  c as c2
} from "./chunk-57VTVPGW.js";
import "./chunk-S7ARYJPU.js";
import "./chunk-U2M3CH37.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-6JIJOPDX.js";
import "./chunk-EZWSEPLV.js";
import "./chunk-B4CIU6RO.js";
import "./chunk-WKZE7VLE.js";
import "./chunk-PSY2F25Z.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import {
  h
} from "./chunk-GY7MB74R.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-OH73XB3O.js";
import "./chunk-N4HSWD3N.js";
import "./chunk-NBAPQNZI.js";
import "./chunk-CAKUSA2J.js";
import "./chunk-57YJ4LUD.js";
import "./chunk-TB4PV3L4.js";
import "./chunk-2YRG6OI2.js";
import "./chunk-RKUP6IGK.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-BMIYE6BM.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import {
  n
} from "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import {
  b,
  m2
} from "./chunk-7ROW6F7C.js";
import {
  a2 as a3
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
import {
  a as a2,
  c,
  e2 as e,
  l2 as l,
  s
} from "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import {
  N,
  a2 as a,
  m
} from "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js
var a4 = class extends o {
  constructor(e2) {
    super("EdgeProcessingWorker", "extract", { extract: (e3) => [e3.dataBuffer], extractComponentsEdgeLocations: (e3) => [e3.dataBuffer], extractEdgeLocations: (e3) => [e3.dataBuffer] }, e2);
  }
  async process(e2, t2, r2) {
    if (r2) return c2(e2);
    return i2(await this.invoke(new o2(e2), t2));
  }
  async extractEdgeLocations(e2, t2) {
    const r2 = await this.invokeMethod("extractEdgeLocations", new o2(e2), t2);
    return t(r2);
  }
  async extractComponentsEdgeLocations(e2, t2) {
    const r2 = await this.invokeMethod("extractComponentsEdgeLocations", new o2(e2), t2);
    return t(r2);
  }
};
function i2(e2) {
  return { regular: { instancesData: t(e2.regular.instancesData), lodInfo: { lengths: new Float32Array(e2.regular.lodInfo.lengths) } }, silhouette: { instancesData: t(e2.silhouette.instancesData), lodInfo: { lengths: new Float32Array(e2.silhouette.lodInfo.lengths) } }, averageEdgeLength: e2.averageEdgeLength };
}
var o2 = class {
  constructor(r2) {
    this.dataBuffer = r2.data.buffer, this.writerSettings = r2.writerSettings, this.skipDeduplicate = r2.skipDeduplicate, this.indices = m(r2.indices) ? r2.indices.buffer : r2.indices, this.indicesType = m(r2.indices) ? a(r2.indices) ? "Uint32Array" : "Uint16Array" : "Array", this.indicesLength = r2.indicesLength;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js
var l2 = class extends b {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new h2(this.schedule, { fetchAllEdgeLocations: (e2, t2) => this._fetchAllEdgeLocations(e2, t2) });
  }
  async fetchCandidates(e2, t2) {
    const r2 = e2.coordinateHelper, { point: o3 } = e2, s2 = u;
    this.renderCoordsHelper.toRenderCoords(o3, r2.spatialReference, s2);
    const n2 = e2.distance, a5 = "number" == typeof n2 ? n2 : n2.distance, d = await this._workerHandle.invoke({ bounds: A(s2[0], s2[1], s2[2], a5), returnEdge: e2.returnEdge, returnVertex: "none" !== e2.vertexMode }, t2);
    return d.candidates.sort((e3, t3) => e3.distance - t3.distance), d.candidates.map((e3) => this._convertCandidate(r2, e3));
  }
  async add(e2, t2) {
    this._ids.add(e2.id), await this._workerHandle.invokeMethod("add", e2, t2);
  }
  async remove(e2, t2) {
    this._ids.delete(e2.id), await this._workerHandle.invokeMethod("remove", e2, t2);
  }
  _convertCandidate(e2, t2) {
    switch (t2.type) {
      case "edge":
        return new i({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), edgeStart: this._convertRenderCoordinate(e2, t2.start), edgeEnd: this._convertRenderCoordinate(e2, t2.end), isDraped: false });
      case "vertex":
        return new r({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), isDraped: false });
    }
  }
  _convertRenderCoordinate({ spatialReference: e2 }, t2) {
    const r2 = n();
    return this.renderCoordsHelper.fromRenderCoords(t2, r2, e2), c3(r2);
  }
  async _fetchAllEdgeLocations(e2, t2) {
    const r2 = [], o3 = [];
    for (const { id: s2, uid: n2 } of e2.components) this._ids.has(s2) && r2.push((async () => {
      const e3 = await this.fetchEdgeLocations(s2, t2.signal), r3 = e3.locations.buffer;
      return o3.push(r3), { id: s2, uid: n2, objectIds: e3.objectIds, locations: r3, origin: e3.origin, type: e3.type };
    })());
    return { result: { components: (await Promise.all(r2)).filter(({ id: e3 }) => this._ids.has(e3)) }, transferList: o3 };
  }
};
__decorate([m2({ constructOnly: true })], l2.prototype, "renderCoordsHelper", void 0), __decorate([m2({ constructOnly: true })], l2.prototype, "fetchEdgeLocations", void 0), __decorate([m2({ constructOnly: true })], l2.prototype, "schedule", void 0), __decorate([m2({ readOnly: true })], l2.prototype, "availability", void 0), l2 = __decorate([a3("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l2);
var h2 = class extends o {
  constructor(e2, t2) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
};
var u = n();

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js
var p2 = class extends b {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._updatingHandles = new h(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l(this._tracker), this._abortController = e(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e2 } = this, r2 = e2.resourceController;
    this._edgeWorker = new a4(h3(r2)), this._workerHandle = new l2({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: h3(r2), fetchEdgeLocations: async (e3, r3) => {
      if (null == this._tracker) throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r3);
    } }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([c(this._workerHandle), c(this._edgeWorker)]);
  }
  async fetchCandidates(e2, r2) {
    return this._workerHandle.fetchCandidates(e2, r2);
  }
  refresh() {
  }
  async _setupLayerView() {
    if (this.destroyed) return;
    const e2 = this._abortController?.signal, r2 = await this.getLayerView();
    null == r2 || a2(e2) || (this._tracker = r2.trackSnappingSources({ add: (r3, t2) => {
      this._updatingHandles.addPromise(this._workerHandle.add({ id: r3, bounds: t2 }, e2));
    }, remove: (r3) => {
      this._updatingHandles.addPromise(this._workerHandle.remove({ id: r3 }, e2));
    } }));
  }
};
function h3(e2) {
  return (r2) => e2.immediate.schedule(r2);
}
__decorate([m2({ constructOnly: true })], p2.prototype, "getLayerView", void 0), __decorate([m2({ constructOnly: true })], p2.prototype, "view", void 0), __decorate([m2({ readOnly: true })], p2.prototype, "updating", null), __decorate([m2({ readOnly: true })], p2.prototype, "availability", void 0), p2 = __decorate([a3("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p2);

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js
var c4 = class extends b {
  get updating() {
    return this._i3sSources.some((e2) => e2.updating);
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach((e2) => e2.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r2 = this.layerSource.layer;
    this._i3sSources = "building-scene" === r2.type ? this._getBuildingSceneI3SSources(e2, r2) : [this._getSceneLayerI3SSource(e2, r2)];
  }
  async fetchCandidates(e2, r2) {
    const t2 = await Promise.all(this._i3sSources.map((t3) => t3.fetchCandidates(e2, r2)));
    return s(r2), t2.flat();
  }
  refresh() {
    this._i3sSources.forEach((e2) => e2.refresh());
  }
  _getBuildingSceneI3SSources(e2, r2) {
    return r2.allSublayers.toArray().map((t2) => "building-component" === t2.type ? new p2({ getLayerView: async () => (await e2.whenLayerView(r2)).whenSublayerView(t2), view: e2 }) : null).filter(N);
  }
  _getSceneLayerI3SSource(e2, r2) {
    return new p2({ getLayerView: async () => {
      const t2 = await e2.whenLayerView(r2);
      return "scene-layer-graphics-3d" === t2.type ? void 0 : t2;
    }, view: e2 });
  }
};
__decorate([m2({ constructOnly: true })], c4.prototype, "layerSource", void 0), __decorate([m2({ constructOnly: true })], c4.prototype, "view", void 0), __decorate([m2({ readOnly: true })], c4.prototype, "updating", null), __decorate([m2({ readOnly: true })], c4.prototype, "availability", void 0), c4 = __decorate([a3("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c4);
export {
  c4 as SceneLayerSnappingSource
};
//# sourceMappingURL=SceneLayerSnappingSource-DCWRYBVK.js.map

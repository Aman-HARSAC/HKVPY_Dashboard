import {
  K,
  ee,
  oe
} from "./chunk-QRRDKHCN.js";
import "./chunk-C5VVNXRO.js";
import {
  E,
  N
} from "./chunk-6HBJZZMB.js";
import {
  d as d3
} from "./chunk-RZKJNI7W.js";
import "./chunk-5ZIV52UW.js";
import {
  f
} from "./chunk-WX5J7HF3.js";
import "./chunk-FKLP2SQT.js";
import "./chunk-KZRKCJE6.js";
import {
  W
} from "./chunk-B5M5WBZD.js";
import "./chunk-BRPWYF7B.js";
import "./chunk-XS6P245F.js";
import "./chunk-A2VTMNJ3.js";
import "./chunk-Y6MXIULC.js";
import {
  f as f2,
  g
} from "./chunk-V2Z2TRGN.js";
import "./chunk-6XSUK645.js";
import "./chunk-SPVKVXUR.js";
import "./chunk-JOT7NJEQ.js";
import "./chunk-7BG6JEH5.js";
import "./chunk-APN4ZNT7.js";
import "./chunk-J6GGFSW4.js";
import "./chunk-247H27JM.js";
import "./chunk-XHM6OPA5.js";
import {
  lt,
  ut
} from "./chunk-JKDLXAJZ.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-ZUHK7ZF3.js";
import "./chunk-Y37XMD6B.js";
import "./chunk-RZFKWVYS.js";
import "./chunk-M237OA2W.js";
import "./chunk-BXI2CHH4.js";
import "./chunk-UJ7GKG37.js";
import "./chunk-PRLR6XRF.js";
import "./chunk-A5YSIKNU.js";
import "./chunk-YOKAK57B.js";
import "./chunk-MOHPT53R.js";
import "./chunk-BUBWQ637.js";
import "./chunk-BKL2NWNR.js";
import "./chunk-SFCQZULW.js";
import "./chunk-A6FR5S7G.js";
import "./chunk-H3DIC2LV.js";
import "./chunk-IABCCFYF.js";
import "./chunk-Q2YWI3MD.js";
import "./chunk-MMRUQKTW.js";
import {
  Z
} from "./chunk-EFHBHAA4.js";
import "./chunk-6KWDQ4WZ.js";
import "./chunk-RIBJ5N3I.js";
import "./chunk-U4ORDVXL.js";
import "./chunk-MWM2VPG6.js";
import "./chunk-QAR3XYLH.js";
import "./chunk-MWUMZ6I3.js";
import "./chunk-V6P3CLQN.js";
import "./chunk-3S4UQIKR.js";
import "./chunk-ZJ7THKOH.js";
import "./chunk-6VLBUSGM.js";
import "./chunk-IFWBBE4R.js";
import "./chunk-57YJ4LUD.js";
import {
  d as d2
} from "./chunk-M4KX5WGY.js";
import "./chunk-RKUP6IGK.js";
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-4PJ2EMKT.js";
import "./chunk-GLGQSUTI.js";
import "./chunk-N75LYAXI.js";
import "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-U4RGADP6.js";
import "./chunk-2SHUULFD.js";
import {
  n as n2
} from "./chunk-WBIYJFPH.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-V7NNKZ6Y.js";
import "./chunk-TVGGJOM3.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-S2KMNA4F.js";
import "./chunk-C55UYTQS.js";
import {
  r
} from "./chunk-HXC5WSBJ.js";
import "./chunk-RPZFAICW.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-DFNOYW4Q.js";
import "./chunk-JMCZ5MZN.js";
import {
  n
} from "./chunk-COZ6V3AW.js";
import "./chunk-EB4KQTVG.js";
import "./chunk-USWJSG3Z.js";
import "./chunk-GAVCSY6L.js";
import "./chunk-TDLZTKXF.js";
import "./chunk-U6KP2EF3.js";
import {
  T
} from "./chunk-34BRYRUD.js";
import "./chunk-U2QKMJ4B.js";
import "./chunk-4UOM2HCU.js";
import "./chunk-5JATF3X2.js";
import "./chunk-DH5VWAPI.js";
import "./chunk-7ROW6F7C.js";
import {
  s2 as s3
} from "./chunk-DYRGLTSD.js";
import "./chunk-A44PNKPT.js";
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
  d,
  s as s2
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js
var F = "esri.layers.WFSLayer";
var S = class {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = true;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(e, r2 = {}) {
    const { getFeatureUrl: a, getFeatureOutputFormat: o, fields: n3, geometryType: i2, featureType: u, maxRecordCount: l, maxTotalRecordCount: m, maxPageCount: d4, objectIdField: g2, customParameters: f3 } = e, { spatialReference: _, getFeatureSpatialReference: x } = oe(a, u, e.spatialReference);
    try {
      await f2(x, _);
    } catch {
      throw new s("unsupported-projection", "Projection not supported", { inSpatialReference: x, outSpatialReference: _ });
    }
    s2(r2), this._customParameters = f3, this._featureType = u, this._fieldsIndex = Z.fromLayerJSON({ fields: n3, dateFieldsTimeReference: n3.some((e2) => "esriFieldTypeDate" === e2.type) ? { timeZoneIANA: n } : null }), this._geometryType = i2, this._getFeatureUrl = a, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = x, this._maxRecordCount = l, this._maxTotalRecordCount = m, this._maxPageCount = d4, this._objectIdField = g2, this._spatialReference = _;
    let w = await this._snapshotFeatures(r2);
    if (w.errors.length > 0 && (this._supportsPagination = false, w = await this._snapshotFeatures(r2), w.errors.length > 0)) throw w.errors[0];
    const F2 = { type: "object-id", fieldName: g2 };
    return this._queryEngine = new W({ fieldsIndex: this._fieldsIndex, geometryType: i2, hasM: false, hasZ: false, featureIdInfo: F2, spatialReference: _, timeInfo: null, featureStore: new f({ geometryType: i2, hasM: false, hasZ: false }) }), this._queryEngine.featureStore.addMany(w.features), { warnings: E2(w), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async applyEdits() {
    throw new s("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    await this._waitSnapshotComplete();
    return (await this._queryEngine.executeQueryForIds(e, t.signal)).filter(n2);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), await this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async queryAttributeBins(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(e, t.signal);
  }
  async refresh(t) {
    return this._customParameters = t.customParameters, this._maxRecordCount = t.maxRecordCount, this._maxTotalRecordCount = t.maxTotalRecordCount, this._maxPageCount = t.maxPageCount, this._snapshotTask?.abort(), this._snapshotTask = d2((e) => this._snapshotFeatures({ signal: e })), this._snapshotTask.promise.then((e) => {
      this._queryEngine.featureStore.clear(), this._queryEngine.featureStore.addMany(e.features);
      for (const t2 of E2(e)) i.getLogger(F).warn(new s3("wfs-layer:refresh-warning", t2.message, t2.details));
      e.errors?.length && i.getLogger(F).warn(new s3("wfs-layer:refresh-error", "Refresh completed with errors", { errors: e.errors }));
    }, () => {
      this._queryEngine.featureStore.clear();
    }), await this._waitSnapshotComplete(), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _snapshotFeatures(e) {
    const t = e?.signal, r2 = this._maxTotalRecordCount, n3 = this._maxPageCount, i2 = this._supportsPagination && n3 > 1 ? await ee(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: t }) : void 0;
    let u = [];
    const l = [];
    if (null == i2) try {
      u = await this._singleQuery(t);
    } catch (c) {
      d(c) || l.push(c);
    }
    else {
      const e2 = Math.min(i2, r2), s4 = T2(this, r(Math.ceil(e2 / this._maxRecordCount), 1, n3), t);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => j(s4, u, l)));
    }
    return s2(t), { features: u, totalRecordCount: i2, maxTotalRecordCount: r2, maxPageCount: n3, errors: l };
  }
  async _singleQuery(e) {
    const t = Number.isFinite(this._maxRecordCount) && this._maxRecordCount > 0 ? this._maxRecordCount : void 0, r2 = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, count: t, signal: e });
    return this._processGeoJSON(r2, { signal: e });
  }
  async _pageQuery(e, t) {
    const r2 = e * this._maxRecordCount, a = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, startIndex: r2, count: this._maxRecordCount, signal: t });
    return this._processGeoJSON(a, { startIndex: r2, signal: t });
  }
  _processGeoJSON(e, t) {
    E(e, this._getFeatureSpatialReference.wkid);
    const { startIndex: r2, signal: a } = t;
    s2(a);
    const o = N(e, { geometryType: this._geometryType, hasZ: false, objectIdField: this._objectIdField });
    if (!T(this._spatialReference, this._getFeatureSpatialReference)) for (const s4 of o) null != s4.geometry && (s4.geometry = ut(g(lt(s4.geometry, this._geometryType, false, false), this._getFeatureSpatialReference, this._spatialReference)));
    let n3 = r2 ?? 1;
    for (const s4 of o) {
      const e2 = {};
      d3(this._fieldsIndex, e2, s4.attributes, true), s4.attributes = e2, null == e2[this._objectIdField] && (s4.objectId = e2[this._objectIdField] = n3++);
    }
    return o;
  }
};
function* T2(e, t, r2) {
  for (let a = 0; a < t; a++) yield e._pageQuery(a, r2);
}
async function j(e, t, r2) {
  let a = e.next();
  for (; !a.done; ) {
    try {
      const e2 = await a.value;
      t.push(...e2);
    } catch (s4) {
      d(s4) || r2.push(s4);
    }
    a = e.next();
  }
}
function E2(e) {
  const t = [];
  return null != e.totalRecordCount && (e.features.length < e.totalRecordCount && t.push({ name: "wfs-layer:maxRecordCount-too-low", message: `Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount } }), e.totalRecordCount > e.maxTotalRecordCount && t.push({ name: "wfs-layer:large-dataset", message: `The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount, maxTotalRecordCount: e.maxTotalRecordCount } })), t;
}
export {
  S as default
};
//# sourceMappingURL=WFSSourceWorker-NRZC23HZ.js.map

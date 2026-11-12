import {
  n,
  r as r2
} from "./chunk-RASRDTZY.js";
import "./chunk-7IWWVLXS.js";
import "./chunk-HQBA5CXB.js";
import {
  i as i2
} from "./chunk-TUP4XPID.js";
import {
  b
} from "./chunk-VUEXSBZU.js";
import {
  d as d2
} from "./chunk-Q6JE466B.js";
import "./chunk-D4KVFVL2.js";
import "./chunk-NW5QA5L7.js";
import "./chunk-HVH25NPP.js";
import "./chunk-OTZD4WFU.js";
import "./chunk-KLDMYKH3.js";
import "./chunk-OFGBFLAH.js";
import "./chunk-2SJNYXD3.js";
import "./chunk-6WMXSEHS.js";
import "./chunk-3NWXKZCR.js";
import "./chunk-4DIUWYHT.js";
import "./chunk-7TTBI2HO.js";
import "./chunk-LHXB2FVV.js";
import "./chunk-VTQ3M52V.js";
import "./chunk-5XPSWKAI.js";
import "./chunk-GXBKLQ4R.js";
import "./chunk-52224I66.js";
import "./chunk-DJ2VONAQ.js";
import "./chunk-JBITOOAG.js";
import "./chunk-JKDLXAJZ.js";
import "./chunk-XJTFKAAL.js";
import "./chunk-ZUHK7ZF3.js";
import "./chunk-Y37XMD6B.js";
import "./chunk-RZFKWVYS.js";
import "./chunk-DLJ6Y2UM.js";
import "./chunk-E7XZD3BU.js";
import "./chunk-7IQLH32C.js";
import "./chunk-RDFDFTO6.js";
import "./chunk-JVEDEHYM.js";
import {
  p,
  r
} from "./chunk-YRPHVT25.js";
import "./chunk-DNOVVSTL.js";
import {
  h
} from "./chunk-DHTE4BFD.js";
import "./chunk-MRVM6XH5.js";
import "./chunk-6XIPZBT7.js";
import {
  e
} from "./chunk-FISZH27W.js";
import "./chunk-2KJCRN2H.js";
import "./chunk-ZNPAPEQU.js";
import "./chunk-EZLF5T7L.js";
import "./chunk-H7NF3WNO.js";
import "./chunk-2DDKJLYG.js";
import "./chunk-GY7MB74R.js";
import {
  f
} from "./chunk-M237OA2W.js";
import "./chunk-BXI2CHH4.js";
import "./chunk-HB6HRUDJ.js";
import "./chunk-BKL2NWNR.js";
import "./chunk-NBAPQNZI.js";
import "./chunk-U4PVARIM.js";
import "./chunk-5YT5CEN4.js";
import "./chunk-UZVXLLR6.js";
import "./chunk-GLGQSUTI.js";
import "./chunk-N75LYAXI.js";
import "./chunk-BUQVAMRX.js";
import "./chunk-OXBINIBC.js";
import "./chunk-WWZXCVZD.js";
import "./chunk-D3ZX65FB.js";
import "./chunk-4EQOYGFB.js";
import "./chunk-5MNDHBTZ.js";
import "./chunk-26FGXCQ6.js";
import "./chunk-LERWNH2Q.js";
import "./chunk-6YICR2EO.js";
import "./chunk-UJKR5KHP.js";
import "./chunk-CMZYNK44.js";
import "./chunk-PVAT2NHO.js";
import "./chunk-STQFPQVU.js";
import "./chunk-NOPG2N5A.js";
import "./chunk-C55UYTQS.js";
import "./chunk-HXC5WSBJ.js";
import "./chunk-FZRUD64V.js";
import "./chunk-YIHXRKUE.js";
import "./chunk-RPZFAICW.js";
import "./chunk-SJ73CYXJ.js";
import "./chunk-O2JWOAJX.js";
import "./chunk-JMCZ5MZN.js";
import "./chunk-NNNAQZPE.js";
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
import {
  m2 as m
} from "./chunk-7ROW6F7C.js";
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
import {
  d
} from "./chunk-W6MJCXR6.js";
import {
  i3 as i
} from "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y = [0, 0];
var _ = class extends i2(r2(b(d2))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && T(t.tileInfo?.spatialReference, this.view.spatialReference)) return t;
    const i3 = this._getTileMatrixSetBySpatialReference(e2);
    return i3 && i3.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i3.id, i3) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = this.tileMatrixSet?.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: f.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    return this.layer.activeLayer.tileMatrixSets?.some((t) => T(t.tileInfo?.spatialReference, e2)) ?? false;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i3 = t.bitmap;
    return [i3.x, i3.y] = this._tileInfoView.getTileCoords(y, t.key), i3.resolution = this._tileInfoView.getTileResolution(t.key), [i3.width, i3.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r3, resamplingLevel: a2 = 0 } = t;
    if (!s) return this._fetchImage(e2, r3);
    const l = new e(0, 0, 0, 0);
    let o;
    try {
      await s.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r3 }), o = await this._fetchImage(l, r3);
    } catch (n2) {
      if (d(n2)) throw n2;
      if (a2 < 3) {
        const i3 = this._tileInfoView.getTileParentId(e2.id);
        if (i3) {
          const s2 = new e(i3), r4 = await this.fetchTile(s2, { ...t, resamplingLevel: a2 + 1 });
          return n(this._tileInfoView, r4, s2, e2);
        }
      }
      throw n2;
    }
    return n(this._tileInfoView, o, l, e2);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s) {
        d(s) || i.getLogger(this).error(s);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    return e2.tileMatrixSets?.find((e3) => T(e3.tileInfo?.spatialReference, this.view.spatialReference));
  }
};
__decorate([m({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = __decorate([a("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-Q77N7BMV.js.map

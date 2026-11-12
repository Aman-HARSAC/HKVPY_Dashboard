import {
  d
} from "./chunk-KQTG26MT.js";
import {
  t as t2
} from "./chunk-YJLNGOA5.js";
import "./chunk-DH5VWAPI.js";
import "./chunk-7ROW6F7C.js";
import "./chunk-DYRGLTSD.js";
import "./chunk-A44PNKPT.js";
import "./chunk-U5N37DRX.js";
import "./chunk-BL6K2K3K.js";
import "./chunk-PXFESYJY.js";
import "./chunk-QLJQMJ35.js";
import "./chunk-WWTPYTMN.js";
import {
  H2 as H,
  P,
  t3 as t
} from "./chunk-YJVAYQRF.js";
import "./chunk-PRKAQBHS.js";
import "./chunk-W6MJCXR6.js";
import "./chunk-4K6SV242.js";
import "./chunk-ZXWV3PMI.js";
import "./chunk-G26ADAPQ.js";

// node_modules/@arcgis/core/rest/query/operations/queryAttachments.js
function s(t3) {
  const o = t3.toJSON();
  return o.attachmentTypes && (o.attachmentTypes = o.attachmentTypes.join(",")), o.keywords && (o.keywords = o.keywords.join(",")), o.globalIds && (o.globalIds = o.globalIds.join(",")), o.objectIds && (o.objectIds = o.objectIds.join(",")), o.size && (o.size = o.size.join(",")), o.orderByFields && (o.orderByFields = o.orderByFields.join(",")), o;
}
function a(o, r) {
  const s2 = {};
  for (const a2 of r) {
    const { parentObjectId: r2, parentGlobalId: c2, attachmentInfos: i2 } = a2;
    for (const a3 of i2) {
      const { id: i3 } = a3, d2 = P(t(`${o.path}/${r2}/attachments/${i3}`)), m = d.fromJSON(a3);
      m.set({ url: d2, parentObjectId: r2, parentGlobalId: c2 }), s2[r2] ? s2[r2].push(m) : s2[r2] = [m];
    }
  }
  return s2;
}
function c(t3, e, n) {
  let a2 = { query: t2({ ...t3.query, f: "json", ...s(e) }) };
  return n && (a2 = { ...n, ...a2, query: { ...n.query, ...a2.query } }), H(t3.path + "/queryAttachments", a2).then((t4) => t4.data.attachmentGroups);
}
async function i(t3, e, r) {
  const { objectIds: n } = e, s2 = [];
  for (const a2 of n) s2.push(H(t3.path + "/" + a2 + "/attachments", r));
  return Promise.all(s2).then((t4) => n.map((o, e2) => ({ parentObjectId: o, attachmentInfos: t4[e2].data.attachmentInfos })));
}
export {
  c as executeAttachmentQuery,
  i as fetchAttachments,
  a as processAttachmentQueryResult
};
//# sourceMappingURL=queryAttachments-USUOECOX.js.map

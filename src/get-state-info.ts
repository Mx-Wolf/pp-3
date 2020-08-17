import { StateInfo } from "./state-info";
export function getStateInfo(search: string): StateInfo {
  const qs = new URLSearchParams(search);
  const r: StateInfo = {
    attachmentDataId: Number(qs.get("attachment-data-id")),
    otp: Number(qs.get("otp")),
    xid: Number(qs.get("xid")),
  };
  return r;
}
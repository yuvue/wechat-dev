import request from "@/utils/request";

export function _sendMessage(params) {
  return request("put", "/message", params);
}

export function _readMessage(params) {
  return request("patch", "/message/read", params);
}

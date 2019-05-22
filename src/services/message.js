import request from "@/utils/request";

export function _sendMessage(params) {
  return request("put", "/message", params);
}

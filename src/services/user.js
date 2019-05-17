import request from "util/request";

export function login(params) {
  return request("post", "/login", params);
}

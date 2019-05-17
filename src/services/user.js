import request from "util/request";

export function login(params) {
  return request("post", "/login", params);
}

export function userEdit(params) {
  return request("patch", "user/edit", params);
}

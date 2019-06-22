import request from '@/utils/request'

export function login(params) {
  return request('post', '/login', params)
}

export function register(params) {
  return request('put', '/user', params)
}

export function userEdit(params) {
  return request('patch', 'user/edit', params)
}

export function searchUser(params) {
  return request('get', '/user', params)
}

export function getVerifyCode(params) {
  return request('get', '/user/code', params)
}

import request from '@/utils/request'

export function _addMoment(params) {
  return request('put', '/moment', params)
}

export function _postComent(params) {
  return request('post', '/moment/comment', params)
}

export function _collectMoment(params) {
  return request('post', '/moment/collect', params)
}

export function _likeMoment(params) {
  return request('post', '/moment/like', params)
}

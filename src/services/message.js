import request from '@/utils/request'

export function _sendTextMessage(params) {
  return request('put', '/message/text', params)
}

export function _sendAudioMessage(params) {
  return request('put', '/message/audio', params)
}

export function _readMessage(params) {
  return request('patch', '/message/read', params)
}

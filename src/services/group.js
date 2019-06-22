import request from '@/utils/request'

export function addGroup(params) {
  return request('put', '/group', params)
}

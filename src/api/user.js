import request from '@/utils/request'

const API = {
  LOGIN: '/admin/account/login',
  USERINFO: '/admin/account/getUserInfo'
}

export function login(data) {
  return request({
    url: API.LOGIN,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: API.USERINFO,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

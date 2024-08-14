import request from '@/utils/request'

const API = {
  PAGE: '/book/getBookList/teach'
}

export function reservePageApi(data) {
  return request({
    url: API.PAGE,
    method: 'PUT',
    data
  })
}

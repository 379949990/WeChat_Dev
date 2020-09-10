import request from './../utils/request'

export function getBannerlist (params) {
  return request.get('/banner',params)
}

export function getProlist (params) {
  return request.get('/pro', params)
}

export function getCartlist (params) {
  return request.get('/cart', params)
}
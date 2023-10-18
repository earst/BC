// src/api/banner.js
import request from '@/utils/request'

export function getBannerList () {
  return request.get('/banner/list')
}

export function addBanner (params) {
  return request.post('/banner/add', params)
}

export function deleteBanner (params) {
  return request.get('/banner/delete', { params })
}
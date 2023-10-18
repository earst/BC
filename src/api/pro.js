import request from '@/utils/request'

export function getSearchList (params) {
  return request.post('/pro/searchPro', params)
}

export function updateRecommendFlag (params) {
  return request.post('/pro/updateFlag', { type: 'isrecommend', ...params })
}

export function updateSeckillFlag (params) {
  return request.post('/pro/updateFlag', { type: 'isseckill', ...params })
}

export function updateSaleFlag (params) {
  return request.post('/pro/updateFlag', { type: 'issale', ...params })
}
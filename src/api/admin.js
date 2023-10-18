import request from '@/utils/request'

export function adminLogin (params) {
  return request.post('/admin/login', params)
}

//封装获取管理员信息的接口
export function getAdminList () {
  return request.get('/admin/list')
}
export function deleteAdmin (params) {
  return request.post('/admin/delete', params)
}

//添加管理员接口
export function addAdmin (params) {
  return request.post('/admin/add', params)
}
//编辑管理员接口
export function updateAdmin (params) {
  return request.post('/admin/update', params)
}
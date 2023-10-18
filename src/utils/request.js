// src/utils/request.js
// 1.引入axios
import axios from 'axios'
// 因为router 是单独暴露的，此处可以直接引入使用
import router from '@/router'
// 2.自定义axios 
// 接口文档： http://121.89.205.189:3000/admindoc/
const ins = axios.create({
  baseURL: 'http://121.89.205.189:3000/admin'
})

// 3.配置拦截器
// 请求拦截器
ins.interceptors.request.use((config) => {
  // 请求之前干什么
  // 后台管理系统所有的页面都需要从服务器获取数据
  // 思考：要数据就必须是登录才可以
  // 请求数据时需要将 是否 登录的标识传递给 服务器，服务器判断登录标识 是否可用，
  // 如果可以使用，返回你要的数据，如果不可以使用，告诉用户，登录失效，用户重新登录
  // 登录标识：token 登录以后后端返回给前端，前端一般会将其存入到本地存储
  // 如何将 token 传递给服务器，一般从本地存储提取，然后在 头信息（请求头） 中传递

  config.headers.token = localStorage.getItem('token')

  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
ins.interceptors.response.use((response) => {
  // 判断登录标识 是否有效，如果无效跳转至登录页面，如果有效，不做操作
  if (response.data.code === '10119') {
    // 没有传递token 或者 token过期
    // 跳转到登录页面 重新登录
    router.push('/login')

  } 
  return response
}, (error) => {
  return Promise.reject(error)
})

// 暴露自定义的 axios
export default ins
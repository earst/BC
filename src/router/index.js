import { createRouter, createWebHistory } from 'vue-router'

// 定义好的分模块路由
import bannerRoutes from "./modules/banner"

import proRoutes from "./modules/pro"

import accountRoutes from "./modules/account"
//首页 和登录页的路由 
import Layout from "@/Layout/index.vue"

import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'

export const constantRoutes =[
  {
    path:"/login",
    component:Login,
    hidden:true
  },

  {
    path:'/',
    redirect:'/home',
    component:Layout,
    children:[
      {
        path:"/home",
        component:Home,
        meta:{
          title:"系统首页",
          icon:"HomeFilled"
        }
      }
    ]
  }
]

//整合路由
export const asyncRoutes=[
  bannerRoutes,proRoutes,accountRoutes
]
//5.合并路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes.concat(asyncRoutes)
})

export default router

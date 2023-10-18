<!-- src/layout/components/breadcrumb/index.vue -->
<script setup>
  import { constantRoutes, asyncRoutes} from '@/router'
  import { watchEffect, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const menuList = [...constantRoutes, ...asyncRoutes]

  let breadcrumbNameMap = {}

  function getBreadcrumbNameMap (menuList) {
    menuList.forEach(item => {
      if (item.path !== '/login') {
        if (item.children) {
          if (item.children.length === 1) {
          
            breadcrumbNameMap[item.children[0].path] = item.children[0].meta.title 
          } else {
            breadcrumbNameMap[item.path] = item.meta.title 
            getBreadcrumbNameMap(item.children)
          }
        } else {
          breadcrumbNameMap[item.path] = item.meta.title 
        }
      }
    })
  }
  getBreadcrumbNameMap(menuList)
  // console.log(breadcrumbNameMap) // 需要准备的数据

  // /banner/list/kind 
  // breadcrumbNameMap['/banner']  breadcrumbNameMap['/banner/list'] breadcrumbNameMap['/banner/list/kind']
  // 轮播图管理 轮播图列表 分类轮播图

  const route = useRoute()
  // const url = route.path
  // console.log(url) // /banner/list/kind 

  function getData () {
    const arr = route.path.split('/') // ['', 'banner', 'list', 'kind']
    arr.shift() // ['banner', 'list', 'kind']
    // ['/banner', '/banner/list', '/banner/list/kind']

    const newArr = []
    arr.map((_, index) => {
      const newUrl = '/' + arr.slice(0, index + 1).join('/')
      console.log(newUrl)
      newArr.push(newUrl)
    })
  
    return newArr
  }  
  let breadcrumbArr = ref([])
  watchEffect(() => { // 路由变化时 重新获取面包屑 ---- 保证数据的双向绑定
    breadcrumbArr.value = getData() // 修改使用 value 保证响应式
  })
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">系统首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) of breadcrumbArr" :key="index">
      <a :href="item">{{ breadcrumbNameMap[item] }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
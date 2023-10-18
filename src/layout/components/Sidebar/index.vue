<script setup>

import {ref} from "vue"
import SidebarItem from './SidebarItem.vue'
import Logo from "../logo/index.vue"
import {constantRoutes,asyncRoutes} from "@/router"
import { useRoute } from 'vue-router'
import { getMenuList } from '@/utils/get-menu-list'

// const menuList =constantRoutes.concat(asyncRoutes)
const checkedkeys = localStorage.getItem('adminname') !== 'admin' ? localStorage.getItem('checkedkeys').split(',') : []
console.log('checkedkeys', checkedkeys)
const menuList =getMenuList(constantRoutes.concat(asyncRoutes),checkedkeys)
console.log(menuList)

 const collapse =ref(false)
const route = useRoute()
console.log(route)
</script>

<template>
  <el-aside :width="collapse?'50px':'200px'">
    <Logo :collapse="collapse"
    
    ></Logo>
    <!-- <div>左侧菜单</div> -->
    <el-menu
    :collapse="collapse"
    :unique-opened="true"
    :default-active="route.path"
    background-color="#001529"
    text-color="#fff"
    >
    <SidebarItem
    v-for="item of menuList"
    :key="item.path"
    :item="item"
    >
    </SidebarItem>
    </el-menu>
  <div class="changeIcon" :style="{width :collapse ?'50px':'200px'}">
    <el-icon color = "#fff" v-if="collapse" @click="collapse=!collapse"><ArrowRight /></el-icon>
    <el-icon color = "#fff" @click="collapse=!collapse" v-else><ArrowLeft /></el-icon>
  </div>
  </el-aside>
</template>

<style lang="scss">
.changeIcon{
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
}
</style>
<script setup>
import {useRouter} from "vue-router"
const props =defineProps({
  item:{
    type:Object
  }
  }
)
const router = useRouter()
 const changeUrl=(path)=>{
  console.log(path)
  router.push(path)  //编程式导航的跳转
 }
</script>

<template>
  <div v-if="!item.hidden">
   <el-menu-item @click="changeUrl(item.path)" v-if="item.children&&item.children.length===1" :index="item.path">
    <el-icon>
      <component :is="item.children[0].meta.icon"></component>
    </el-icon>
   <span>{{item.children[0].meta.title}}</span>
   </el-menu-item>
   <el-menu-item @click="changeUrl(item.path)"  v-else-if="!item.children" :index="item.path" >
   <el-icon>
       <component :is="item.meta.icon"></component>
   </el-icon>
   <span>{{ item.meta.title }}</span>
   </el-menu-item>

   <el-sub-menu v-else :index="item.path">
    <template #title>
     <el-icon>
      <component :is="item.meta.icon"></component>
     </el-icon>
      <span>{{ item.meta.title  }}</span>
    </template>
  <sidebar-item v-for="itm of item.children" :key="item.path" :item="itm">

  </sidebar-item>
   </el-sub-menu>
  </div>
</template>
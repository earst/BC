<!-- src/layout/index.vue -->
<!-- 后台管理系统两种布局：登录布局 + 其他布局 -->
<script setup>
  import { computed } from 'vue';
  import { useAdminStore } from '../stores/admins';
  import SideBar from './components/Sidebar/index.vue'
  import Breadcrumb from './components/breadcrumb/index.vue'
  import { ArrowDown } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()
  // const adminname = localStorage.getItem('adminname')

  const admin =useAdminStore()
  const adminname =computed(()=>admin.adminname)

  const logout = () => {
    localStorage.removeItem('adminname')
    localStorage.removeItem('token')
    localStorage.removeItem('checkedkeys')
    localStorage.removeItem('role')

    router.push('/login')
  }
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <SideBar />
      <el-container>
        <el-header :style="{ display: 'flex', alignItems: 'center'}">
          <Breadcrumb />
          <el-dropdown :style="{ position: 'absolute', right: '16px'}">
            <span class="el-dropdown-link">
              欢迎您，{{  adminname  }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <!--  内容区域变化 -->
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
// src/router/modules/account.js
// @符号代表 src 目录结构
import Layout from '@/layout/index.vue'
import User from '@/views/account/user.vue'
import Admin from '@/views/account/Admin.vue'
export default {
  path: '/account', // 地址栏显示的路径
  redirect: '/account/user', // 当用户输入 /account 路由时，自动跳转到 /account/user 路由
  component: Layout, // 账户管理使用主界面布局结构
  name: 'account', // 给路由起名字 - 命名路由 - 具有唯一性 - 后期会使用
  meta: {
    title: '账户管理', // 左侧菜单栏显示的名字
    icon: 'User' // 左侧菜单栏显示的图标
  },
  children: [ // 代表账户管理下有二级路由
    {
      path: '/account/user',
      component: User,
      meta: {
        title: '用户列表'
      }
    },
    {
      path: '/account/admin',
      component: Admin,
      meta: {
        title: '管理员列表'
      }
    }
  ]
}
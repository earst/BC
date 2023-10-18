// src/router/modules/pro.js
import Layout from '@/layout/index.vue'
import ProList from '@/views/pro/list.vue'
import ProSearch from '@/views/pro/search.vue'
export default {
  path: '/pro',
  redirect: '/pro/list',
  component: Layout,
  meta: {
    title: '产品管理',
    icon: 'Fries'
  },
  children: [
    {
      path: '/pro/list',
      component: ProList,
      meta: {
        title: '产品列表'
      }
    },
    {
      path: '/pro/search',
      component: ProSearch,
      meta: {
        title: '筛选列表'
      }
    }
  ]
}
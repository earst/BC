// src/router/modules/banner.js
import Layout from '@/layout/index.vue'
import BannerAdd from '@/views/banner/add.vue'
import BannerList from '@/views/banner/list.vue'
import BannerHomeList from '@/views/banner/components/home.vue'
import BannerKindList from '@/views/banner/components/kind.vue'
export default {
  path: '/banner',
  name: 'banner',
  redirect: '/banner/list',
  component: Layout,
  meta: {
    title: '轮播图管理',
    icon: 'PictureFilled'
  },
  children: [
    {
      path: '/banner/list',
      component: BannerList,
      redirect: '/banner/list/home',
      meta: {
        title: '轮播图列表'
      },
      children: [
        {
          path: '/banner/list/home',
          component: BannerHomeList,
          meta: {
            title: '首页轮播图'
          },
        },
        {
          path: '/banner/list/kind',
          component: BannerKindList,
          meta: {
            title: '分类页轮播图'
          },
        }
      ]
    },
    {
      path: '/banner/add',
      component: BannerAdd,
      meta: {
        title: '添加轮播图'
      },
      hidden:true
    }
  ]
}
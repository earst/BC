// import './assets/main.css' 不使用默认样式

//重置样式表
import 'normalize.css/normalize.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入uI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'
import router from './router'
//图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//配置UI库
app.use(ElementPlus, {
    locale: zhCn,
})
//使用图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

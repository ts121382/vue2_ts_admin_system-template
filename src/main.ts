import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import router from './router'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg
import 'virtual:svg-icons-register'
import globalComponent from '@/components'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
//注册路由
app.use(router)
app.mount('#app')

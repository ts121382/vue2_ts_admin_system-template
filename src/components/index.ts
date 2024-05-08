import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allglobalComponent: any = { SvgIcon }

export default {
  install(app: any) {
    Object.keys(allglobalComponent).forEach((key) => {
      app.component(key, allglobalComponent[key])
    })
    //图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}

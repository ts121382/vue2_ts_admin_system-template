import SvgIcon from './SvgIcon/index.vue'

const allglobalComponent: any = { SvgIcon }

export default {
  install(app: any) {
    Object.keys(allglobalComponent).forEach((key) => {
      app.component(key, allglobalComponent[key])
    })
  },
}

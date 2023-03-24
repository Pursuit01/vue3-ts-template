import store from '@/store'
export default {
  install(app: any, options: Object) {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o, p: string) => {
        if (o) return o[p]
      }, options[store.state.lang])
    }
  }
}

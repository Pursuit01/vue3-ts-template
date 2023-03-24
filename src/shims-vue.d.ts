/* eslint-disable */
export {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: Function
  }
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

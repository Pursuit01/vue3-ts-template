import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 国际化
import i18nPlugin from '@/plugins/translate'
import i18n from '@/locales'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(i18nPlugin, i18n)
app.use(store).use(router).use(ElementPlus).mount('#app')

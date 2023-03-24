import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 国际化
import i18nPlugin from "@/plugins/translate";
import i18n from "@/locales";

import router from "./router";
import store from "./store";

// Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Element Plus Icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(i18nPlugin, i18n);
app.use(store).use(router).use(ElementPlus).mount("#app");

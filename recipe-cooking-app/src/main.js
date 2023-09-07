import { createApp } from "vue";
import "./assets/general.css";
import "./assets/style.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";

import BaseSpiner from "./components/UI/BaseSpiner.vue";

import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.component("base-spiner", BaseSpiner);

app.use(store);
app.use(router);
app.mount("#app");

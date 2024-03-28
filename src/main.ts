import { createApp } from "vue"
import router from "./router/index"
import "./global_style.scss"
import App from "./App.vue"

createApp(App).use(router).mount("#app")

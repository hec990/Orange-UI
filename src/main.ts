// 组件样式
import './lib/orange.scss'
import './assets/css/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router";

const app = createApp(App)
app.use(router)
app.mount('#app')
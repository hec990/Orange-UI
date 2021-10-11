import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        // 当我访问根目录，访问这个组件
        {path:"/",component:Home},
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
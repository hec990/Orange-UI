import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()

//导入组件
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'


const router = createRouter({
    history:history,
    routes:[
        // 当我访问根目录，访问这个组件
        {path:"/",component:Home},
        {path:"/doc",component:Doc}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
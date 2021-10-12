import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()

//导入组件
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

const router = createRouter({
    history:history,
    routes:[
        // 当我访问根目录，访问这个组件
        {path:"/",component:Home},
        {path:"/doc",component:Doc,children:[
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo},
            ]}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
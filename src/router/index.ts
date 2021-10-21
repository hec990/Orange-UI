import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/switch/SwitchDemo.vue'
import ButtonDemo from '../components/button/ButtonDemo.vue'
import DialogDemo from '../components/dialog/DialogDemo.vue'
import TabsDemo from '../components/tabs/TabsDemo.vue'
import Install from '../components/Install.vue'
import Introduce from '../components/Introduce.vue'
import Start from '../components/Start.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        // 当我访问根目录，访问这个组件
        {path:"/",component:Home},
        {path:"/doc",component:Doc,children:[
                {path:"install",component:Install},
                {path:"introduce",component:Introduce},
                {path:"start",component:Start},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo},
            ]}
    ]
})

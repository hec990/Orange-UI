<template>
  <Tabnav></Tabnav>
  <div class="layout">
    <aside v-if="asideVisible">
      <ol>
        <li>
          <h4>文档</h4>
        </li>
        <li>
          <router-link to="/doc/introduce">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/start">开始使用</router-link>
        </li>
        <li>
          <h4>组件</h4>
        </li>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 对话框</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script lang="ts">
import Tabnav from "../components/Tabnav.vue";
import {inject, Ref} from "vue";
export default {
  components: {Tabnav},
  setup(){
    const asideVisible = inject<Ref<boolean>>("asideVisible") // get
    return {asideVisible}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
}
aside {
  display: flex;
  width: 260px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: white;
  z-index:10;
  @media (max-width:414px){
    position: absolute;
    width: 200px;
  }
}
aside>ol{
  width: 100%;
}
aside>ol>li {
  padding: 10px;
}
aside>ol>li:hover {
  background-color: #E5F2FA;
}
aside>ol>li>a {
  margin-left: 20px;
}
.router-link-active {
  color: orange;
}

main {
  padding: 10px;
  width: 100%;
}


</style>
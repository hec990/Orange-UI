<template>
  <div class="layout">
    <Tabnav></Tabnav>
    <div class="content">
      <aside v-if="asideVisible">
        <ol>
          <h4>文档</h4>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>
          <h4>组件</h4>
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
  </div>
</template>
<script lang="ts">
import Tabnav from "../components/Tabnav.vue";
import {inject, Ref} from "vue";

export default {
  components: {Tabnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
$height:100vh;
$padding:10px;

.layout {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: row;
    mix-height: $height;
  }
  aside {
    display: flex;
    width: 260px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 10;
    min-height: $height;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    @media (max-width: 414px) {
      position: absolute;
      width: 200px;
    }
     > ol {
      width: 100%;
       > h4 {
         padding: $padding;
       }
       > li {
         padding: $padding;
         margin-left: 20px;
         &:hover {
           background-color: #E5F2FA;
         }
       }
    }
  }
  main {
    padding: $padding;
    width: 100%;
    // PC端、ipad
    @media (min-width: 415px) {
      padding: 40px;
    }
  }
}
.router-link-active {
  color: orange;
}

</style>
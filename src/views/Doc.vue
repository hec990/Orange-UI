<template>
 <Tabnav/>
  <div class="content">
    <aside>
      <h3>组件列表</h3>
      <ol>
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
          <router-link to="/doc/tabs">Tabs 选项卡</router-link>
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
import Aside from '../components/Aside.vue'
export default {
  components: {Tabnav,Aside}
}
</script>

<style scoped>
.content {
  display: flex;
}
aside {
  display: inline-block;
  width: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: orange;
}
aside ol {
  margin-top: 10px;
}
aside ol li {
  padding: 8px;
}

</style>
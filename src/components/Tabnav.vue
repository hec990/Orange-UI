<template>
  <div class="tabnav">
    <div class="logo">
        <div class="logo-img" @click="toggleMenu">
          <img src="../assets/images/list.png">
        </div>
       <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from "vue";

export default {
    setup(){
      const asideVisible = inject<Ref<boolean>>("asideVisible") // get
      console.log(asideVisible.value);
      const  toggleMenu = ()=>{
        asideVisible.value = !asideVisible.value
      }
      return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
.tabnav {
  background-color: #FD9C05;
}
.logo {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-img {
    width: 28px;
    height: 28px;
    margin-left: 10px;
    img {
      opacity: 0;
    }
  }
  a {
    font-size: 16px;
    margin-right: 10px;
  }
}

// 手机端时展示手机端的图标 (PC、ipad不展示图标)
@media only screen and (max-device-width: 414px){
  .logo > .logo-img > img {
    opacity: 1;
  }
}
</style>
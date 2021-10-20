<template>
  <div class="tabnav">
    <div class="logo">
        <div class="logo-img" @click="toggleMenu">
          <img src="src/assets/images/list.png">
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
  height: 60px;
}
.logo {
  display: flex;
  justify-content: space-between;
  .logo-img {
    width: 28px;
    height: 28px;
    img {
      margin-top:16px;
      margin-left: 10px;
      opacity: 0;
    }
  }
  a {
    margin-top: 18px;
    margin-right: 10px;
    font-size: 16px;
    display: none;
  }
}




// 手机端时展示手机端的图标 和 返回首页（ipad / PC 不展示 手机端图标和返回首页文字）
@media only screen and (max-device-width: 414px){
  .logo > .logo-img > img {
    opacity: 1;
  }
  .logo > a {
    display: block;
  }
}
</style>
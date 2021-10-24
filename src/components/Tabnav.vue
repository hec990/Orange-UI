<template>
  <div class="tabnav">
    <div class="logo">
      <div class="logo-img" @click="toggleMenu">
        <!-- 手机端图标-->
        <span>
             <img class="img1" src="../assets/images/list.png">
        </span>
        <!-- PC端图标-->
        <span>
              <img class="img2" src="../assets/images/pc-logo.png">
        </span>
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
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}
.logo {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-img {
    margin-left: 10px;

    .img1{
      width: 28px;
      display: none;
    }
    .img2{
      width: 40px;
      display: none;
    }

  }
  a {
    font-size: 16px;
    margin-right: 10px;
  }
}

 // 手机端图片
@media only screen and (max-device-width: 414px){
  .logo .logo-img .img1 {
    display: block;
  }
}

// PC端图片
@media only screen and (min-device-width: 1000px){
  .logo .logo-img .img2 {
    display: block;
  }
}
</style>
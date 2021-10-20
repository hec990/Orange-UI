<template>
  <div class="tabnav">
   <div class="logo">
     <img src="../../src/assets/images/gulu.png">
     <router-link to="/doc/switch">进入组件</router-link>
   </div>
  </div>
</template>

<style lang="scss" scoped>
.tabnav {
  background-color: #FD9C05;
  .logo {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
      margin-left: 10px;
    }
    a {
      margin-right: 10px;
    }
  }
}



// 手机
@media only screen and (max-device-width: 414px){
  .logo > .logo-img > img {
    opacity: 1;
  }
}
// ipad
@media only screen and (min-device-width: 768px){
  .logo > a {
    display: block;
  }
}
</style>
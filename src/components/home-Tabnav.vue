<template>
  <div class="tabnav">
   <div class="logo">
     <img src="../../src/assets/images/pc-logo.png">
     <router-link to="/doc/switch">进入组件</router-link>
   </div>
  </div>
</template>

<style lang="scss" scoped>
$margin:10px;
.tabnav {
  background-color: #FD9C05;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  .logo {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      margin-left: $margin;
    }
    a {
      margin-right: $margin;
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
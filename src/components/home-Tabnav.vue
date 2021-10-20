<template>
  <div class="tabnav">
   <div class="logo">
     <img src="../../src/assets/images/gulu.png">
   </div>
  </div>
</template>

<style lang="scss" scoped>
.tabnav {
  background-color: #FD9C05;
  height: 60px;
}
img {
  width: 28px;
  margin-top: 16px;
  margin-left: 10px;
  border: 1px solid red;
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
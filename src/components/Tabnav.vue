<template>
  <div class="tabnav">
    <div class="logo">
        <div class="logo-img">
          <img src="src/assets/images/list.png">
        </div>
       <router-link to="/">Orange</router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.tabnav {
  background-color: #FD9C05;
  height: 60px;
}
.logo {
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
    display: none;
  }
}
@media only screen and (max-device-width: 414px){
  .logo > .logo-img > img {
    opacity: 1;
  }
}
@media only screen and (min-device-width: 768px){
  .logo > a {
    display: block;
  }
}
</style>
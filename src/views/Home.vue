<template>
  <home-Tabnav />
  <div class="gulu-img">
    <img src="src/assets/images/gulu.png">
  </div>
  <div class="gulu-name">
    <h1>Orange UI</h1>
    <p>一款基于Vue3实现的海贼王系列UI框架</p>
    <p style="font-size:12px;">我是要成为海贼王的男人！——路飞</p>
  </div>
  <div class="gulu-menus">
    <button>
      <router-link to="/doc/introduce">开始阅读</router-link>
    </button>
    <button>
      <a href="https://github.com/hec990/Orange-UI">进入GitHub</a>
    </button>
  </div>
</template>

<script lang="ts">
import Tabnav from "../components/home-Tabnav.vue";
import HomeTabnav from "../components/home-Tabnav.vue";
export default {
  components:{HomeTabnav, Tabnav}
}
</script>

<style lang="scss" scoped>
 .gulu-img {
   width: 300px;
   height: 300px;
   margin: 0 auto;
 }
 .gulu-name {
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
     margin-top: 15px;
     letter-spacing:2px;
   }
 }
 .gulu-menus{
   width: 350px;
   display: flex;
   justify-content: space-between;
   margin: 40px auto;
   button {
     padding: 10px;
     background-color: #F1B053;
     font-weight: bold;
     border-radius: 4px;
     cursor: pointer;
     font-size: 14px;
     a {
       color: white;
     }
   }
   button:nth-child(2){
     background-color: #313E47;
   }
 }
 @media only screen and (max-device-width: 414px){
   .gulu-menus {
     width: 260px;
     margin: 55px auto;
   }
 }
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
   .gulu-menus {
     width: 350px;
     margin: 60px auto;
   }
 }
</style>
<template>
  <Tabnav/>
  <div class="gulu-img">
    <img src="src/assets/images/gulu.png">
  </div>
  <div class="gulu-name">
    <h1>Orange组件库</h1>
    <p>一款基于Vue3实现的海贼王组件库</p>
  </div>
  <div class="gulu-menus">
    <button>
      <router-link to="/doc">开始阅读</router-link>
    </button>
    <button>
      <a href="#">进入GitHub</a>
    </button>
  </div>
</template>

<script lang="ts">
import Tabnav from "../components/Tabnav.vue";
export default {
  components: {Tabnav}
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
</style>
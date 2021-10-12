<template>
 <Tabnav/>
  <div class="main">
     <div class="main-top">
       <div class="name">
         <h1 style="font-size: 48px">Orange组件库文档</h1>
       </div>
       <div class="description">
         📚 组件库项目的使用和详细介绍
       </div>
       <div class="button">
         <div>
           <router-link to="/doc">📖 开始阅读</router-link>
         </div>
       </div>
     </div>
    <div class="main-bottom">
       <div class="main-bottom-items1">
         <img src="../assets/images/concise.png">
         <span>简洁至上</span>
         <p>专为程序员定制的主页，酷炫方便</p>
       </div>
      <div class="main-bottom-items2">
        <img src="../assets/images/unpack.png">
        <span>开箱即用</span>
        <p>开源代码可在本地直接运行，灵活部署</p>
      </div>
      <div class="main-bottom-items3">
        <img src="../assets/images/adapter.png">
        <span>多端适配</span>
        <p>PC、移动端均可获得较好体验</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tabnav from "../components/Tabnav.vue";
export default {
  components: {Tabnav}
}
</script>

<style scoped>
/* main css*/
.main > .main-top {
  height: 400px;
  background-color:#f5f6f8;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.main > .main-top > .name {
  padding-top: 110px;
}
.main > .main-top > .description {
  padding-top: 20px;
}
.main > .main-top > .button {
  margin-top: 35px;
}
.main > .main-top > .button > div{
  padding: 13px 32px;
  border-radius: 20px;
  background-color:#4569d4;
}
.main > .main-top > .button > div > a{
 color: white;
}
.main > .main-top > .button > div:hover{
  cursor: pointer;
  opacity: .8;
}

/* main bottom */
.main > .main-bottom {
  /*border: 1px solid red;*/
  display: flex;
  justify-content: center;
}
.main > .main-bottom > .main-bottom-items2 {
  margin-left: 120px;
  margin-right: 120px;
}
.main > .main-bottom>div {
  width: 300px;
  height: 200px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}
.main > .main-bottom>div:hover {
  background-color: #e9e9e9;
}
.main > .main-bottom>div > img {
  width: 70px;
}
.main > .main-bottom>div > span {
  padding: 10px;
  font-weight: bold;
}
.main > .main-bottom>div > p{
  padding: 5px;
}
</style>
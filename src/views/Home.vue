<template>
 <Tabnav/>
  <div class="main">
     <div class="main-top">
       <div class="name">
         <h1 style="font-size: 32px">Orange组件库文档</h1>
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
         <div class="msg">
           <h4>简洁至上</h4>
           <p>专为程序员定制的主页，酷炫方便</p>
         </div>
       </div>
      <div class="main-bottom-items2">
        <img src="../assets/images/unpack.png">
        <div class="msg">
          <h4>开箱即用</h4>
          <p>开源代码可在本地直接运行，灵活部署</p>
        </div>
      </div>
      <div class="main-bottom-items3">
        <img src="../assets/images/adapter.png">
        <div class="msg">
          <h4>多端适配</h4>
          <p>PC、移动端均可获得较好体验</p>
        </div>
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

<style lang="scss" scoped>
/* main css*/
.main > .main-top {
  background-color:#f5f6f8;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .name {
    padding-top: 40px
  }
  .description {
    padding-top: 20px;
  }
  .button {
    margin-top: 35px;
    div{
      padding: 13px 32px;
      border-radius: 20px;
      background-color:#4569d4;
      a{
        color: white;
      }
    }
    div:hover{
      cursor: pointer;
      opacity: .8;
    }
  }
}
/* main bottom */
.main-bottom {
  margin-top: 20px;
    div {
      padding: 10px;
      display: flex;
      margin-top: 10px;
    }
    div > img {
       width: 50px;
       padding: 5px;
      margin: auto 0;
    }
   div > .msg {
     font-size: 18px;
     display: flex;
     flex-direction: column;
     margin-left: 10px;
      p {
        margin-top: 5px;
        font-size: 14px;
      }
   }
}
</style>
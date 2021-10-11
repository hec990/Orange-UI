<template>
  <div class="tabnav">
    <div class="logo">
      <router-link to="/">🍊 Orange-UI</router-link>
    </div>
    <div class="meun">
      <div class="items1">
        <router-link to="/">指南</router-link>
      </div>
      <div class="items2">
        <router-link to="/">GitHub</router-link>
      </div>
    </div>
  </div>
  <div class="main">
     <div class="main-top">
       <div class="name">
         <h1 style="font-size: 48px">Orange组件库文档</h1>
       </div>
       <div class="description">
         📚 组件库项目的使用和详细介绍
       </div>
       <div class="button">
         <span>📖 开始阅读</span>
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
  <div class="footer">
    <span>Copyright © 2021 XiaoHeHe | <a href="https://github.com/hec990/Orange-UI.git" target="_blank">Orange-UI</a></span>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
/* Tabnav css*/
 .tabnav {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px;
 }
 .tabnav > .logo {
   margin-left: 10px;
 }

 .tabnav > .meun {
   display: flex;
   align-items: center;
 }
 .tabnav > .meun > div {
   font-size: 14px;
   margin-right: 40px;
 }

/* main css*/
.main{}
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
  margin-top: 40px;
}
.main > .main-top > .button > span{
  padding: 13px 32px;
  border-radius: 20px;
  background-color:#4569d4;
  color: white;
}
.main > .main-top > .button > span:hover{
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
  background-color: #ddd;
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
/* footer css*/
.footer {
  display: flex;
  justify-content: center;
  margin-top: 120px;
}
</style>
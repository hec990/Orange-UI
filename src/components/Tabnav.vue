<template>
  <div class="tabnav">
    <div class="logo">
      <router-link to="/">🍊 Orange-UI</router-link>
    </div>
    <div class="meun">
      <div class="items1">
        <router-link to="/doc">指南</router-link>
      </div>
      <div class="items2">
        <a href="https://github.com/hec990/Orange-UI" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {

}
</script>

<style scoped>
.tabnav {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
  border: 1px solid #E3E3E3;
}
.tabnav > .logo > a {
  font-weight: bold;
}
.tabnav > .meun {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabnav > .meun > div {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  line-height: 60px;
  width: 80px;
}
</style>
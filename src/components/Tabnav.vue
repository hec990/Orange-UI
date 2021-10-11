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
</template>
<script lang="ts">
export default {

}
</script>

<style scoped>
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
</style>
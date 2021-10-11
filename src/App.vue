<template>
  <div>导航栏 | <router-link to="/">组件1</router-link> | <router-link to="/xxx">组件2</router-link></div>
  <hr>
  <router-view/>
</template>

<script>

export default {
  name: "App",
};
</script>

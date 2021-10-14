<template>
  <div>
     <!--  $event 接收最新的值  -->
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import {ref} from 'vue';
export default {
   components:{Switch},
   setup(){
     const bool = ref(false)
     return {bool}
   }
}
</script>

<style scoped>

</style>
<template>
  <div>ButtonDemo</div>
  <h1>示例</h1>
  <div>
    <Button>你好</Button>
    <Button theme="">你好</Button>
    <Button>你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  sutup(){
     const onClick = ()=>{
       console.log('hi');
     }
     return {onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>
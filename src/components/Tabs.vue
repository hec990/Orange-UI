<template>
  Tabs组件
  <component :is="defaults[0]"></component>
  <component :is="defaults[1]"></component>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  name: "Tabs",
  setup(props,context){
    //拿到子组件的对象
    const defaults = context.slots.default()
    defaults.forEach((tag)=>{
      // 如果 Tabs 下的标签不是Tab就抛出错误
      if(tag.type !== Tab){
        // 抛出错误
        throw new Error("Tabs 子标签必须是 Tab")
      }
    })
    return {defaults}
  }
};
</script>

<style lang="scss" scoped>

</style>
<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props:{
   value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      // 发送到外面 ==> SwitchDemo，参数1：哪个属性？ 参数2：要做什么？
      context.emit('input',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background-color: gray;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }
  button.checked {
    background-color: blue;
  }
  button.checked > span{
    left: calc(100% - #{$h2} - 2px);
  }
</style>
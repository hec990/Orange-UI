<template>
  <button class="or-switch" @click="toggle" :class="{'or-checked':value}"><span></span></button>
</template>

<script lang="ts">
export default {
  props:{
   value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      // 发送到外面 ==> SwitchDemo，参数1：哪个属性？ 参数2：要做什么？
      //参数1要与props的key一样，且前面有一个 update: ,这个是尤雨溪规定的
      // 发送信号给父亲
      context.emit('update:value',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss">
  $h:22px;
  $h2:$h - 4px;
  .or-switch{
    height: $h;
    width: $h*2;
    border: none;
    background-color: #E3E3E3;
    border-radius: $h/2;
    position: relative;
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
    &.or-checked {
      background-color: #40BABF;
    }
    &.or-checked > span{
      left: calc(100% - #{$h2} - 2px);
    }
  }


</style>
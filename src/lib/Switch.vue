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
  .or-switch{
    height: 22px;
    width: 22px*2;
    border: none;
    background-color: #E3E3E3;
    border-radius: 22px/2;
    position: relative;
    border-radius: 20px;
    span{
      position: absolute;
      top: 2px;
      left: 2px;
      height: 18px;
      width: 18px;
      background-color: white;
      border-radius: 18px/2;
      transition: left 250ms;
      border-radius: 20px;
    }
    &.or-checked {
      background-color: #40BABF;
    }
    &.or-checked > span{
      left: calc(100% - #{18px} - 2px);
    }
  }


</style>
<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide} from "vue";
import {router} from "./router";

export default {
  setup(){
    const width = document.documentElement.clientWidth;
    // 初始值：如果当前宽度大于500，aside显示，当前宽度小于500就隐藏（手机端）
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible',asideVisible)
    // 手机端: 当我点击侧边栏组件后隐藏侧边栏
    router.afterEach(()=>{
      if(width <=500){
        asideVisible.value = false;
      }
    })
  }
};
</script>





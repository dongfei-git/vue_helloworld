<template>
<div>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <transition name="test2" appear>
    <h1 v-show="isShow">你好，欢迎学习vue</h1>
  </transition>
</div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
h1{
  background-color: orange;
}

.test2-enter-active,.test2-leave-active{
  transition: 0.5s linear;
}

.test2-enter,.test2-leave-to{
  transform: translateX(-100%);
}

.test2-enter-to,.test2-leave{
  transform: translateX(0);
}
</style>
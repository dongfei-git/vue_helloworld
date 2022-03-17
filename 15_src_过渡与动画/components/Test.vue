<template>
<div>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <transition appear>
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

.v-enter-active{
  animation: welcome 0.5s linear;
}

.v-leave-active{
  animation: welcome 0.5s reverse;
}

@keyframes welcome {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
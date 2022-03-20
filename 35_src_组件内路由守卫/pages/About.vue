<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeRouteEnter(to,from,next){  // 进入该组件执行
    console.log(to,from)
    next()
  },
  beforeRouteLeave(to,from,next){  // 离开该组件执行
    console.log(to,from)
    next()
  }
}
</script>

<style scoped>

</style>
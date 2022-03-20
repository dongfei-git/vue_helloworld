<template>
  <ul>
    <li :style="{opacity}">欢迎查看News</li>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
      opacity:1
    }
  },
  activated() {
    this.timer = setInterval(()=>{
      console.log("setInterval执行了")
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
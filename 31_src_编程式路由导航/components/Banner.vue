<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="testGo">go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    testGo(){
      this.$router.go(-2)  // 后退2步
    }
  }
}
</script>

<style scoped>

</style>
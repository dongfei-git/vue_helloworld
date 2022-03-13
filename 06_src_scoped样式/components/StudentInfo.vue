<template>
  <!--  组件的结构-->
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{schoolAge}}</h2>
  </div>
</template>

<script>
//组件的交互代码
export default {
  name:'StudentInfo',
  data() {
    return {
      studentName:'张三',
      schoolAge:'25'
    }
  }
}
</script>

<style scoped>
/*组件的样式*/
.demo {
  background-color: lightcoral;
}
</style>
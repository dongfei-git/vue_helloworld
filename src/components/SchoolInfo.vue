<template>
  <!--  组件的结构-->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
    <button @click="showName">点我显示学校名</button>
  </div>
</template>

<script>
//组件的交互代码
export default {
  name:'SchoolInfo',
  data() {
    return {
      schoolName: '刑法学院',
      schoolAddress: '北京'
    }
  },
  methods: {
    showName() {
      alert(this.schoolName)
    }
  }
}
</script>

<style>
/*组件的样式*/
.demo {
  background-color: orange;
}
</style>
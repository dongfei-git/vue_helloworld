<template>
  <!--  组件的结构-->
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
  </div>
</template>

<script>
//引入一个混入
import {mixin} from '@/mixin.js'

//组件的交互代码
export default {
  name:'SchoolInfo',
  data() {
    return {
      name: '刑法学院',
      schoolAddress: '北京'
    }
  },
  // 导入混入
  mixins:[mixin]
}
</script>

<style>
/*组件的样式*/
.demo {
  background-color: orange;
}
</style>
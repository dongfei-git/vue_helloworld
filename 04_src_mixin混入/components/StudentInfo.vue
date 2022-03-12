<template>
  <!--  组件的结构-->
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ schoolAge }}</h2>
  </div>
</template>

<script>
//组件的交互代码
import {mixin} from "@/mixin";

export default {
  name: 'StudentInfo',
  data() {
    return {
      name: '张三',
      schoolAge: '25'
    }
  },
  mixins: [mixin]
}
</script>
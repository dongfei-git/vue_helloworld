<template>
  <!--  组件的结构-->
  <div>
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{studentAge}}</h2>
    <button @click="sendStudentName">把学生名发送给App</button>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
//组件的交互代码
export default {
  name:'StudentInfo',
  data() {
    return {
      studentName:'张三',
      studentAge:'25'
    }
  },
  methods:{
    sendStudentName(){
      this.$emit('getStudentNameEvent', this.studentName, 'other') //触发recvStudentName事件
    },
    unbind(){
      // this.$off('getStudentNameEvent')  // 解绑一个自定义事件
      this.$off(['getStudentNameEvent'])  // 解绑多个自定义事件
      // this.$off()  // 解绑所以的自定义事件
    }
  }
}
</script>
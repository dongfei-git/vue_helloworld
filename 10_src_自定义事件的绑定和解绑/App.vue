<template>
  <div id="app">
    <SchoolInfo></SchoolInfo>
<!--    绑定自定义事件getStudentNameEvent-->
<!--    <StudentInfo v-on:getStudentNameEvent="getStudentName"></StudentInfo>-->

<!--    使用ref绑定自定义事件getStudentNameEvent-->
    <StudentInfo ref="student"></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from "@/components/SchoolInfo";
import StudentInfo from "@/components/StudentInfo";

export default {
  name: 'App',
  components: {
    SchoolInfo,
    StudentInfo
  },
  methods:{
    getStudentName(name, ...params){
      console.log('demo被调用了',name, params)
    }
  },
  mounted() {
    // 通过ref给Student绑定getStudentNameEvent自定义事件
    this.$refs.student.$on('getStudentNameEvent', this.getStudentName)
  }
}
</script>
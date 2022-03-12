<template>
  <div id="app">
    <SchoolInfo></SchoolInfo>
    <StudentInfo name="利拉" :age="19"></StudentInfo>
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
  }
}
</script>
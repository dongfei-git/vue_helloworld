<template>
  <!--  组件的结构-->
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="ageUpdate">年龄+1</button>
  </div>
</template>

<script>
//组件的交互代码
export default {
  name:'StudentInfo',
  data() {
    return {
      myAge:this.age
    }
  },
  methods:{
    ageUpdate(){
      this.myAge++
    }
  },
  // 简单声明接收
  // props:['name','age']

  // 接收的同时对数据的类型进行限制
/*  props:{
    name:String,
    age:Number
  }*/

  // 接收的同时对数据的类型、默认值和必要性的限制
  props:{
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:1
    }
  }
}
</script>
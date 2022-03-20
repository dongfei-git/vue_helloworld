<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <h3>当前和放大10倍：{{bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed:{
    // mapState的使用，从state中读取数据（对象写法）
    // ...mapState({sum:'sum'})

    // 数组写法
    ...mapState(['sum']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA',this.n)
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait',this.n)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
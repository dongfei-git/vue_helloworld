<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <h3>当前和放大10倍：{{bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

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
    //借助mapMutations生成对应的方法
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //借助mapActions生成对应的方法
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  }
}
</script>

<style scoped>

</style>
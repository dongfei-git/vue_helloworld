<template>
  <transition name="todo" appear>
    <li>
      <label>
        <!--      <input type="checkbox" v-model="todo.done"/>-->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input type="text"
               v-show="todo.isEdit"
               :value="todo.title"
               @blur="handleBlur(todo,$event)"
               ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "TodoItem",
  //声明接收todo对象
  props: ['todo'],
  methods: {
    handleCheck(id) {
      //通知app组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm('Delete?')) {
        // this.$bus.$emit('deleteTodo',id)
        //发布消息
        pubsub.publish('deleteTodo', id)
      }
    },
    handleEdit(todo) {
      this.$bus.$emit('checkIsEdit', todo)
      this.$nextTick(() => { //在下一次DOM更新后回调函数
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = !todo.isEdit
      if (!e.target.value.trim()) return alert("输入不能为空!")
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}


.todo-enter-active{
  animation: welcome 0.5s linear;
}

.todo-leave-active{
  animation: welcome 0.5s reverse;
}

@keyframes welcome {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
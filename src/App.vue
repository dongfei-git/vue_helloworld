<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoFooter from "@/components/TodoFooter";
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList,
    TodoHeader,
    TodoFooter
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', done: true},
        {id: '002', title: '学习', done: false},
        {id: '003', title: '玩游戏', done: false},
      ]
    }
  },
  methods: {
    // 添加一个todo
    addTodo(x) {
      this.todos.unshift(x)
    },
    // 勾选或者取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
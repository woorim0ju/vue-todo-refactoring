<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  // data: function () {
  //   // TodoList에서 가져옴 -> TodoList에 props로 내림
  //   return { todos: [] };
  // },
  methods: {
    // TodoInput에서 $emit.event 가져옴
    // addFn(todoItem) {
    //   var obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todos.push(obj);
    // },
    // TodoList에서 $emit.event 가져옴
    // removeFn(todo, index) {
    //   localStorage.removeItem(todo.item);
    //   this.todos.splice(index, 1);
    // },
    // // TodoList에서 $emit.event 가져옴
    // toggleFn(todo, index) {
    //   this.todos[index].completed = !this.todos[index].completed;
    //   localStorage.removeItem(todo.item);
    //   localStorage.setItem(todo.item, JSON.stringify(todo));
    // },
    // clearFn() {
    //   localStorage.clear();
    //   console.log(this.todos);
    //   this.todos = []; //this.todos = '' or null 아님
    // },
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #393d49;
  max-width: 800px;
  width: 100%;
}
.md-layout-item {
  padding: 0 5px;
}
</style>
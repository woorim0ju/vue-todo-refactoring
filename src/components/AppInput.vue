<template>
  <div class="inputBox shadow">
      <input type="text" v-model="todoItems" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus-circle addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data: function (){
        return {
            todoItems: ''
        }
    },
    methods: {
        addTodo: function (){
            if(this.todoItems){
                this.$emit('addTodoItem', this.todoItems);  //app으로 addTodoItem 이벤트이름과 this.todoItems 인자를 같이 보냄
                //this.todoItems 인자를 같이 보내는것이 중요
                this.clearInput(); //이건 app으로 안보냄
            }
        },
        clearInput: function (){
            this.todoItems = '';
        }
    },
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: #fff;
    vertical-align: middle;
  }
</style>
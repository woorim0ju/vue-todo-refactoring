<template>
  <div class="inputBox shadow">
      <input type="text" v-model="todoItems" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus-circle addBtn"></i>
      </span>

      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">알림
          <i class="far fa-times-circle closeBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">입력하세요.</div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data (){
        return {
            todoItems: '',
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.todoItems){
                this.$emit('addTodoItem', this.todoItems);  //app으로 addTodoItem 이벤트이름과 this.todoItems 인자를 같이 보냄
                //this.todoItems 인자를 같이 보내는것이 중요
                this.clearInput(); //이건 app으로 안보냄
            } else{
              this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.todoItems = '';
        },
    },
    components: {
      Modal  //'Modal' :Modal  
    }
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
  .closeBtn {
    color: #42b983;
    font-size: 18px;
  }
</style>
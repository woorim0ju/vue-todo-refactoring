<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- <ul> -->
          <!-- todos를 propsdata로 변경 -->
          <li v-for="(todo, idx) in propsdata" v-bind:key="todo"> 
            <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todo.completed}" 
            v-on:click="toggleFn(todo, idx)"></i>
            <span v-on:click="toggleFn(todo, idx)" v-bind:class="{textCompleted: todo.completed}">{{todo.item}}</span>
            <span v-on:click="removeFn(todo, idx)" class="removeBtn">
                <i class="far fa-trash-alt"></i>
            </span>
          </li>
      <!-- </ul> -->
    </transition-group>  
  </div>    
</template>

<script>
export default {
  props: ['propsdata'], //' ' 잊지말것
  methods:{
      removeFn(todo, idx){
        this.$emit('removeItem', todo, idx); //이벤트명과 todo, idx 인자 그대로 보내줌
      },
      toggleFn(todo, idx){
        this.$emit('toggleItem', todo, idx)  //이벤트명과 todo, idx 인자 그대로 보내줌
      }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 0.8s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
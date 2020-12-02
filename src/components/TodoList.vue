<template>
  <div>
    <ul>
      <li v-for="(todo, index) in this.storedTodos" v-bind:key="todo.index">
        <div>
          <i
            class="fas fa-check checkBtn"
            @click="toggleFn(todo, index)"
            v-bind:class="{ checkBtnCompleted: todo.completed }"
          ></i>
          <span
            @click="toggleFn({ todo, index })"
            :class="{ textCompleted: todo.completed }"
            >{{ todo.item }}</span
          >
        </div>
        <span class="removeBtn" @click="removeFn({ todo, index })">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      removeFn: "removeFn",
      toggleFn: "toggleFn",
    }),

    // removeFn(todo, index) {
    //   //this.$emit("removeOne", todo, index);
    //   // const obj = {
    //   //   todo : todo,
    //   //   index: index
    //   // }
    //   this.$store.commit("removeFn", { todo, index }); //obj = {todo, index} 로 바로 선언
    // },

    // toggleFn(todo, index) {
    //   // this.$emit("toggleOne", todo, index);
    //   this.$store.commit("toggleFn", { todo, index });
    // },
  },
  computed: {
    // todos() {
    //   return this.$store.getters.storedTodos;
    // },
    ...mapGetters(["storedTodos"]),
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 1rem;
  padding: 0 0.9rem;
  background: #4872f0;
  border-radius: 5px;
  justify-content: space-between;
}
span {
  cursor: pointer;
  color: #fff !important;
}
.checkBtn {
  line-height: 45px;
  color: #f0c148;
  margin-right: 20px !important;
  cursor: pointer;
}
.checkBtnCompleted {
  text-decoration: line-through;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  cursor: pointer;
}
</style>
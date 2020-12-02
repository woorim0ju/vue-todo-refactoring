import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    console.log(localStorage.getItem(localStorage.key(i))); 
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}
//store에서 todos 선언하기 todos -> arr
export const store = new Vuex.Store({
    state: {
        todos: storage.fetch()
    },
    getters: {
        storedTodos(state) {
            return state.todos;
        }
    },
    mutations: {
        addFn(state, todoItem) {
            const obj = { completed: false, item: todoItem }; 
            localStorage.setItem(todoItem, JSON.stringify(obj));
            //this.todos.push(obj);
            state.todos.push(obj);
        },
        removeFn(state, payload) {
            localStorage.removeItem(payload.todo.item);
            state.todos.splice(payload.index, 1);
          },
        toggleFn(state, payload) {
            state.todos[payload.index].completed = !state.todos[payload.index].completed;
            localStorage.removeItem(payload.todo.item);
            localStorage.setItem(payload.todo.item, JSON.stringify(payload.todo));
        },
        clearFn(state) {
        localStorage.clear();
        //console.log(this.todos);
        state.todos = []; //this.todos = '' or null 아님
        },
    }
});
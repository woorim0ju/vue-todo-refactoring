<template>
    <div id="app">
        <AppHeader></AppHeader>
        <AppInput v-on:addTodoItem="addOne"></AppInput>
        <!-- pros로 내려보내는 것은: v-bind:, $emit('이벤트명')으로 올려보내는것은 v-on(v-bind아님): -->
        <AppList
            v-bind:propsdata="todos"
            v-on:removeItem="removeOne"
            v-on:toggleItem="toggleOne"></AppList>
        <AppFooter v-on:removeItem="removeAll"></AppFooter>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue'
    import AppInput from './components/AppInput.vue'
    import AppList from './components/AppList.vue'
    import AppFooter from './components/AppFooter.vue'

    export default {
        name: 'App',
        data() {
            return {
                todos: [] //AppList의 todos를 App으로 옮김
            }
        },

        methods: {
            addOne(todoItem) { //input에서 보낸 this.todoItems 인자를 받음
                const obj = {
                    completed: false,
                    item: todoItem
                };
                localStorage.setItem(todoItem, JSON.stringify(obj));
                // 중요. List화면에 바로 뿌려줘서 반영된다 obj를 todos에 담아주어야 list에서 v-for로 하나씩 출력됨
                // console.log(obj);
                this
                    .todos
                    .push(obj);
            },
            removeOne(todo, idx) {
                // localStorage.removeItem(todo) 는 todo의 객체를 그대로 불러들어오므로 오류. todo의 item
                // 속성(todo.item)으로 key값으로 접근해야함
                localStorage.removeItem(todo.item);
                this
                    .todos
                    .splice(idx, 1);
            },
            toggleOne(todo, idx) {
                //todo.completed = !todo.completed; 위에(안티패턴)보다 아래가 좋은 코드
                this
                    .todos[idx]
                    .completed = !this
                    .todos[idx]
                    .completed
                    localStorage
                    .removeItem(todo.item);
                localStorage.setItem(todo.item, JSON.stringify(todo));
            },
            removeAll() {
                localStorage.clear();
                this.todos = [];
            }
        },

        created() {
            if (localStorage.length > 0) {
                for (var i = 0; i < localStorage.length; i++) {
                    this
                        .todos
                        .push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        },

        components: {
            AppHeader, //'AppHeader': AppHeader,
            AppInput,//'AppInput': AppInput,
            AppList,//'AppList': AppList,
            AppFooter,//'AppFooter': AppFooter
        }
    }
</script>

<style>
    body {
        text-align: center;
        background-color: #f6f6f6;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
    i {
        font-size: 0.8rem;
        cursor: pointer;
    }
</style>
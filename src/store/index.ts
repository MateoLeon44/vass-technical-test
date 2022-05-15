import Todo from "@/types/Todo.class";
import Vue from "vue";
import Vuex from "vuex";
import { vuexTypes } from "@/store/vuex.types";

Vue.use(Vuex);

export interface State {
  todos: Todo[];
  editedTodo: Todo;
}

export default new Vuex.Store<State>({
  state: {
    todos: [],
    editedTodo: new Todo(""),
  },
  getters: {
    getTodos(state): Todo[] {
      return state.todos;
    },
    areAllTodosChecked(state): boolean {
      for (const todo of state.todos) {
        if (!todo.isChecked) return false;
      }
      return true;
    },
  },
  mutations: {
    [vuexTypes.ADD_TODO](state: State, todo: Todo) {
      state.todos.push(todo);
    },
    [vuexTypes.TOGGLE_ALL_TODO](state: State, toggleType: boolean) {
      for (const todo of state.todos) {
        todo.isChecked = toggleType;
      }
    },
  },
  actions: {
    [vuexTypes.ADD_TODO](context, todo: Todo) {
      context.commit(vuexTypes.ADD_TODO, todo);
    },
    [vuexTypes.TOGGLE_ALL_TODO](context, toggleType: boolean) {
      context.commit(vuexTypes.TOGGLE_ALL_TODO, toggleType);
    },
  },
});

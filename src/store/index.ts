import Todo from "@/types/Todo.class";
import Vue from "vue";
import Vuex from "vuex";
import { vuexTypes } from "@/store/vuex.types";

Vue.use(Vuex);

export interface State {
  todos: Todo[];
}

export default new Vuex.Store<State>({
  state: {
    todos: [],
  },
  getters: {
    getTodos(state): Todo[] {
      return state.todos;
    },
  },
  mutations: {
    [vuexTypes.ADD_TODO](state: State, todo: Todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    [vuexTypes.ADD_TODO](context, todo: Todo) {
      context.commit(vuexTypes.ADD_TODO, todo);
    },
  },
});

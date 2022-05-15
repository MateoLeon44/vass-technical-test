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
    [vuexTypes.TOGGLE_TODO_CHECK](state: State, index: number) {
      const todo: Todo = state.todos[index];
      todo.isChecked = !todo.isChecked;
    },
    [vuexTypes.TOGGLE_ALL_TODO](state: State, toggleType: boolean) {
      for (const todo of state.todos) {
        todo.isChecked = toggleType;
      }
    },
    [vuexTypes.CHANGE_EDITED_TODO](state: State, todoIndex: number) {
      const todo: Todo = state.todos[todoIndex];
      state.editedTodo = new EditedTodo(todoIndex, todo);
    },
    [vuexTypes.EDIT_TODO](state: State) {
      const editedTodo: EditedTodo = state.editedTodo;
      if (editedTodo.index === undefined || editedTodo.index < 0) return;
      if (!editedTodo.todo.content) {
        state.todos.splice(editedTodo.index, 1);
        state.editedTodo = new EditedTodo();
        return;
      }
      state.todos.splice(editedTodo.index, 1, editedTodo.todo);
      state.editedTodo = new EditedTodo();
    },
  },
  actions: {
    [vuexTypes.ADD_TODO](context, todo: Todo) {
      context.commit(vuexTypes.ADD_TODO, todo);
    },
    [vuexTypes.TOGGLE_TODO_CHECK](context, index: number) {
      context.commit(vuexTypes.TOGGLE_TODO_CHECK, index);
    },
    [vuexTypes.TOGGLE_ALL_TODO](context, toggleType: boolean) {
      context.commit(vuexTypes.TOGGLE_ALL_TODO, toggleType);
    },
  },
});

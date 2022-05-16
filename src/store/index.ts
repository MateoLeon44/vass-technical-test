import { vuexTypes } from "@/store/vuex.types";
import EditedTodo from "@/types/EditedTodo.class";
import Todo from "@/types/Todo.class";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export interface State {
  todos: Todo[];
  editedTodo: EditedTodo;
}

export const mutations = {
  [vuexTypes.ADD_TODO](state: State, todo: Todo) {
    state.todos.push(todo);
  },
  [vuexTypes.CLEAR_COMPELTED_TODOS](state: State) {
    state.todos = state.todos.filter((todo: Todo) => !todo.isChecked);
  },
  [vuexTypes.TOGGLE_TODO_CHECK](state: State, index: number) {
    const todo: Todo | undefined = state.todos[index];
    if (!todo) return;
    todo.isChecked = !todo.isChecked;
  },
  [vuexTypes.TOGGLE_ALL_TODO](state: State, toggleType: boolean) {
    state.todos = state.todos.map((todo: Todo) => {
      todo.isChecked = toggleType;
      return todo;
    });
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
  [vuexTypes.DELETE_TODO](state: State, index: number) {
    state.todos.splice(index, 1);
  },
};

export const getters = {
  getTodos(state: State): Todo[] {
    return state.todos;
  },
  areAllTodosChecked(state: State): boolean {
    for (const todo of state.todos) {
      if (!todo.isChecked) return false;
    }
    return true;
  },
  getEditedTodo(state: State): EditedTodo {
    return state.editedTodo;
  },
  getActiveTodos(state: State): Todo[] {
    return state.todos.filter((todo: Todo) => !todo.isChecked);
  },
  getCompletedTodos(state: State): Todo[] {
    return state.todos.filter((todo: Todo) => todo.isChecked);
  },
};

export default new Vuex.Store<State>({
  plugins: [createPersistedState()],
  state: {
    todos: [],
    editedTodo: new EditedTodo(),
  },
  getters: getters,
  mutations: mutations,
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
    [vuexTypes.CHANGE_EDITED_TODO](context, todoIndex: number) {
      context.commit(vuexTypes.CHANGE_EDITED_TODO, todoIndex);
    },
    [vuexTypes.EDIT_TODO](context) {
      context.commit(vuexTypes.EDIT_TODO);
    },
    [vuexTypes.CLEAR_COMPELTED_TODOS](context) {
      context.commit(vuexTypes.CLEAR_COMPELTED_TODOS);
    },
    [vuexTypes.DELETE_TODO](context, index: number) {
      context.commit(vuexTypes.DELETE_TODO, index);
    },
  },
});

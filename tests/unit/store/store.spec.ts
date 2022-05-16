import { getters, mutations, State } from "@/store";
import { vuexTypes } from "@/store/vuex.types";
import EditedTodo from "@/types/EditedTodo.class";
import Todo from "@/types/Todo.class";

let mockState: State = {
  todos: [],
  editedTodo: new EditedTodo(),
};

beforeEach(() => {
  mockState = {
    todos: [],
    editedTodo: new EditedTodo(),
  };
});

describe("mutations", () => {
  test(vuexTypes.ADD_TODO, () => {
    const newTodo = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, newTodo);
    expect(mockState.todos.length).toBe(1);
    expect(mockState.todos).toEqual([newTodo]);
  });

  test(vuexTypes.CLEAR_COMPELTED_TODOS, () => {
    const activeTodo = new Todo("is active", false);
    const completedTodo = new Todo("is completed", true);
    const completedTodo2 = new Todo("is completed", true);

    mutations.ADD_TODO(mockState, completedTodo);
    mutations.ADD_TODO(mockState, activeTodo);
    mutations.ADD_TODO(mockState, completedTodo2);

    mutations.CLEAR_COMPELTED_TODOS(mockState);
    expect(mockState.todos.length).toBe(1);
    expect(mockState.todos).toEqual([activeTodo]);
  });

  test(vuexTypes.CHANGE_EDITED_TODO, () => {
    const todo = new Todo("mock-todo", false);

    mutations.CHANGE_EDITED_TODO(mockState, 0);
    expect(mockState.editedTodo).not.toEqual(todo);

    mutations.ADD_TODO(mockState, todo);
    const index = 0;
    const editedTodo = new EditedTodo(index, todo);
    mutations.CHANGE_EDITED_TODO(mockState, index);
    expect(mockState.editedTodo).toEqual(editedTodo);

    mutations.CHANGE_EDITED_TODO(mockState, 1);
    expect(mockState.editedTodo).not.toEqual(todo);
  });

  test(vuexTypes.EDIT_TODO, () => {
    const todo = new Todo("mock-todo", true);
    mutations.ADD_TODO(mockState, todo);
    mutations.CHANGE_EDITED_TODO(mockState, 0);
    const editedTodo = mockState.editedTodo;

    editedTodo.index = -1;
    expect(mutations.EDIT_TODO(mockState)).toEqual(undefined);

    editedTodo.index = undefined;
    expect(mutations.EDIT_TODO(mockState)).toEqual(undefined);

    editedTodo.index = 0;
    const newContent = "new content";
    editedTodo.todo.content = newContent;
    mutations.EDIT_TODO(mockState);
    expect(mockState.todos).toEqual([editedTodo.todo]);
    expect(mockState.todos[editedTodo.index].content).toEqual(newContent);
  });

  test(vuexTypes.TOGGLE_ALL_TODO, () => {
    mutations.TOGGLE_ALL_TODO(mockState, true);
    expect(mockState.todos).toEqual([]);

    const activeTodo = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, activeTodo);
    mutations.TOGGLE_ALL_TODO(mockState, true);
    expect(mockState.todos[0].isChecked).toEqual(true);

    const activeTodo2 = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, activeTodo2);
    mutations.TOGGLE_ALL_TODO(mockState, false);
    expect(mockState.todos[0].isChecked).toEqual(false);
    expect(mockState.todos[1].isChecked).toEqual(false);
  });

  test(vuexTypes.TOGGLE_TODO_CHECK, () => {
    const activeTodo = new Todo("mock-content", false);
    const completedTodo = new Todo("mock-content", true);

    mutations.ADD_TODO(mockState, activeTodo);
    mutations.ADD_TODO(mockState, completedTodo);

    mutations.TOGGLE_TODO_CHECK(mockState, 2);
    expect(mutations.TOGGLE_TODO_CHECK(mockState, 2)).toEqual(undefined);
    expect(activeTodo.isChecked).toBe(false);
    expect(completedTodo.isChecked).toBe(true);

    mutations.TOGGLE_TODO_CHECK(mockState, 0);
    expect(activeTodo.isChecked).toBe(true);

    mutations.TOGGLE_TODO_CHECK(mockState, 1);
    expect(completedTodo.isChecked).toBe(false);
  });
});

describe("Getters", () => {
  test("getTodos", () => {
    const activeTodo = new Todo("mock-content", false);

    expect(getters.getTodos(mockState)).toEqual([]);

    mutations.ADD_TODO(mockState, activeTodo);
    mutations.ADD_TODO(mockState, activeTodo);
    mutations.ADD_TODO(mockState, activeTodo);
    mutations.ADD_TODO(mockState, activeTodo);

    expect(getters.getTodos(mockState)).toEqual([
      activeTodo,
      activeTodo,
      activeTodo,
      activeTodo,
    ]);
  });

  test("areAllTodosChecked", () => {
    expect(getters.areAllTodosChecked(mockState)).toBe(true);

    const completedTodo = new Todo("mock-content", true);
    mutations.ADD_TODO(mockState, completedTodo);
    expect(getters.areAllTodosChecked(mockState)).toBe(true);

    const activeTodo = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, activeTodo);
    expect(getters.areAllTodosChecked(mockState)).toBe(false);
  });

  test("getEditedTodo", () => {
    expect(getters.getEditedTodo(mockState)).toEqual(new EditedTodo());

    const mockEditedTodo = new EditedTodo(0, new Todo("mock-content", true));
    mutations.ADD_TODO(mockState, mockEditedTodo.todo);
    mutations.CHANGE_EDITED_TODO(mockState, mockEditedTodo.index ?? 0);
    expect(getters.getEditedTodo(mockState)).toEqual(mockEditedTodo);
  });

  test("getActiveTodos", () => {
    expect(getters.getActiveTodos(mockState)).toEqual([]);

    const completedTodo = new Todo("mock-content", true);
    mutations.ADD_TODO(mockState, completedTodo);
    expect(getters.getActiveTodos(mockState)).toEqual([]);

    const activeTodo = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, activeTodo);
    expect(getters.getActiveTodos(mockState)).toEqual([activeTodo]);
  });

  test("getCompletedTodos", () => {
    expect(getters.getCompletedTodos(mockState)).toEqual([]);

    const activeTodo = new Todo("mock-content", false);
    mutations.ADD_TODO(mockState, activeTodo);
    expect(getters.getCompletedTodos(mockState)).toEqual([]);

    const completedTodo = new Todo("mock-content", true);
    mutations.ADD_TODO(mockState, completedTodo);
    expect(getters.getCompletedTodos(mockState)).toEqual([completedTodo]);
  });
});

/* import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
}); */

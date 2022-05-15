import Todo from "@/types/Todo.class";

export default class {
  index?: number;
  todo: Todo;

  constructor(index = -1, todo: Todo = new Todo("")) {
    this.index = index;
    this.todo = todo;
  }
}

<template>
  <div class="todo-list">
    <div v-for="(todo, index) in todos" :key="index">
      <li v-if="editedTodo.index === index" class="editing">
        <EditTodoInput />
      </li>
      <li v-else :class="{ completed: todo.isChecked }">
        <TodoCheckbox :id="index" :todo="todo" />
        <TodoContent :content="todo.content" :id="index" />
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Todo from "@/types/Todo.class";
import TodoContent from "@/components/base/Todo/TodoContent.vue";
import EditTodoInput from "@/components/todos/EditTodoInput.vue";
import EditedTodo from "@/types/EditedTodo.class";
import TodoCheckbox from "@/components/todos/TodoCheckbox.vue";

export default Vue.extend({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
  },
  components: { TodoContent, EditTodoInput, TodoCheckbox },
  computed: {
    editedTodo(): EditedTodo {
      return this.$store.getters.getEditedTodo;
    },
  },
});
</script>

<style lang="sass"></style>

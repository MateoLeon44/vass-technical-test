<template>
  <div>
    <div
      v-for="(todo, index) in todos"
      :key="todo.content + index"
      class="todo-list"
    >
      <li>
        <label>{{ todo.content }}</label>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Todo from "@/types/Todo.class";

export default Vue.extend({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
  },
});
</script>

<style lang="sass"></style>

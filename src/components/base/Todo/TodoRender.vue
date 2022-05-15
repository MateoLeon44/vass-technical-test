<template>
  <div class="todo-list">
    <div v-for="(todo, index) in todos" :key="index">
      <li :class="{ completed: todo.isChecked }">
        <input
          type="checkbox"
          :class="{
            toggle: todo.isChecked,
            hidden: !todo.isChecked,
          }"
          v-model="todo.isChecked"
          :id="index"
        />
        <TodoContent :content="todo.content" :forId="index" />
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Todo from "@/types/Todo.class";
import TodoContent from "@/components/base/Todo/TodoContent.vue";

export default Vue.extend({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
  },
  components: { TodoContent },
});
</script>

<style lang="sass"></style>

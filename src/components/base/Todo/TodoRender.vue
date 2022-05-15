<template>
  <div class="todo-list">
    <div v-for="(todo, index) in todos" :key="index">
      <li v-if="editedTodo.index === index" class="editing">
        <input
          class="edit"
          v-model="editedTodo.todo.content"
          v-on:keyup.enter="editTodo"
          v-on:blur="editTodo"
        />
      </li>
      <li v-else :class="{ completed: todo.isChecked }">
        <input
          type="checkbox"
          :class="{
            toggle: todo.isChecked,
            hidden: !todo.isChecked,
          }"
          v-model="todo.isChecked"
          :id="index"
        />
        <TodoContent :content="todo.content" :id="index" />
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Todo from "@/types/Todo.class";
import TodoContent from "@/components/base/Todo/TodoContent.vue";
import EditedTodo from "@/types/EditedTodo.class";
import { vuexTypes } from "@/store/vuex.types";

export default Vue.extend({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
  },
  components: { TodoContent },
  methods: {
    editTodo: function () {
      this.$store.dispatch(vuexTypes.EDIT_TODO);
    },
  },
  computed: {
    editedTodo(): EditedTodo {
      return this.$store.getters.getEditedTodo;
    },
  },
});
</script>

<style lang="sass"></style>

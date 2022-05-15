<template>
  <div>
    <div>
      <input
        type="checkbox"
        id="toggleAll"
        v-model="areChecked"
        class="toggle-all"
      />
      <label for="toggleAll">Toggle all</label>
    </div>
    <TodoRender :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoRender from "@/components/base/Todo/TodoRender.vue";
import Todo from "@/types/Todo.class";
import { vuexTypes } from "@/store/vuex.types";

export default Vue.extend({
  components: { TodoRender },
  computed: {
    todos(): Todo[] {
      const completedTodos =
        this.$store.getters.getCompletedTodos.length > 0
          ? this.$store.getters.getCompletedTodos
          : [];
      return completedTodos;
    },
    areChecked: {
      get() {
        return this.$store.getters.areAllTodosChecked;
      },
      set(value: boolean) {
        this.$store.dispatch(vuexTypes.TOGGLE_ALL_TODO, value);
      },
    },
  },
});
</script>

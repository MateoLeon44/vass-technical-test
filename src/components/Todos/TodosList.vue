<template>
  <div>
    <TodoRender :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoRender from "@/components/shared/TodoRender.vue";
import Todo from "@/types/Todo.class";

export default Vue.extend({
  components: { TodoRender },
  computed: {
    todos(): Todo[] {
      return this.$store.getters.getTodos;
    },
  },
});
</script>

<style lang="sass"></style>

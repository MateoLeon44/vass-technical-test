<template>
  <input class="new-todo" v-model="todoContent" v-on:keyup.enter="createTodo" />
</template>

<script lang="ts">
import { vuexTypes } from "@/store/vuex.types";
import Todo from "@/types/Todo.class";
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      todoContent: "",
    };
  },
  methods: {
    createTodo: function () {
      if (!this.todoContent) return;

      const todo = new Todo(this.todoContent);

      this.$store.dispatch(vuexTypes.ADD_TODO, todo);
      this.todoContent = "";
    },
  },
});
</script>

<style lang="scss" scoped></style>

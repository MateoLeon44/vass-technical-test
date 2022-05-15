<template>
  <input
    class="edit"
    v-model="editedTodo.todo.content"
    v-on:keyup.enter="editTodo"
    v-on:blur="editTodo"
  />
</template>

<script lang="ts">
import Vue from "vue";
import EditedTodo from "@/types/EditedTodo.class";
import { vuexTypes } from "@/store/vuex.types";

export default Vue.extend({
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

<style lang="scss"></style>

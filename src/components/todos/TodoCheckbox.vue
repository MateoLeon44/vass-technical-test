<template>
  <input
    type="checkbox"
    :class="{
      toggle: todo.isChecked,
      hidden: !todo.isChecked,
    }"
    :checked="todo.isChecked"
    :value="todo.isChecked"
    @change="changeIsChecked"
    :id="id"
  />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Todo from "@/types/Todo.class";
import { vuexTypes } from "@/store/vuex.types";

export default Vue.extend({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeIsChecked: function () {
      this.$store.dispatch(vuexTypes.TOGGLE_TODO_CHECK, this.id);
    },
  },
});
</script>

<style lang="scss"></style>

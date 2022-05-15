<template>
  <span class="todo-count">
    <strong>{{ counter }}</strong>
    {{ suffix }}
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    counter: {
      type: Number,
      required: true,
    },
    suffix: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  // Changed font-weight from 300 to 600 so the content is bold
  font-weight: 600;
}
</style>

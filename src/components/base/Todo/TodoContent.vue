<template>
  <label :for="forId" @dblclick="editTodo($event)">
    {{ content }}
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    forId: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    editTodo: function (event: any) {
      event.stopPropagation();
      event.preventDefault();
    },
  },
});
</script>

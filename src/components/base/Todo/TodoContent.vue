<template>
  <label :for="forId">
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
});
</script>

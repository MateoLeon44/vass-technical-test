<template>
  <input class="new-todo" v-model="todo" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      todo: "",
    };
  },
});
</script>

<style lang="scss" scoped></style>

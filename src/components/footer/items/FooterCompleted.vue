<template>
  <span class="clear-completed" @click="clearCompleted">Clear completed</span>
</template>

<script lang="ts">
import { vuexTypes } from "@/store/vuex.types";
import Vue from "vue";

export default Vue.extend({
  methods: {
    clearCompleted: function (): void {
      this.$store.dispatch(vuexTypes.CLEAR_COMPELTED_TODOS);
    },
  },
});
</script>

<style lang="scss">
.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}
</style>

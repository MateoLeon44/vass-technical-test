<template>
  <footer class="footer">
    <FooterCounter :counter="countActiveTodos" :suffix="countTodosSuffix" />
    <FooterCompleted v-if="countCompletedTodos > 0" />
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import FooterCounter from "./items/FooterCounter.vue";
import FooterCompleted from "./items/FooterCompleted.vue";

export default Vue.extend({
  components: { FooterCounter, FooterCompleted },
  computed: {
    countCompletedTodos(): number {
      return this.$store.getters.getCompletedTodos;
    },
    countActiveTodos(): number {
      return this.$store.getters.getActiveTodos;
    },
    countTodosSuffix(): string {
      const suffix =
        this.countActiveTodos === 0 || this.countActiveTodos > 1
          ? "items"
          : "item";
      return `${suffix} left`;
    },
  },
});
</script>

<style lang="scss">
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
</style>

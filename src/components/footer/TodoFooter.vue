<template>
  <footer class="footer">
    <FooterCounter :counter="countActiveTodos" :suffix="countTodosSuffix" />
    <div class="filters">
      <li>
        <a @click="changeRouter(possibleRoutes.all)">All</a>
      </li>
      <li>
        <a @click="changeRouter(possibleRoutes.active)">Active</a>
      </li>
      <li>
        <a @click="changeRouter(possibleRoutes.completed)">Completed</a>
      </li>
    </div>
    <FooterCompleted v-if="countCompletedTodos > 0" />
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import FooterCounter from "./items/FooterCounter.vue";
import FooterCompleted from "./items/FooterCompleted.vue";
import { Routes } from "@/router";

export default Vue.extend({
  components: { FooterCounter, FooterCompleted },
  data() {
    return {
      currentRoute: Routes.all,
      possibleRoutes: Routes,
    };
  },
  computed: {
    countCompletedTodos(): number {
      return this.$store.getters.getCompletedTodos.length;
    },
    countActiveTodos(): number {
      return this.$store.getters.getActiveTodos.length;
    },
    countTodosSuffix(): string {
      const suffix =
        this.countActiveTodos === 0 || this.countActiveTodos > 1
          ? "items"
          : "item";
      return `${suffix} left`;
    },
  },
  methods: {
    changeRouter: function (route: Routes) {
      this.currentRoute = route;
      if (this.$route.path !== route) {
        this.$router.push(this.currentRoute);
      }
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

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>

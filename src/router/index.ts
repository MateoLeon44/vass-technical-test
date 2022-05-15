import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodosList from "@/components/todos/TodosList.vue";
import TodosActive from "@/components/todos/active/TodosActive.vue";
import TodosCompleted from "@/components/todos/completed/TodosCompleted.vue";

Vue.use(VueRouter);

export enum Routes {
  all = "/",
  active = "/active",
  completed = "/completed",
}

const routes: Array<RouteConfig> = [
  {
    path: Routes.all,
    name: "all",
    component: TodosList,
  },
  {
    path: Routes.active,
    name: "active",
    component: TodosActive,
  },
  {
    path: Routes.completed,
    name: "completed",
    component: TodosCompleted,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

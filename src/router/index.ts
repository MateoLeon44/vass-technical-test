import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodosList from "@/components/todos/TodosList.vue";
import TodosActive from "@/components/todos/active/TodosActive.vue";

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
  /*   {
    path: "/active",
    name: "active",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/AboutView.vue"),
  }, */
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/components/main/Main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "all",
    component: Main,
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

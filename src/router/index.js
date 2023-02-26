import { createRouter, createWebHashHistory } from "vue-router";
const HomeView = () =>
  import(/* webpackChunkName: "home-view" */ "@/views/HomeView");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

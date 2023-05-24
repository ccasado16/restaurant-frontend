import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/LoginPage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

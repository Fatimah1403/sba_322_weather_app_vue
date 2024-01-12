import { createRouter, createWebHistory } from 'vue-router';
// import Homeview from "../views/Homeview";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
    },
  ]
});

export default router;
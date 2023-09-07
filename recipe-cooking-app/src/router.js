import { createRouter, createWebHistory } from "vue-router";

import MainRecipe from "./components/TheMainList/MainRecipe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/recipe" },
    { path: "/recipe/", component: MainRecipe },
    {
      path: "/recipe/:rid",
      component: MainRecipe,
      props: true,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

//Import Views
import HomeView from "../views/HomeView.vue"
import * as te from "tw-elements";

const routes =  [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
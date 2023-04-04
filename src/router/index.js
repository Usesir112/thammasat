import { createRouter, createWebHistory } from "vue-router";

//Import Views
import HomeView from "../views/HomeView.vue"
import ConserveView from "../views/ConserveView.vue"
import insKruView from "../views/insKruView.vue"
import knowladgeView from "../views/KnowladgeView.vue"
import SelfImproveView from "../views/SelfImproveView.vue"
import TechMakerView from "../views/TechMakerView.vue"
import MatchStickView from "../views/MatchStickView.vue"

import * as te from "tw-elements";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/conserve",
    name: "Conserve",
    component: ConserveView,
  },
  {
    path: "/insKru",
    name: "insKru",
    component: insKruView,
  },
  {
    path: "/knowladge",
    name: "Knowladge",
    component: knowladgeView,
  },
  {
    path: "/self-improve",
    name: "Self-Improve",
    component: SelfImproveView,
  },
  {
    path: "/tech-maker",
    name: "Tech-Maker",
    component: TechMakerView,
  },
  {
    path: "/match-stick",
    name: " Match-Stick",
    component: MatchStickView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
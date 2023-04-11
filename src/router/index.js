import { createRouter, createWebHistory } from "vue-router";

//Import Views
import HomeView from "../views/HomeView.vue";
import ConserveView from "../views/ConserveView.vue";
import insKruView from "../views/insKruView.vue";
import SelfImproveView from "../views/SelfImproveView.vue";
import TechMakerView from "../views/TechMakerView.vue";
import MatchStickView from "../views/MatchStickView.vue";


const routes = [
  {
    path: "/",
    name: "Home",
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
  history: createWebHistory(),
  routes,
});

export default router;

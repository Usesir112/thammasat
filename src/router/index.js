import { createRouter, createWebHistory } from "vue-router";

//Import Views
import HomeView from "../views/HomeView.vue";
import insKruView from "../views/insKruView.vue";

// 01-Longterm Project
import Starfish from "@/views/01LongTermProject/01Starfish.vue";
import Conserve from "@/views/01LongTermProject/02Conserve.vue";
import TechMaker from "@/views/01LongTermProject/03TechMaker.vue";
import SelfImprove from "@/views/01LongTermProject/04SelfImprove.vue";

// 02-Area Level Driving
import KhaoChamao from "@/views/02AreaLevelDriving/06KhaoChamao.vue";
import Indiangooseberry from "@/views/02AreaLevelDriving/08Indiangooseberry.vue";
import Artist from "@/views/02AreaLevelDriving/09Artist.vue";
import MatchStick from "@/views/02AreaLevelDriving/11MatchStick.vue";
import UthaiYim from "@/views/02AreaLevelDriving/12UthaiYim.vue";
import ThaiBoeng from "@/views/02AreaLevelDriving/13ThaiBoeng.vue";

// 03-Organization
import MovieArchives from "@/views/03Organization/19MovieArchives.vue";
import Sirindhorn from "@/views/03Organization/21Sirindhorn.vue";

// 04-Edupreneurs
import SaturdaySchool from "@/views/04Edupreneurs/22SaturdaySchool.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  // 01-Longterm Project

  {
    path: "/starfish",
    name: "Starfish",
    component: Starfish,
  },

  {
    path: "/conserve",
    name: "Conserve",
    component: Conserve,
  },

  {
    path: "/tech-maker",
    name: "TechMaker",
    component: TechMaker,
  },

  {
    path: "/self-improve",
    name: "SelfImprove",
    component: SelfImprove,
  },

  // 01-Longterm Project

  // 02-Area Level Driving

  {
    path: "/khaochamao",
    name: "KhaoChamao",
    component: KhaoChamao,
  },

  {
    path: "/indiangooseberry",
    name: "Indiangooseberry",
    component: Indiangooseberry,
  },

  {
    path: "/artist",
    name: "Artist",
    component: Artist,
  },

  {
    path: "/match-stick",
    name: "MatchStick",
    component: MatchStick,
  },

  {
    path: "/uthai-yim",
    name: "UthaiYim",
    component: UthaiYim,
  },

  {
    path: "/thai-boeng",
    name: "ThaiBoeng",
    component: ThaiBoeng,
  },

  // 02-Area Level Driving

  // 03-Organization

  {
    path: "/movie-archives",
    name: "MovieArchives",
    component: MovieArchives,
  },

  {
    path: "/sirindhorn",
    name: "Sirindhorn",
    component: Sirindhorn,
  },

  // 03-Organization

  // 04-Edupreneurs
  {
    path: "/saturday-school",
    name: "SaturdaySchool",
    component: SaturdaySchool,
  },
  // 04-Edupreneurs

  {
    path: "/insKru",
    name: "insKru",
    component: insKruView,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

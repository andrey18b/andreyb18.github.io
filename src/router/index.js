import AboutMePage from "@/views/AboutMePage.vue";
import CVPage from "@/views/CVPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AboutMePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutMePage,
  },
  {
    path: "/cv",
    name: "cv",
    component: CVPage,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

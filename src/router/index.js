import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Distritos from "../views/Distritos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/distritos",
    name: "Distritos",
    component: Distritos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

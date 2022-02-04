import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./view/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/About.vue"),
    },
    {
      path: "/list",
      name: "Lista",
      component: () => import("./components/ListarUsuario.vue"),
    },
  ],
});

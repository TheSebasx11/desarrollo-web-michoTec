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
      name: "About",
      component: () => import("./components/About.vue"),
    },
    {
      path: "/listUser",
      name: "Lista",
      component: () => import("./components/Usuario/ListarUsuario.vue"),
    },
    {
      path: "/addUser",
      name: "Agregar User",
      component: () => import("./components/Usuario/AgregarUsuario.vue"),
    },
    {
      path: "/addProd",
      name: "Agregar Producto",
      component: () => import("./components/Producto/AgregarProducto.vue"),
    },
    {
      path: "/listProd",
      name: "Lista Producto",
      component: () => import("./components/Producto/ListarProducto.vue"),
    },
    {
      path: "/addDist",
      name: "Agregar Distribuidores",
      component: () => import("./components/Distribuidor/AgregarDistribuidor.vue"),
    },
    {
      path: "/listDist",
      name: "Listar Distribuidores",
      component: () => import("./components/Distribuidor/ListarDistribuidor.vue"),
    },
    {
      path: "/addPurch",
      name: "Agregar Compra",
      component: () => import("./components/Compra/AgregarCompra.vue"),
    },
    {
      path: "/listPurch",
      name: "Lista Compra",
      component: () => import("./components/Compra/ListarCompra.vue"),
    },
    
    
  ],
});

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../components/Layout.vue";
import ShopLayout from "../components/ShopLayout.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [{ path: "", component: Home }],
  },
  {
    path: "/listUser",
    name: "Lista",
    component: Layout,
    children:[{path:"", component: () => import("../components/Usuario/ListarUsuario.vue"),}]
  },
  {
    path: "/addUser",
    name: "Agregar User",
    component: Layout,
    children:[{path:"", component: () => import("../components/Usuario/AgregarUsuario.vue"),}]
  },
  {
    path: "/editUser",
    name: "Editar User",
    component: () => import("../components/Usuario/EditarUsuario.vue"),
    props: true,
  },
  {
    path: "/addProd",
    name: "Agregar Producto",
    component: Layout,
    children:[{path:"", component: () => import("../components/Producto/AgregarProducto.vue"),}]
  },
  {
    path: "/editProd",
    name: "Editar Producto",
    component: () => import("../components/Producto/EditarProducto.vue"),
    props: true,
  },
  {
    path: "/listProd",
    name: "Lista Producto",
    component: Layout,
    children:[{path:"", component: () => import("../components/Producto/ListarProducto.vue"),}]
  },
  {
    path: "/addDist",
    name: "Agregar Distribuidores",
    component: Layout,
    children:[{path:"", component: () => import("../components/Distribuidor/AgregarDistribuidor.vue"),}]
  },
  {
    path: "/editDist",
    name: "Editar Distribuidores",
    component: () =>
      import("../components/Distribuidor/EditarDistribuidor.vue"),
    props: true,
  },
  {
    path: "/listDist",
    name: "Listar Distribuidores",
    component: Layout,

      children:[{path:"", component: () => import("../components/Distribuidor/ListarDistribuidor.vue"),}]
  },
  {
    path: "/addPurch",
    name: "Agregar Compra",
    component: Layout,
    children:[{path:"", component: () => import("../components/Compra/AgregarCompra.vue"),}]
  },
  {
    path: "/editPurch",
    name: "Editar Compra",
    component: () => import("../components/Compra/EditarCompra.vue"),
    props: true,
  },
  {
    path: "/listPurch",
    name: "Lista Compra",
    component: Layout,
    children:[{path:"", component: () => import("../components/Compra/ListarCompra.vue"),}]
  },
  {
    path: "/shop",
    name: "Tienda",
    component: ShopLayout,
    children: [{path: "", component: () => import("../views/mainView.vue"),}]
  },
  {
    path: "/shopProduct",
    name: "Producto Shop",
    component: ShopLayout,
    children: [{path: "", component: ()=> import("../views/ProductShop.vue")}]
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

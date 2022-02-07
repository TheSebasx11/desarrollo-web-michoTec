import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/listUser",
    name: "Lista",
    component: () => import("../components/Usuario/ListarUsuario.vue"),
  },
  {
    path: "/addUser",
    name: "Agregar User",
    component: () => import("../components/Usuario/AgregarUsuario.vue"),
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
    component: () => import("../components/Producto/AgregarProducto.vue"),
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
    component: () => import("../components/Producto/ListarProducto.vue"),
  },
  {
    path: "/addDist",
    name: "Agregar Distribuidores",
    component: () => import("../components/Distribuidor/AgregarDistribuidor.vue"),
  },
  {
    path: "/editDist",
    name: "Editar Distribuidores",
    component: () => import("../components/Distribuidor/EditarDistribuidor.vue"),
    props: true,
  },
  {
    path: "/listDist",
    name: "Listar Distribuidores",
    component: () => import("../components/Distribuidor/ListarDistribuidor.vue"),
  },
  {
    path: "/addPurch",
    name: "Agregar Compra",
    component: () => import("../components/Compra/AgregarCompra.vue"),
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
    component: () => import("../components/Compra/ListarCompra.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


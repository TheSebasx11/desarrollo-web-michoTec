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
    path: "/addProd",
    name: "Agregar Producto",
    component: () => import("../components/Producto/AgregarProducto.vue"),
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


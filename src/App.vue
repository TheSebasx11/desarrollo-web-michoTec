<template>
  <div id="nav">
    <div>
      <ul class="flex gap-x-5">
        <router-link to="/">Home</router-link>
        <li @mouseover="show('items1')" @mouseleave="dispose('items1')">
          <span>Usuario</span>
          <div ref="items1" class="hidden">
            <router-link to="/listUser">Listar Usuario</router-link>
            <router-link to="/addUser">Agregar Usuario</router-link>
          </div>
        </li>
        <li @mouseover="show('items2')" @mouseleave="dispose('items2')">
          <span>Producto</span>
          <div ref="items2" class="hidden">
            <router-link to="/listProd">Listar Producto</router-link>
            <router-link to="/addProd">Agregar Producto</router-link>
          </div>
        </li>
        <li @mouseover="show('items3')" @mouseleave="dispose('items3')">
          <span>Distribuidor</span>
          <div ref="items3" class="hidden">
            <router-link to="/listDist">Listar Distribuidor</router-link>
            <router-link to="/addDist">Agregar Distribuidor</router-link>
          </div>
        </li>
        <li @mouseover="show('items4')" @mouseleave="dispose('items4')">
          <span>Compras</span>
          <div ref="items4" class="hidden">
            <router-link to="/listPurch">Listar Compra</router-link>
            <router-link to="/addPurch">Agregar Compra</router-link>
          </div>
        </li>
        <router-link to="/about">About</router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import "../css/output.css";

export default {
  name: "App",
  data: () => {
    return {
      indice: false,
    };
  },
  methods: {
    show(bar) {
      this.$refs[bar].className =
        "flex flex-col bg-slate-300 gap-y-3 px-2 py-1 absolute";
    },
    dispose(bar) {
      this.$refs[bar].className = "hidden";
    },
  },
};
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

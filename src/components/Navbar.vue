<template>
  <div id="nav">
    <div class="items-center justify-center flex my-2">
      <ul class="flex gap-x-5 font-semibold">
        <router-link to="/home">Home</router-link>
        <li @mouseover="show('items1')" @mouseleave="dispose('items1')">
          <span class="px-2 py-1 hover:rounded-xl hover:bg-[#9AEED8]"
            >Usuario</span
          >
          <div ref="items1" class="hidden">
            <router-link to="/listUser">Listar Usuario</router-link>
            <router-link to="/addUser">Agregar Usuario</router-link>
          </div>
        </li>
        <li @mouseover="show('items2')" @mouseleave="dispose('items2')">
          <span class="px-2 py-1 hover:rounded-xl hover:bg-[#9AEED8]"
            >Producto</span
          >
          <div ref="items2" class="hidden">
            <router-link to="/listProd">Listar Producto</router-link>
            <router-link to="/addProd">Agregar Producto</router-link>
          </div>
        </li>
        <li @mouseover="show('items3')" @mouseleave="dispose('items3')">
          <span class="px-2 py-1 hover:rounded-xl hover:bg-[#9AEED8]"
            >Distribuidor</span
          >
          <div ref="items3" class="hidden">
            <router-link to="/listDist">Listar Distribuidor</router-link>
            <router-link to="/addDist">Agregar Distribuidor</router-link>
          </div>
        </li>
        <li @mouseover="show('items4')" @mouseleave="dispose('items4')">
          <span class="px-2 py-1 hover:rounded-xl hover:bg-[#9AEED8]"
            >Compras</span
          >
          <div ref="items4" class="hidden">
            <router-link to="/listPurch">Listar Compra</router-link>
            <router-link to="/addPurch">Agregar Compra</router-link>
          </div>
        </li>
        <router-link to="/shop">Tienda</router-link>
        <li @mouseover="show('user')" @mouseleave="dispose('user')">
          <div class="bg-white rounded-xl">
            <span class="px-2 py-1 hover:rounded-xl hover:bg-[#9AEED8]"
              >Usuario</span
            >
            <div ref="user" class="hidden">
              <router-link to="/" class="font-bold">Cerrar Sesion</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../../css/output.css";

export default {
  name: "App",
  methods: {
    show(bar) {
      this.$refs[bar].className =
        "flex flex-col bg-white gap-y-3 px-2 py-1 absolute";
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
  border-radius: 9px;
  background: white;
  padding: 2px 4px 2px 4px;
}
</style>

<template>
  <div id="nav" >
    <div class="flex gap-x-5">
      <router-link to="/">Home</router-link>
      <router-link to="/listUser">Listar Usuario</router-link>
      <router-link to="/addUser">Agregar Usuario</router-link>
      <router-link to="/listProd">Listar Producto</router-link>
      <router-link to="/addProd">Agregar Producto</router-link>
      <router-link to="/listDist">Listar Distribuidor</router-link>
      <router-link to="/addDist">Agregar Distribuidor</router-link>
      <router-link to="/listPurch">Listar Compra</router-link>
      <router-link to="/addPurch">Agregar Compra</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <!-- <div class="flex gap-x-5">
      <router-link to="/editUser">Editar Usuario</router-link>
      <router-link to="/editProd">Editar Producto</router-link>
      <router-link to="/editPurch">Editar Compra</router-link>
      <router-link to="/editDist">Editar Distribuidor</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
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

<template>
  <div id="app" class="w-full">
    <div class="flex gap-x-2 w-full">
      <router-link class = "border-2 border-black py-1 w-fit" to = "/">Home</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/listUser" >Listar Usuario</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/addUser" >Agregar Usuario</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/listDist" >Listar Distribuidor</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/addDist" >Agregar Distribuidor</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/listPurch" >Listar Compra</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/addPurch" >Agregar Compra</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/listProd" >Listar Producto</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/addProd" >Agregar Producto</router-link>
      <router-link class = "border-2 border-black py-1 w-fit" to = "/about" >About</router-link>
    </div>
    <router-view/>

   
  </div>
</template>

<script>

import "../css/style.css";

export default {
  name: "App",
  data: () => {
    return { 
    };
  },
  components: {
    
  },
  mounted (){
    
  },
  
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

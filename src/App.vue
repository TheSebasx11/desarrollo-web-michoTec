<template>
  <div id="app" class="w-full">
    <div class="flex gap-x-2 w-full">
      <router-link to = "/list" class="w-52 h-8 bg-indigo-500">Usuario</router-link>
      <router-link to = "/about" class="bg-indigo-600">About</router-link>
    </div>
    <router-view/>

    <!-- <Card :image = "juan" title="Hola Fabiañiño"/>-->
    <!-- <Card :image="juan" title="Juan" /> -->
     <!-- <listar-usuario/> -->
   
  </div>
</template>

<script>
//import Card from "./components/Card.vue";
//import ListarUsuario from "./components/ListarUsuario.vue"
//import juan from "./assets/juan.jpg";

import "../css/style.css";

export default {
  name: "App",
  data: () => {
    return { //juan
    };
  },
  components: {
    //ListarUsuario, 
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

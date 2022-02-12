<template>
  <div class="">
    <section class="h-full">
      <div class="">
        <h1 class="font-extrabold font-sans text-4xl text-center mt-5">
          Bienvenido a nuestro proyecto!
        </h1>
        <h2 class="font-bold text-center text-lg mb-10">
          Diseñado con Vue, JavaScript y Tailwind para mas placer
        </h2>

        <div class="grid grid-cols-2 gap-x-4 m-4">
          <Card
            title="Usuario"
            desc="En la pestañana usuario contamos con 2 opciones principales, Listar Usuario y Agregar Usuario. Los cuales nos permiten visualizar y editar los datos del usuario."
            :img="user"
          />
          <Card
            title="Producto"
            desc="En la pestañana producto contamos con 2 opciones principales,
                Listar Producto y Agregar Producto. Los cuales nos permiten
                visualizar y editar los datos del producto."
            :img="producto"
          />
          <Card
            title="Distribuidor"
            desc="En la pestañana Distribuidor contamos con 2 opciones
                principales, Listar Distribuidor y Agregar Distribuidor. Los
                cuales nos permiten visualizar y editar los datos del distribuidor."
            :img="dist"
          />
          <Card
            title="Compra"
            desc="En la pestañana Compras contamos con 2 opciones principales,
                Listar Compras y Agregar Compras. Los cuales nos permiten
                visualizar y editar los datos de las compras."
            :img="compra"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import compra from "@/assets/quizas.png";
import user from "@/assets/sin.png";
import producto from "@/assets/81960.png";
import dist from "@/assets/no.png";

export default {
  name: "Home",
  data: () => {
    return {
      compra,
      user,
      producto,
      dist,
    };
  },
  components: {
    Card,
  },
};
</script>

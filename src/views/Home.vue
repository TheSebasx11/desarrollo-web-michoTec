<template>
  <div class="home">
    <section class="">
      <div class="">
        <h1 class="font-extrabold font-sans text-4xl text-center mt-5">
          Bienvenido a nuestro proyecto!
        </h1>
        <h2 class="font-bold text-center text-lg mb-10">
          Diseñado con Vue, JavaScript y Tailwind para mas placer
        </h2>
        <div class="grid grid-cols-2 gap-x-4 m-4">
          <div class="grid grid-cols-2 border-2 border-black rounded-lg">
            <div>
              <h1 class="font-semibold text-3xl text-center m-4">
                Usuario
              </h1>
              <p class="text-xl m-4">
                En la pestañana usuario contamos con 2 opciones principales, Listar Usuario y Agregar Usuario. Los cuales nos permiten visualizar y editar los datos del usuario.
              </p>
            </div>
            <div class="items-center justify-center flex">
              <img class="h-40" src="../assets/sin.png"></div>
          </div>
          <div class="grid grid-cols-2 border-2 border-black rounded-lg">
            <div>
              <h1 class="font-semibold text-3xl text-center m-4">
                Producto
              </h1>
              <p class="text-xl m-4">
                En la pestañana producto contamos con 2 opciones principales, Listar Producto y Agregar Producto. Los cuales nos permiten visualizar y editar los datos del producto.
              </p>
            </div>
            <div class="items-center justify-center flex">
              <img class="h-40" src="../assets/81960.png"></div>
          </div>
          <div class="grid grid-cols-2 border-2 border-black rounded-lg my-4">
            <div>
              <h1 class="font-semibold text-3xl text-center m-4">
                Distribuidor
              </h1>
              <p class="text-xl m-4">
                En la pestañana usuario contamos con 2 opciones principales, Listar Usuario y Agregar Usuario. Los cuales nos permiten visualizar y editar los datos del usuario.
              </p>
            </div>
            <div class="items-center justify-center flex">
              <img class="h-40" src="../assets/no.png"></div>
          </div>
          <div class="grid grid-cols-2 border-2 border-black rounded-lg my-4">
            <div>
              <h1 class="font-semibold text-3xl text-center m-4">
                Compra
              </h1>
              <p class="text-xl m-4">
                En la pestañana usuario contamos con 2 opciones principales, Listar Usuario y Agregar Usuario. Los cuales nos permiten visualizar y editar los datos del usuario.
              </p>
            </div>
            <div class="items-center justify-center flex">
              <img class="h-40" src="../assets/quizas.png"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    showDeleteAlert() {
      // Use sweetalert2
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

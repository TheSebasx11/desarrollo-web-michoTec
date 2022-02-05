<template>
  <div class="bg-whitepx-16 py-8 rounded-md flex justify-center text-center items-center">
    <section class="w-fit rounded-xl border border-black">
      <div class="user_tittle">
        <h1 class="text-3xl font-bold m-4">Datos del Usuario</h1>
      </div>
      <div class="user_info mx-4 mb-4">
        <p class="name text-xl font-semibold">Nombre</p>
        <input
          id="name_i"
          class="border-2 mb-2 border-black w-72"
          type="textname"
          placeholder="Nombre del usuario"
        />
        <p class="email text-xl font-semibold">Correo</p>
        <input
          id="email_i"
          class="border-2 mb-2 border-black w-72"
          type="emailtext"
          placeholder="@example.com"
        />
        <p class="Telefonodecontacto text-xl font-semibold">
          Telefono de contacto
        </p>
        <input
          id="phone_i"
          class="border-2 mb-2 border-black w-72"
          type="textcontact"
        />
        <p class="age text-xl font-semibold">Edad</p>
        <input
          id="age_i"
          class="border-2 mb-2 border-black w-72"
          type="textage"
        />
        <p class="postalcode text-xl font-semibold">Codigo postal</p>
        <input
          id="postal_i"
          class="border-2 border-black w-72"
          type="postaltext"
        />
      </div>
      <div
        class="button_class mx-4 mb-5 flex flex-row items-center justify-center"
      >
        <button
          v-on:click="goList()"
          class="
            cancel
            border-2
            px-4
            border-black
            font-semibold
            bg-white
            p-1
            hover:bg-red-500 hover:text-white
            transition
          "
        >
          Cancelar
        </button>
        <button
          v-on:click="goList()"
          class="
            register
            px-4
            ml-20
            border-2 border-black
            font-semibold
            bg-white
            p-1
            hover:bg-blue-400 hover:text-white
            transition
          "
        >
          Registrar
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goList() {
      this.$router.push("listUser");
    },
  },
};
</script>
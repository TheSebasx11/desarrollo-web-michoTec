<template>
  <div
    class="
      bg-whitepx-16
      py-8
      rounded-md
      flex
      justify-center
      text-center
      items-center
    "
  >
    <section class="w-fit rounded-xl border border-black">
      <div class="user_tittle">
        <h1 class="text-3xl font-bold m-4">Datos del Usuario</h1>
      </div>
      <div class="user_info mx-4 mb-4">
        <p class="name text-xl font-semibold">Nombre</p>
        <input
          v-bind:value="name"
          ref="name_i"
          class="border-2 mb-2 border-black w-72 px-2"
          placeholder="Nombre del usuario"
        />
        <p class="email text-xl font-semibold">Correo</p>
        <input
          v-bind:value="email"
          ref="email_i"
          class="border-2 mb-2 border-black w-72 px-2"
          placeholder="@example.com"
        />
        <p class="Telefonodecontacto text-xl font-semibold">
          Telefono de contacto
        </p>
        <input
          v-bind:value="phone"
          ref="phone_i"
          class="border-2 mb-2 border-black w-72 px-2"
        />
        <p class="age text-xl font-semibold">Edad</p>
        <input
          v-bind:value="age"
          ref="age_i"
          class="border-2 mb-2 border-black w-72 px-2"
        />
        <p class="postalcode text-xl font-semibold">Codigo postal</p>
        <input
          v-bind:value="postal"
          ref="postal_i"
          class="border-2 border-black w-72 px-2"
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
          v-on:click="Editar()"
          av-on:click="value()"
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
          Editar
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: String,
    name: String,
    email: String,
    phone: String,
    age: String,
    postal: String,
  },
  data: () => {
    return {
      request: null,
    };
  },
  methods: {
    goList() {
      this.$router.push("listUser");
    },
    createUser(id_, name_, email_, phone_, age_, postal_code_) {
      var User = {
        id: id_,
        name: name_,
        email: email_,
        phone: phone_,
        age: age_,
        postal_code: postal_code_,
      };
      return User;
    },
    Editar() {
      let User = this.createUser(
        this.id,
        this.$refs.name_i.value,
        this.$refs.email_i.value,
        this.$refs.phone_i.value,
        this.$refs.age_i.value,
        this.$refs.postal_i.value
      );
      axios
        .put(
          "https://61e762f3e32cd90017acbace.mockapi.io/User/" + this.id,
          User
        )
        .then((response) => {
          this.request = response.status;
          this.goList();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
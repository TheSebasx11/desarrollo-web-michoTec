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
          v-model="name_i"
          class="border-2 mb-2 border-black w-72"
          type="textname"
          placeholder="Nombre del usuario"
        />
        <p class="email text-xl font-semibold">Correo</p>
        <input
          v-model="email_i"
          class="border-2 mb-2 border-black w-72"
          type="emailtext"
          placeholder="@example.com"
        />
        <p class="Telefonodecontacto text-xl font-semibold">
          Telefono de contacto
        </p>
        <input
          v-model="phone_i"
          class="border-2 mb-2 border-black w-72"
          type="textcontact"
        />
        <p class="age text-xl font-semibold">Edad</p>
        <input
          v-model="age_i"
          class="border-2 mb-2 border-black w-72"
          type="textage"
        />
        <p class="postalcode text-xl font-semibold">Codigo postal</p>
        <input
          v-model="postal_i"
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
          v-on:click="
            goList();
            Registrar();
          "
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
import axios from "axios";
export default {
  data: () => {
    return {
      request: null,
      name_i: "",
      email_i: "",
      phone_i: "",
      age_i: "",
      postal_i: "",
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
    Registrar() {
      let User = this.createUser(0, this.name_i, this.email_i, this.phone_i, this.age_i, this.postal_i);
      axios
        .post("https://61e762f3e32cd90017acbace.mockapi.io/User", User)
        .then((response) => (this.request = response.status))
        .catch((e) => console.log(e));
    },
  },
};
</script>
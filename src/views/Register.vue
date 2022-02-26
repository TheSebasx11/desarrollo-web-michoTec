<template>
  <!-- component -->
  <!-- Create by joker banny -->
  <div class="h-screen bg-indigo-100 flex justify-center items-center">
    <div class="lg:w-2/5 md:w-1/2 w-2/3">
      <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
          Registro
        </h1>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="username"
            >Nombre</label
          >
          <input
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="Nombre"
          />
        </div>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="username"
            >Edad</label
          >
          <input
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="number"
            name="edad"
            id="username"
            placeholder="Edad"
          />
        </div>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="email"
            >Email</label
          >
          <input
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            name="email"
            id="email"
            placeholder="@email"
          />
        </div>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="password"
            >Contraseña</label
          >
          <div class="flex">
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              :type="show ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
            <button v-on:click="passShow">
              <div v-if="!show">
                <box-icon name="show"></box-icon>
              </div>
              <div v-else>
                  <box-icon name='low-vision' ></box-icon>
              </div>
            </button>
          </div>
        </div>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md"
            >Confirmar Contraseña</label
          >
          <div class="flex">
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              :type="show2 ? 'text' : 'password'"
              name="confirm"
              id="confirm"
              placeholder="Contraseña"
            />
            <button v-on:click="passShow2">
             <div v-if="!show2">
                <box-icon name="show"></box-icon>
              </div>
              <div v-else>
                  <box-icon name='low-vision' ></box-icon>
              </div>
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="
            w-full
            mt-6
            bg-indigo-600
            rounded-lg
            px-4
            py-2
            text-lg text-white
            tracking-wide
            font-semibold font-sans
          "
        >
          Registrar
        </button>
        <router-link
          to="/"
          class="
            w-full
            mt-6
            mb-3
            bg-indigo-100
            rounded-lg
            px-4
            py-2
            text-lg text-gray-800
            tracking-wide
            font-semibold font-sans
            flex
            justify-center
          "
        >
          Login
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show: false,
      show2: false,
    };
  },
  methods: {
    passShow(e) {
      e.preventDefault();
      this.show = !this.show;
      console.log(this.show);
    },
    passShow2(e) {
      e.preventDefault();
      this.show2 = !this.show2;
      console.log(this.show);
    },
  },
};
</script>
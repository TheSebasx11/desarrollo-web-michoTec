<template>
  <div class="font-sans">
    <div
      class="
        relative
        min-h-screen
        flex flex-col
        sm:justify-center
        items-center
        bg-gray-100
      "
    >
      <div class="relative sm:max-w-sm w-full">
        <div
          class="
            card
            bg-slate-700
            shadow-lg
            w-full
            h-full
            rounded-3xl
            absolute
            transform
            -rotate-6
          "
        ></div>
        <div
          class="
            card
            bg-slate-500
            shadow-lg
            w-full
            h-full
            rounded-3xl
            absolute
            transform
            rotate-6
          "
        ></div>
        <div
          class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
        >
          <label
            for=""
            class="block mt-3 text-sm text-gray-700 text-center font-semibold"
          >
            Login
          </label>
          <Form class="mt-10" @submit="enviar">
            <div>
              <!-- <input
                name="email"
                v-model="user.email"
                placeholder="Correo electronico"
                class="
                  mt-1
                  block
                  w-full
                  px-3
                  border-none
                  bg-gray-100
                  h-11
                  rounded-xl
                  shadow-lg
                  hover:bg-blue-100
                  focus:bg-blue-100 focus:ring-0
                "
              /> -->
              <Field
                name="email"
                v-model="user.email"
                placeholder="Correo electronico"
                :rules="emailVal"
                class="
                  mt-1
                  block
                  w-full
                  px-3
                  border-none
                  bg-gray-100
                  h-11
                  rounded-xl
                  shadow-lg
                  hover:bg-blue-100
                  focus:bg-blue-100 focus:ring-0
                "
              />
              <ErrorMessage
                name="email"
                class="
                  px-2
                  text-sm text-red-700
                  bg-red-100
                  border border-red-400
                  rounded
                  scale-in-center
                "
              />
            </div>

            <div class="mt-7 flex items-center justify-center">
              <Field
                name="password"
                :type="show ? 'text' : 'password'"
                v-model="user.password"
                placeholder="Contraseña"
                :rules="passVal"
                class="
                  w-full
                  px-3
                  border-none
                  bg-gray-100
                  h-11
                  rounded-xl
                  shadow-lg
                  hover:bg-blue-100
                  focus:bg-blue-100 focus:ring-0
                "
              />
              <button
                v-on:click="passShow"
                class="flex items-center justify-center"
              >
                <div v-if="!show">
                  <box-icon name="show"></box-icon>
                </div>
                <div v-else>
                  <box-icon name="low-vision"></box-icon>
                </div>
              </button>
            </div>
            <ErrorMessage
              name="password"
              class="
                px-2
                text-sm text-red-700
                bg-red-100
                border border-red-400
                rounded
                scale-in-center
              "
            />
            <div class="mt-7 flex">
              <label
                for="remember_me"
                class="inline-flex items-center w-full cursor-pointer"
              >
                <input
                  id="remember_me"
                  type="checkbox"
                  class="
                    rounded
                    border-gray-300
                    text-indigo-600
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600"> Recuerdame </span>
              </label>
            </div>

            <div class="mt-7">
              <button
                type="submit"
                class="
                  flex
                  justify-center
                  bg-blue-500
                  w-full
                  py-3
                  rounded-xl
                  text-white
                  shadow-xl
                  hover:shadow-inner
                  focus:outline-none
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-x hover:scale-105
                "
              >
                Login
              </button>
              <!-- <router-link
                to="/home"
                class="
                  flex
                  justify-center
                  bg-blue-500
                  w-full
                  py-3
                  rounded-xl
                  text-white
                  shadow-xl
                  hover:shadow-inner
                  focus:outline-none
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-x hover:scale-105
                "
              >
                Login
               </router-link> -->
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">¿Eres nuevo?</label>
                <router-link
                  to="/register"
                  href="#"
                  class="
                    text-blue-500
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:-translate-x hover:scale-105
                  "
                >
                  Crea una cuenta
                </router-link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { useToast } from "vue-toastification";
//import { mapState } from "vuex";
import axios from "axios";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data: () => {
    return {
      show: false,
      user: { email: "", password: "" },
      submitted: false,
      users: {},
    };
  },
  mounted() {
    this.getUsers();
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    passShow(e) {
      e.preventDefault();
      this.show = !this.show;
      console.log(this.show);
    },
    getUsers() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/User")
        .then((response) => {
          // console.log(response.data);
          this.users = response.data;
        })
        .catch((e) => console.log(e));
    },
    emailVal(value) {
      if (!value && !value.trim()) {
        return "Debes llenar este campo";
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Tiene que ser un email valido";
      }

      return true;
    },
    passVal(value) {
      if (value.length < 6) {
        return "La contraseña tiene que ser de más de 6 caracteres";
      }
      return true;
    },
    enviar() {
      let status = false;
      let usuario = null;
      for (const user of this.users) {
        if (
          user.email === this.user.email &&
          user.password === this.user.password
        ) {
          status = true;
          usuario = user;
        }
      }
      if (status) {
        this.$store.commit('addUser', usuario);
        this.$router.push({ name: "Tienda" });
      } else {
        this.toast.error("Algo ha salido mal");
      }
    },
  },

};
</script>
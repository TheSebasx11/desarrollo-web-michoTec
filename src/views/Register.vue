<template>
  <div class="h-full py-10 bg-indigo-100">
    <div class="flex justify-center items-center">
      <div class="lg:w-2/5 md:w-1/2 w-2/3">
        <Form
          class="bg-white p-10 rounded-lg shadow-lg min-w-full"
          @submit="enviar"
        >
          <h1
            class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans"
          >
            Registro
          </h1>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="username"
              >Nombre</label
            >
            <Field
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="Nombre"
              :rules="blackVal"
              v-model="user.name"
            />
            <ErrorMessage
              name="username"
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
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="username"
              >Edad</label
            >
            <Field
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="number"
              name="edad"
              id=""
              placeholder="Edad"
              :rules="blackVal"
              v-model="user.age"
            />
            <ErrorMessage
              name="edad"
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
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="email"
              >Email</label
            >
            <Field
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              :rules="emailVal"
              v-model="user.email"
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
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="password"
              >Contraseña</label
            >
            <div class="flex">
              <Field
                class="
                  w-full
                  bg-gray-100
                  px-4
                  py-2
                  rounded-lg
                  focus:outline-none
                "
                :type="show ? 'text' : 'password'"
                name="password"
                id="password"
                placeholder="Contraseña"
                :rules="passVal && blackVal"
                v-model="user.password"
              />
              <button v-on:click="passShow">
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
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md"
              >Confirmar Contraseña</label
            >
            <div class="flex">
              <Field
                class="
                  w-full
                  bg-gray-100
                  px-4
                  py-2
                  rounded-lg
                  focus:outline-none
                "
                :type="show2 ? 'text' : 'password'"
                name="confirm"
                id="confirm"
                placeholder="Contraseña"
                :rules="passVal && blackVal && equalPass"
              />
              <button v-on:click="passShow2">
                <div v-if="!show2">
                  <box-icon name="show"></box-icon>
                </div>
                <div v-else>
                  <box-icon name="low-vision"></box-icon>
                </div>
              </button>
            </div>
            <ErrorMessage
              name="confirm"
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
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data: () => {
    return {
      show: false,
      show2: false,
      user: {
        name: "",
        age: "",
        email: "",
        password: "",
      },
    };
  },
  components: { Field, Form, ErrorMessage },
  methods: {
    enviar() {
      axios
        .post("https://61e762f3e32cd90017acbace.mockapi.io/User", this.user)
        .then((response) => {
          this.request = response.status;
          this.toast.success("Registrado con exito");
          setTimeout(100);
          this.$router.push("/");
        })
        .catch((e) => console.log(e));
    },
    passShow(e) {
      e.preventDefault();
      this.show = !this.show;
    },
    passShow2(e) {
      e.preventDefault();
      this.show2 = !this.show2;
    },
    blackVal(value) {
      if (!value) {
        return "Debes llenar este campo";
      }
      return true;
    },
    emailVal(value) {
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
    equalPass(value) {
      if (value !== this.user.password) {
        return "La contraseña no coincide";
      }
      return true;
    },
  },
};
</script>
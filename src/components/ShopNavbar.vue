<template>
  <div class="bg-blue-800">
    <nav class="nav_bar w-full flex flex-row justify-between">
      <div class="img_input flex items-center">
        <img :src="logo" class="logo w-32" />
      </div>
      <input
        type="search"
        placeholder="Buscar producto"
        class="search self-center w-5/12 h-9 px-4 mr-3"
      />
      <div class="items_container flex flex-row items-center w-fit">
        <div
          id="menu"
          class="
            lg:flex lg:flex-row lg:items-center lg:static lg:gap-x-2
            left-0
            -top-120
            w-30
            py-4
            pr-3
            gap-y-3
            flex flex-col
            rounded-xl
          "
        >
          <ul
            class="
              lg:flex lg:w-fit lg:flex-row lg:items-center lg:gap-x-5
              text-white
              flex flex-col
              w-28
              pl-3
              gap-y-2
            "
          >
            <li
              class="
                border-2
                rounded-tl-xl rounded-br-xl
                p-2
                transition
                hover:rounded-xl hover:scale-110
              "
            >
              <router-link to="/shop">Inicio</router-link>
            </li>
            <li
              class="
                border-2
                rounded-tl-xl rounded-br-xl
                p-2
                transition
                hover:rounded-xl hover:scale-110
              "
            >
              <!-- <a href="">Acerca de</a>
            </li>
            <li
              class="
                border-2
                rounded-tl-xl rounded-br-xl
                p-2
                transition
                hover:rounded-xl hover:scale-110
              "
            > -->
              <router-link to="/shopProduct">Productos</router-link>
            </li>

            <li
              class="
                w-fit
                border-2
                rounded-tl-xl rounded-br-xl
                p-2
                transition
                hover:rounded-xl hover:scale-110
              "
            >
              <router-link to="/home">Admin Panel</router-link>
            </li>
          </ul>
          <div
            class="
              cart
              flex flex-row
              items-center
              border-2
              rounded-full
              h-12
              mx-3
              px-4
              w-28
              bg-blue-400
            "
          >
            <!-- <img src="" class="carrito w-7" /> -->
            <box-icon name="cart" size="25px"></box-icon>
            <p class="mx-2">Carrito</p>
          </div>
          <div
            @mouseover="show('user')"
            @mouseleave="dispose('user')"
            class="
              w-fit
              border-2
              rounded-xl
              bg-white
              p-2
              transition
              hover:rounded-xl hover:scale-110
              flex
              gap-x-2
            "
          >
            <box-icon type="solid" name="user-circle"></box-icon>
            <!-- <span>Usuario</span> -->
            <div ref="user" class="hidden ">
              <router-link to="/" class="font-bold ">Cerrar Sesion</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from "../assets/MichoTec logo.png";
import "boxicons";

export default {
  data() {
    return {
      logo,
    };
  },
  methods: {
    show(bar) {
      this.$refs[bar].className =
        "flex flex-col bg-white w-28 pl-2 py-1 mt-8 right-0 absolute";
    },
    dispose(bar) {
      this.$refs[bar].className = "hidden";
    },
  },
};
</script>
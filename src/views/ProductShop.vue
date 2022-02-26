<template>
  <div class="bg-gradient-to-b from-blue-500 to-blue-800">
    <div class="pt-10">
      <h2 class="font-bold text-3xl text-center text-white">Productos destacados</h2>
      <div class="flex w-full justify-center">
        <p class="my-5 text-center  text-white">
          Obtén tu producto rapido. Que se acaban rapido
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 px-5">
      <main-produc-item
      class=""
        v-for="product in StarredProducts"
        :key="product.id"
        :id="product.id"
        :title="product.name"
        :url="product.url"
      />
    </div>
    <div class="flex w-full mt-28 ">
      <div class="w-1/2">
        <div class="announce_container my-6 ml-6">
          <h2 class="text-3xl font-bold mb-7">Compra ya tu producto!</h2>
          <p class="text-left mr-4">
            Obtén tu producto rapido. Que se acaban rapido
          </p>
        </div>
        <div class="button_browse m-6">
          <button
            class="
              border-2 border-white
              px-4
              py-2
              rounded-xl
              text-white
              font-semibold
              bg-blue-600
              hover:scale-110 hover:bg-blue-900
            "
          >
            Browse All
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-10 ">
        <main-produc-item
          v-for="product in Products"
          :key="product.id"
          :id="product.id"
          :title="product.name"
          :url="product.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainProducItem from "../components/Inicio/MainProductItem.vue";
import axios from "axios";
export default {
  data: () => {
    return {
      Products: null,
      StarredProducts: null,
    };
  },
  components: {
    MainProducItem,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Product")
        .then((response) => {
          this.Products = response.data;
          this.StarredProducts =  this.Products.slice(0, 4);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
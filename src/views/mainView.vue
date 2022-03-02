<template>
  <div class="bg-gradient-to-b h-screen w-full from-blue-500 to-blue-800 pt-10">
    <h2 class="featured_products_container font-bold text-3xl text-center">
      Productos destacados
    </h2>
    <div class="flex flex-col">
      <p class="text-center mb-10">
       Obtén tu producto rapido. Que se acaban rapido
      </p>
    </div>
    <div class="w-full  md:grid-cols-5 grid grid-cols-2 gap-4 p-3">
      <main-produc-item
        v-for="product in Products"
        :key="product.id"
        :id="product.id"
        :title="product.name"
        :url="product.url"
      />
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
          this.Products = this.Products.slice(0, 5);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
<template>
  <div class="m-5">
    <h2 class="featured_products_container font-bold text-3xl text-center m-5">
      Productos destacados
    </h2>
    <div class="flex flex-col">
      <p class="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nihil
        accusamus earum eius magnam quisquam incidunt error eaque iure soluta?
        Recusandae autem exercitationem pariatur labore magnam velit provident
        aliquid at.
      </p>
    </div>
    <div class="w-full md:grid-cols-5 grid grid-cols-2 gap-4 p-3">
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
     //    this.Products =  this.Products.slice(0, 5);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
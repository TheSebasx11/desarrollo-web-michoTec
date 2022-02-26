<template>
  <div class="bg-gradient-to-b from-blue-500 to-blue-800">
    <div class="grid grid-cols-2 border border-black">
      <div class="border border-black">
        <img class="h-full w-full" :src="Product.url" />
      </div>
      <div
        class="items-center justify-center flex flex-col border border-black"
      >
        <h2 class="font-bold text-4xl">
          {{ Product.name }}
        </h2>
        <div class="flex items-center justify-center m-3">
          <box-icon type="solid" v-for="i in 5" :key="i" name="star"></box-icon>
        </div>
        <div>
          <p class="text-xl text-center">$ {{ Product.price }}</p>
        </div>
        <p class="text-3xl p-4 text-justify">
          {{ Product.description }}
        </p>
        <div class="text-center m-4">
          <a
            href=""
            class="
              border-2
              text-white
              border-white
              bg-blue-900
              font-sans font-semibold
              text-xl
              p-2
              rounded-xl
              transition
              hover:bg-blue-400
            "
          >
            Comprar Ahora
          </a>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h3 class="text-4xl text-center font-sans font-bold m-4">
          Productos Similares
        </h3>
        <div class="grid grid-cols-3 gap-2">
          <related-product
            v-for="pro in Products"
            :key="pro.id"
            :id="pro.id"
            :price="pro.price"
            :tittle="pro.name"
            :url="pro.url"
          />

          <!-- aqui -->
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div class="border flex">
        <div class="flex justify-center items-center">
          <img
            class="h-52 p-10 object-cover rounded-full"
            src="http://placeimg.com/640/480/abstract"
          />
        </div>
        <div class="p-4 flex flex-col justify-center">
          <p class="text-center text-2xl font-sans font-bold">Mariana Cena</p>
          <p class="text-center">Agosto 4 de 2021</p>
        </div>
        <div class="text-2xl flex items-center m-4 font-sans">
          <p class="text-center">
            Es un magnifico producto, completamente funcional, me gusta mucho
            este! ¡¡¡Recomendado 100%!!!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RelatedProduct from "../Inicio/relatedProducts.vue";
export default {
  props: {
    id: Number,
  },
  data: () => {
    return {
      Product: {
        name: "",
        description: "",
        price: "",
        stock: 0,
        url: "",
      },
      Products: {}
    };
  },
  components: {
    RelatedProduct,
  },
  mounted() {
    this.getProduct();
    this.getProducts();
  },
  methods: {
    getProduct() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Product/" + this.id)
        .then((response) => {
          this.Product = response.data;
        })
        .catch(console.log);
    },
    getProducts() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Product")
        .then((response) => {
          const numero = Math.floor(Math.random() * 10);
          this.Products = response.data.slice(numero, numero+3);
          
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
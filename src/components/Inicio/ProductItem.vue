<template>
  <div class="w-full border bg-amber-300 border-black">
    <div class="flex w-full">
      <div class="flex">
        <img :src="Product.url" />
      </div>
      <div class="flex flex-col items-center w-1/2">
        <p class="font-bold mt-5">{{ Product.name }}</p>
        <p class="px-10">{{Product.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    };
  },
  mounted() {
    this.getProduct();
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
  },
};
</script>
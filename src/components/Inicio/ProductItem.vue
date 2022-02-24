<template>
  <!--<div class="w-full border bg-amber-300 border-black">
    <div class="flex w-full">
      <div class="flex">
        <img :src="Product.url" />
      </div>
      <div class="flex flex-col items-center w-1/2">
        <p class="font-bold mt-5">{{ Product.name }}</p>
        <p class="px-10">{{Product.description}}</p>
      </div>
    </div>
  </div>!-->
  <div class="bg-gradient-to-b from-blue-500 to-blue-800">
    <div class="grid grid-cols-2 border border-black">
      <div class="border border-black">
        <img class="h-full w-full" :src="Product.url">
      </div>
      <div
        class="items-center justify-center flex flex-col border border-black"
      >
        <h2 class="font-bold text-4xl">
          {{Product.name}}
        </h2>
        <div class="flex items-center justify-center m-3">
          <img class="h-5 w-5" :src="Product.url">
          <img class="h-5 w-5" :src="Product.url">
          <img class="h-5 w-5" :src="Product.url">
          <img class="h-5 w-5" :src="Product.url">
          <img class="h-5 w-5" :src="Product.url">
        </div>
        <div>
          <p class="text-xl text-center">
            $ {{Product.price}}
          </p>
        </div>
        <p class="text-3xl p-4 text-justify">
          {{Product.description}}
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
          <div>
            <div class="border border-white">
              <div class="flex items-center justify-center">
                <img
                  class="w-full"
                  src="http://placeimg.com/640/480/abstract"
                />
                <!--<img class="w-full" :src="productimage">!-->
              </div>
              <div>
                <h2 class="text-xl font-sans font-bold text-center">
                  Titulo de producto
                  {{ ptittle }}
                </h2>
                <div class="flex items-center justify-center m-1">
                  <!--<img class="h-5 w-5" :src="productimage">!-->
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                </div>
                <p class="text-lg text-center">
                  $5000
                  {{ price }}
                </p>
              </div>
            </div>
             </div>
          <div>
            <div class="border border-white">
              <div class="flex items-center justify-center">
                <img
                  class="w-full"
                  src="http://placeimg.com/640/480/abstract"
                />
                <!--<img class="w-full" :src="productimage">!-->
              </div>
              <div>
                <h2 class="text-xl font-sans font-bold text-center">
                  Titulo de producto
                  {{ ptittle }}
                </h2>
                <div class="flex items-center justify-center m-1">
                  <!--<img class="h-5 w-5" :src="productimage">!-->
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                </div>
                <p class="text-lg text-center">
                  $5000
                  {{ price }}
                </p>
              </div>
            </div>
             </div>
          <div>
            <div class="border border-white">
              <div class="flex items-center justify-center">
                <img
                  class="w-full"
                  src="http://placeimg.com/640/480/abstract"
                />
                <!--<img class="w-full" :src="productimage">!-->
              </div>
              <div>
                <h2 class="text-xl font-sans font-bold text-center">
                  Titulo de producto
                  {{ ptittle }}
                </h2>
                <div class="flex items-center justify-center m-1">
                  <!--<img class="h-5 w-5" :src="productimage">!-->
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                  <img
                    class="h-5 w-5"
                    src="http://placeimg.com/640/480/abstract"
                  />
                </div>
                <p class="text-lg text-center">
                  $5000
                  {{ price }}
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div class="border  flex">
                <div class="flex justify-center items-center">
                    <img class="h-52 p-10 object-contain" src="http://placeimg.com/640/480/abstract">
                </div>
                <div class="p-4">
                    <p class="text-center text-2xl font-sans font-bold ">
                        Mariana Cena
                    </p>
                    <p class="text-center">
                        Agosto 4 de 2021
                    </p>
                </div>
                <div class="text-2xl flex items-center m-4 font-sans">
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate dolorem optio et obcaecati
                        corrupti! Omnis, id dolorum eaque nisi fuga fugiat pariatur itaque? Dignissimos, odit repellat
                        voluptatum saepe omnis fugit!
                    </p>
                </div>
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
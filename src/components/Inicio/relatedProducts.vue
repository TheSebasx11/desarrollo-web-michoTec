<template>
  <div
    class="
      border border-white
      flex flex-col
      hover:scale-95
      duration-200
      justify-center
    "
    v-on:click="reload"
  >
    <router-link :to="'/ShopItem/' + id">
      <div class="flex items-center justify-center">
        <img class="w-64 h-64 object-cover" :src="url" />
        <!--<img class="w-full" :src="productimage">!-->
      </div>
      <div>
        <h2 class="text-xl font-sans font-bold text-center">
          {{ tittle }}
        </h2>
        <div class="flex items-center justify-center m-1">
          <!--<img class="h-5 w-5" :src="productimage">!-->
          <box-icon type="solid" v-for="i in 5" :key="i" name="star"></box-icon>
        </div>
        <p class="text-lg text-center">
          {{ price }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    url: String,
    tittle: String,
    price: Number,
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>
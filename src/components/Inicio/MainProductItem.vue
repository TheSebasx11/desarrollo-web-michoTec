<template>
  <div class="border border-black flex flex-col hover:scale-110 duration-200">
    <router-link :to="'/ShopItem/'+id" >
      <div class="">
        <img class="w-72" :src="url" />
      </div>
      <p class="flex justify-center">{{ title }}</p></router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    url: String,
  },
  methods: {},
};
</script>
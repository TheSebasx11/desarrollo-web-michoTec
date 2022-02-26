<template>
  <div class="flex flex-col hover:scale-110 duration-200 rounded-2xl">
    <router-link :to="'/ShopItem/' + id">
      <div class="border-2 border-white flex justify-center w-fit rounded-2xl">
        <img class="w-72 h-52 object-cover rounded-2xl" :src="url" />
      </div>
      <p class="flex justify-center text-white">{{ title }}</p>
    </router-link>
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
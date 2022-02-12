<template>
  <div class="grid grid-cols-2 border-2 border-black rounded-xl my-1 ">
    <div>
      <h2 class="font-semibold text-3xl text-center m-4">{{title}}</h2>
      <p class="text-xl m-2 w-11/12">
        {{ desc }}
      </p>
    </div>
    <div class="items-center justify-center flex">
      <img class="h-40" :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    img: String,
  },
 
};
</script>
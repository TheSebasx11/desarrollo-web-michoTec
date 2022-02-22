<template>
  <div>
    <shop-navbar />
    <router-view />
  </div>
</template>
<script>
import ShopNavbar from "../components/ShopNavbar.vue";
export default {
  components: {
    ShopNavbar,
  },
};
</script>
<template>
  <div>
    <shop-navbar />
    <router-view />
    <custom-footer/>
  </div>
</template>
<script>
import ShopNavbar from "../components/ShopNavbar.vue";
import CustomFooter from "../components/Footer.vue";
export default {
  components: {
    ShopNavbar,
    CustomFooter
  },
};
</script>
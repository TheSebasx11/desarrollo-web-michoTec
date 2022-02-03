<template>
  <div id="app" class="bg-orange-400">
    <Card
      image="https://caracoltv.brightspotcdn.com/dims4/default/499cced/2147483647/strip/true/crop/3770x2514+0+0/resize/1000x667!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F7f%2F97%2F02b9fe5d47dbba6bf22249340845%2F063-1181743558-1.jpg"
      title="Hola Fabiañiño"
    />
    <Card :image="juan" title="aaa" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import juan from "./assets/juan.jpg";
import "../css/style.css"

export default {
  name: "App",
  data: () => {
    return { juan };
  },
  components: {
    Card,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

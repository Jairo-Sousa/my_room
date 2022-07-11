<template>
  <div id="componentContainer">
    <Header />
    <div style="position: fixed"></div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  data: () => {
    return {};
  },
};
</script>

<style>
@import url("./styles/app.css");
</style>
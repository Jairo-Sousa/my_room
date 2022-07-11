<template>
  <div id="componentContainer" class="w-avaliable d-flex">
    <Nav />
    <div class="w-avaliable">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
//implementar rotas para view
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainView",
  components: {
    Nav,
    Footer,
  },
};
</script>
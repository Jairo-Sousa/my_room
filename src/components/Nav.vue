<template>
  <div id="componentContainer" class="d-flex flexD-column">
    <ul>
      <li v-for="route in routes" :key="route.id">
        <Tab
          :tabName="route.name"
          :path="route.path"
          :selfId="route.id"
          :selectedTab="selectedTab"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Tab from "./Tab.vue";

export default {
  name: "Nav",
  data() {
    return {
      routes: [],
      selectedTab: 1,
    };
  },
  components: {
    Tab,
  },
  methods: {
    async getRoutes() {
      const req = await fetch("http://localhost:3000/routes");
      const data = await req.json();
      this.routes = data;
    },
  },
  mounted() {
    this.getRoutes();
  },
};
</script>

<style scoped>
#componentContainer {
  width: fit-content; /*alterar para fit content*/
  background-color: transparent;
  border-right: 4px solid var(--pallete--fourth);
  height: 80vh; /*  80vh/500px ou inehit? */
  /* margin-top: 125px;  ou 20vh ()tam do header*/
}
#componentContainer ul {
  height: 100%;
}
</style>
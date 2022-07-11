<template>
  <router-link
    :to="path"
    :style="`background-color: ${bgColor}; color: ${color}`"
    >{{ tabName }}
  </router-link>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      bgColor: "var(--pallete--second)",
      color: "var(--pallete--fourth)",
    };
  },
  props: {
    tabName: String,
    path: String,
    selfId: Number,
    selectedTab: Number,
  },
  methods: {
    setColors() {
      this.bgColor = "var(--pallete--tird)";
      this.color = "var(--pallete--first)";
    },
    selectTab() {
      if (this.selectedTab == this.selfId) {
        this.setColors();
      }
    },
  },
  mounted() {
    this.selectTab();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;

  width: 250px;
  height: 60px; /* ou 9-10vh  */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1vh;
}
</style>
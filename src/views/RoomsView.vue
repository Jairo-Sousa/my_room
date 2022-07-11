<template>
  <div id="viewContainer" class="w-avaliable">
    <ReleaseSubs />
    <div id="rooms">
      <ul class="d-flex flexW-Wrap">
        <li>Card de sala</li>
        <li>Card de sala</li>
        <li>Card de sala</li>
        <li>Card de sala</li>
        <li>Card de sala</li>
        <li>Card de sala</li>
        <li>Card de sala</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ReleaseSubs from "../components/ReleaseSubs.vue";
export default {
  name: "RoomView",
  components: {
    ReleaseSubs,
  },
};
</script>

<style scoped>
#viewContainer {
  height: 74vh;
}

#rooms {
  padding: 2rem;
}

#rooms ul {
  gap: 1rem;
}
</style>
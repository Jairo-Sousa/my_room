<template>
  <button>{{ btnName }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnName: String,
  },
};
</script>

<style scoped>
button {
  background-color: crimson;
  color: white;
  border: none;

  padding: 1rem;
  border-radius: 2rem;

  cursor: pointer;
}
button:hover {
  background-color: #e7294f;
}
</style>
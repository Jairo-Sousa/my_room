<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: "MSG",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
div {
  color: white;
}
</style>
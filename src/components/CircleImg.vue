<template>
  <img :src="path" :alt="alt" />
</template>

<script>
export default {
  name: "CircleImg",
  props: {
    path: String,
    alt: String,
  },
};
</script>

<style>
img {
  border-radius: 50%;
}
</style>
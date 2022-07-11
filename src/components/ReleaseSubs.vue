<template>
  <div id="componentContainer" class="d-flex alignI-center">
    <MSG :msg="`Mesnagem estática`" id="msg" />
    <Button :btnName="`Botao estático`" />
  </div>
</template>

<script>
import MSG from "./MSG.vue";
import Button from "./Button.vue";

export default {
  name: "ReleaseSubs",
  components: {
    MSG,
    Button,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  font-weight: 800;
}
#componentContainer {
  width: -webkit-fill-available;
  height: 100px;
  border-bottom: 4px solid var(--pallete--fourth);

  padding: 0 0 0 1rem;
  gap: 1rem;
}

#msg {
  color: var(--palette-fourth);
}
</style>
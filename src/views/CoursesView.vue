<template>
  <div id="viewContainer">
    <Title :title="title" />
    <div id="courses">
      <ul class="d-flex flexW-Wrap">
        <li v-for="courseCard in courseCards" :key="courseCard.id">
          {{ courseCard.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  name: "CoursesView",
  components: {
    Title,
  },
  data() {
    return {
      title: "Seus cursos",
      courseCards: [
        {
          id: 0,
          name: "Curso 1",
        },
        {
          id: 1,
          name: "Curso 2",
        },
        {
          id: 2,
          name: "Curso 3",
        },
      ],
    };
  },
};
</script>

<style scoped>
#viewContainer {
  height: 74vh;
  padding: 2rem;
  box-sizing: border-box;
}

#courses {
  padding: 1rem;
}

#courses ul {
  gap: 1rem;
}
</style>
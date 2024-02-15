<script>
import { store } from '../store';
import FilmCards from './Cards/FilmCards.vue';
import SeriesCards from './Cards/SeriesCards.vue';

export default {
  name: 'AppMain',
  components: {
    FilmCards,
    SeriesCards
  },
  data() {
    return {
      store: store
    };
  },
  }

</script>

<template>
  <main>
    <h1 v-show="store.researchArray.length !== 0">Films</h1>
    <div class="filmContainer">
      <FilmCards v-for="(element, index) in store.researchArray" :key="index" :propsObject="element" />
    </div>
    <h1 v-show="store.seriesArray.length !== 0">Tv Series</h1>
    <div class="filmContainer">
      <SeriesCards v-for="(element, index) in store.seriesArray" :key="index" :propsObject="element" />
    </div>
  </main>
</template>

<style lang="scss">
@use '../assets/scss/style.scss' as *;

body {
  background-color: $bgColor;
}

main {
  padding: 1em;
  width: 90%;
  max-width: 1400px;
  margin: 20px auto;
}

h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 0.5em;
}

.filmContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}
</style>

<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components : {
        AppHeader,
        AppMain
    },
    data(){
        return {
            store
        }
    },
    methods : {
        getFilm(){
            store.loading = true;
            store.apiUrlMovie = 'https://api.themoviedb.org/3/search/movie?api_key=aac6de8a780b39acd1a8491f2ceaec74&query='
            store.apiUrlTv = 'https://api.themoviedb.org/3/search/tv?api_key=aac6de8a780b39acd1a8491f2ceaec74&query='
            if (store.searchText !== ""){
                store.apiUrlMovie += store.searchText;
                store.apiUrlTv += store.searchText
            };

            axios.get(store.apiUrlMovie).then(response => {
                console.log(response.data.results);
                store.researchArray = response.data.results
            });
            axios.get(store.apiUrlTv).then(response => {
                console.log(response.data.results);
                store.seriesArray = response.data.results
            });
            store.loading = false;
        }
    }
}
</script>

<template>
    <AppHeader  @filmSearch="getFilm" />
    <div class="loader" v-if="store.loading"></div>
<AppMain/>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

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
            store.apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=aac6de8a780b39acd1a8491f2ceaec74&query='
            if (store.searchText !== ""){
                store.apiUrl += store.searchText
            };

            axios.get(store.apiUrl).then(response => {
                console.log(response.data.results);
                store.researchArray = response.data.results
            })
            store.loading = false;
        }
    }
}
</script>

<template>
<AppHeader  @filmSearch="getFilm" />
<AppMain/>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>

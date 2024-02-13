<script>
import { store } from '../store'
import FilmCards from './Cards/FilmCards.vue';
export default {
    name : 'AppMain',
    components : {
        FilmCards
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
<main>
    <FilmCards v-for="(element,index) in store.researchArray" :key="index" :propsObject="element" />
</main>
</template>


<style lang="scss">
@use '../assets/scss/style.scss' as *;
    body{
        background-color: $bgColor;
    }
    main{
        padding: 1em;
        width: 90%;
        max-width: 1400px;
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

</style>
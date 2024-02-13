<script>
import FilmCards from './Cards/FilmCards.vue';
export default {
    name : 'AppMain',
    components : {
        FilmCards
    },
    data() {
        return {

        }
    }
}
</script>
<template>
<main>
    <FilmCards/>
</main>
</template>


<style lang="scss">
@use '../assets/scss/style.scss' as *;
    body{
        background-color: $bgColor;
    }
    main{
        padding: 1em;
        border: 2px solid blue;
        width: 90%;
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

</style>
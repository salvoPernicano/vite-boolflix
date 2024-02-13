<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <header>
        <nav>
            <figure class="logo">
                <img src="../assets/img/netflix-logo-png-download-11660600814vkfgjh8swu.png" alt="">
            </figure>
            <div class="navigationSide">
                <input @keyup.enter="$emit('filmSearch')" v-model="store.searchText" type="text" placeholder="Search..">
                <button @click.prevent="$emit('filmSearch')" type="button"><i class="fa fa-search"></i></button>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;

header {
    background-color: $navColor;
}

nav {
    margin: 0 auto;
    width: 90%;
    max-width: 1400px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
        height: 100%;

        img {
            height: 100%;
        }
    }

    .navigationSide {
        display: flex;
        align-items: center;
    }

    input {
        border: 1px solid white;
        padding: 5px;
        font-size: 1.2rem;
        height: 35px;
    }

    button {
        border: none;
        height: 35px;
        transition: all .3s;

        &:hover {
            box-shadow: rgba(24, 100, 185, 0.904) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        }

        .fa-search {
            border: none;
            padding: 5px;
            font-size: 1.2rem;
            background-color: white;
            color: lightslategrey;
        }
    }

}
</style>
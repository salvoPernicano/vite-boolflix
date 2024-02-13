<script>
export default {
    name: 'FilmCards',
    props : [
        'propsObject'
    ],
    data() {
        return {
            imagePath : 'https://image.tmdb.org/t/p/w300',
            imgError : false
        }
    },
    methods : {
        handleImgError() {
      this.imgError = true;
    },
    }
}
</script>
<template>
    <div class="card" :style="{ background: imgError ? 'black' : 'none' }">
      <img
        :src="imagePath + propsObject.poster_path"
        alt="Film Poster"
        @error="handleImgError"
        :class="{ 'hidden': imgError }"
      >
      <div class="movieInfo">
        <h2>{{ propsObject.title }}</h2>
        <h5>{{'Titolo orig : '+" "+ propsObject.original_title }}</h5>
        <h3>{{'lingua originale'+ ' ' +propsObject.original_language.toLocaleUpperCase() }}</h3>
        <span>{{ Math.min(Math.ceil(propsObject.vote_average / 2), 5) }}</span>
      </div>
    </div>
  </template>


<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as *;

.card {
    height: 350px;
    width: 20%;
      margin-bottom: 10px; 
      box-sizing: border-box; 
      max-width: 250px; 
    // border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      position: relative;
      text-align: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movieInfo {
        background-color: rgba($color: #000000, $alpha: 0.6);
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        transition: all .3s;
        &:hover{
            opacity: 1;
            border: 1px solid white;
            box-shadow: rgb(255, 255, 255) 0px 0px 20px, rgba(255, 255, 255, 0.801) 0px 0px 20px;
        }
    }
}
.hidden {
    display: none;
  }

@media screen and (min-width: 576px) and (max-width: 992px) {
  .card {
flex-basis: 50%;
  }
}
@media screen and (max-width: 575px)  {
  .card {
flex-basis: 80%;
  }
}
</style>
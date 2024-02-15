<script>
import axios from 'axios'
export default {
  name: 'FilmCards',
  props: [
    'propsObject'
  ],
  data() {
    return {
      trailerUrl : '',
      imagePath: 'https://image.tmdb.org/t/p/w300',
      imgError: false,
      trailerShow : false,
      flagPath: '../src/assets/img/1x1/',
      flagPathError: '../src/assets/img/1x1/flag-error.svg',
      fullStarPath : '../src/assets/img/full_star.svg',
      emptyStarPath : '../src/assets/img/empty_star.svg',
      trailerApi : 'https://api.themoviedb.org/3/movie/videos?language=en-IT&api_key=aac6de8a780b39acd1a8491f2ceaec74'
    }
  },
  methods: {
    handleImgError() {
      this.imgError = true;
    },
    handleMouseOver() {
      const videoId = this.propsObject.id;
      this.trailerApi = `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-IT&api_key=aac6de8a780b39acd1a8491f2ceaec74`
      axios.get(this.trailerApi).then(response =>{
        console.log(response.data.results[0].key);
        this.trailerUrl = `https://www.youtube.com/embed/${response.data.results[0].key}`;
      })
      this.trailerShow = !this.trailerShow;
    }
  }
}


</script>
<template>
  <div class="movieTrailer"  v-if="trailerShow">
    <iframe
       :src="trailerUrl"
       frameborder="1"
       allowfullscreen
     ></iframe>
    <button  @click="this.trailerShow = !this.trailerShow;" class="closeTrailer"><i class="fa-solid fa-xmark"></i></button>

  </div>
  <div class="card"  :style="{ background: imgError ? 'black' : 'none' }">
    <img :src="imgError ? flagPathError : imagePath + propsObject.poster_path" alt="Film Poster" @error="handleImgError">
    <div class="movieInfo">
      <h2>{{ propsObject.title }}</h2>
      <h5>{{ 'Titolo orig : ' + " " + propsObject.original_title }}</h5>
      <div>
        <span> Lingua originale : </span>
        <img :src="imgError ? flagPathError : flagPath + propsObject.original_language + '.svg'" alt="" class="flag"
          @error="handleImgError">
      </div>
      <span>{{'Voto : ' +  Math.min(Math.ceil(propsObject.vote_average / 2), 5) }}
        <div class="starContainer">
          <figure v-for="(element,index) in 5">
            <img :src="index <= Math.min(Math.ceil(propsObject.vote_average / 2), 5) -1 ? fullStarPath : emptyStarPath " class="starItem" alt="">
          </figure>
        </div>
        <p>{{ 'Based on '+ propsObject.vote_count + ' reviews' }}</p>
      </span>
      <button  @click="handleMouseOver" class="trailer">Watch Trailer</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as *;


.card {
  height: 300px;
  width: 20%;
  margin-bottom: 10px;
  box-sizing: border-box;
  max-width: 250px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border : 1px solid white;

  &:hover{
    transform: scale(1.1);
  }

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

    &:hover {
      opacity: 1;
      border: 1px solid white;
      box-shadow: rgb(255, 255, 255) 0px 0px 20px, rgba(255, 255, 255, 0.801) 0px 0px 20px;
    }
  }
}


.movieTrailer{
  position: fixed;
  top: 100px;
  width: 1000px;
  height: 80vh;
  z-index: 99;
}

iframe{
  height: 100%;
  width: 100%;
  position: relative;
  box-shadow: rgba(255, 255, 255, 0.8) 0px 2px 4px, rgba(255, 255, 255, 0.8) 0px 7px 13px -3px, rgba(0, 0, 0, 0.6) 0px -3px 0px inset;
}
.hidden {
  display: none;
}

img.flag {
  width: 30px;
  height: 20px;
  object-fit: cover;
}

img.starItem {
  width: 15px;
  height: 15px;
}

.starContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.trailer{
  border: none;
  background-color: red;
  color: white;
  width: 80%;
  margin: 0 auto;
  padding: 5px 2px;
  transition: all .3s;
  &:hover{
    cursor: pointer;
    background-color: white;
    color: red;
    font-weight: bold;
  }
}

.closeTrailer{
  width: 50px;
  height: 50px;
  position: absolute;
  right: -50px;
  background-color: red;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  transition: all .3s;
  & .fa-xmark{
    font-size: 1.5rem;
  }
  &:hover{
    background-color: white;
    cursor: pointer;
    color: red;
  }
}

@media screen and (min-width: 576px) and (max-width: 992px) {
  .card {
    flex-basis: 50%;
  }
}

@media screen and (max-width: 575px) {
  .card {
    flex-basis: 80%;
  }
}
</style>
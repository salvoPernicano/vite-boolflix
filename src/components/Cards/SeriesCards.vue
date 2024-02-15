<script>
export default {
  name: 'SeriesCards',
  props: [
    'propsObject'
  ],
  data() {
    return {
      imagePath: 'https://image.tmdb.org/t/p/w300',
      imgError: false,
      flagPath: '../src/assets/img/1x1/',
      flagPathError: '../src/assets/img/1x1/flag-error.svg',
      fullStarPath : '../src/assets/img/full_star.svg',
      emptyStarPath : '../src/assets/img/empty_star.svg',
    }
  },
  methods: {
    handleImgError() {
      this.imgError = true;
    },
  }
}
</script>
<template>
  <div class="card"  :style="{ background: imgError ? 'black' : 'none' }">
    <img :src="imgError ? flagPathError : imagePath + propsObject.poster_path" alt="Film Poster" @error="handleImgError">
    <div class="movieInfo">
      <h2>{{ propsObject.name }}</h2>
      <h5>{{ 'Titolo orig : ' + " " + propsObject.original_name }}</h5>
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
        <button  @click="handleMouseOver" class="trailer">Watch Trailer</button>
      </span>
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
  border: 1px solid white;;
    
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
<script>
export default {
    name: 'FilmCards',
    data() {


        return {}
    }
}
</script>
<template>
    <div class="card">
        <img src="../../assets/img/jon-tyson-Wb6EVL-tRk8-unsplash.jpg" alt="">
        <div class="movieInfo">
            <h2>Titolo film</h2>
            <h3>Titolo film originale</h3>
            <h3>Lingua originale</h3>
            <span>VOTO</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as *;

.card {
    width: 20%; /* Calcola la larghezza con margine incluso per ottenere 5 elementi per riga */
      margin-bottom: 10px; /* Aggiungi margine inferiore per spaziatura tra le card */
      box-sizing: border-box; /* Assicurati che il margine non aumenti la larghezza totale */
      max-width: 250px; /* Imposta la larghezza massima della card */
      border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare le card */
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
        &:hover{
            opacity: 1;
        }
    }
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
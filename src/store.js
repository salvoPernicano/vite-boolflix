import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: false,
    apiUrlTrending : 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=aac6de8a780b39acd1a8491f2ceaec74',
    apiUrlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=aac6de8a780b39acd1a8491f2ceaec74&query=',
    apiUrlTv : 'https://api.themoviedb.org/3/search/tv?api_key=aac6de8a780b39acd1a8491f2ceaec74&query=',
    seriesArray : [],
    researchArray : []
})
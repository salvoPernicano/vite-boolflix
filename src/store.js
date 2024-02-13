import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: false,
    apiUrl : 'https://api.themoviedb.org/3/search/movie?api_key=aac6de8a780b39acd1a8491f2ceaec74&query=',
    researchArray : []
})
//Tmbdb API KEY
const API_KEY = "85f4cd06e9d8bc562c5c412a84e3b327";

const requests = {
  /*   ​fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, */
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_networks=213

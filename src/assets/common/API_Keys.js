const apiKey = "2273bc23deeeb4368ac61f39bf67c7ad";
console.log(apiKey);
export const uri = {
  netflixOriginal: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  trending: `/trending/all/weeek?api_key=${apiKey}&language=en-US`,
  // ---------------------------***---------------------------
  adeventure: `/discover/movie?api_key=${apiKey}&with_genres=12`,
  fantasy: `/discover/movie?api_key=${apiKey}&with_genres=14`,
  animation: `/discover/movie?api_key=${apiKey}&with_genres=16`,
  drama: `/discover/movie?api_key=${apiKey}&with_genres=18`,
  action: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  comedy: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  history: `/discover/movie?api_key=${apiKey}&with_genres=36`,
  horror: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  thriller: `/discover/movie?api_key=${apiKey}&with_genres=53`,
  scienceFiction: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  family: `/discover/movie?api_key=${apiKey}&with_genres=10751`,
  romance: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  documentry: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};



import axios, { Axios } from 'axios';

const trendingFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    page: 1,
    api_key: 'b3f8ab5a3b3d716ab8a62d65695cca6b',
  },
});

export const getTrendingFilms = async () => {
  const { data } = await trendingFilms.get('trending/movie/day');
  return data;
};
export const getSearch = async params => {
  const { data } = await trendingFilms.get(`search/movie`, { params });
  return data;
};
export const getFilmById = async id => {
  const { data } = await trendingFilms.get(`movie/${id}`);
  return data;
};
export const getCredits = async id => {
  const { data } = await trendingFilms.get(`movie/${id}/credits`);
  return data.cast;
};
export const getReviews = async id => {
  const { data } = await trendingFilms.get(`movie/${id}/reviews`);
  return data;
};

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = 'b3f8ab5a3b3d716ab8a62d65695cca6b';

// export const getTrendingFilms = async page => {
//   const { data } = await axios.get(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
//   );
//   //console.log(data.results);
//   return data;
// };

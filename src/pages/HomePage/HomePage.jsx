import React from 'react';
import { useState, useEffect } from 'react';

import { getTrendingFilms } from 'services/filmsAPI';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const response = await getTrendingFilms();
        setFilms(response.results);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchTrendingFilms();
  }, []);
  const backLinkHrefHome = location.state?.from ?? '/';
  return (
    <ul>
      {films.map(film => (
        <MovieList state={backLinkHrefHome} key={film.id} film={film} />
      ))}
    </ul>
  );
};

export default HomePage;

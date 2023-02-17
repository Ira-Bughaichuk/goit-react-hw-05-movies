import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearch } from 'services/filmsAPI';
import SearchIcon from '@mui/icons-material/Search';
import { StyledLi } from '../../components/MovieList/MovieList.styled';
import { StyledLink } from '../../components/MovieList/MovieList.styled';

import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './MoviePage.styled';

export const MoviesPage = () => {
  const location = useLocation();
  const [searchFilms, setSearchFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameParams = searchParams.get('name') ?? '';
  //щоб вивести по - name його значення - { value } в nameParams
  const [query, setQuery] = useState(nameParams);

  useEffect(() => {
    if (!nameParams) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await getSearch({ query: nameParams });
        setSearchFilms(data.results);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchMovies();
  }, [nameParams]);

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Ведіть назву');
      return;
    }
    setSearchParams(query !== '' ? { name: query } : {}); //змінюємо запис юрл строки
    setQuery('');
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          value={query}
          type="text"
          onChange={handleChange}
          placeholder="Search for your movie"
        />
        <SearchFormButton type="submit">
          <SearchIcon />
          <span> Search</span>
        </SearchFormButton>
      </SearchForm>

      {searchFilms.length > 0 && (
        <ul>
          {searchFilms.map(film => (
            <StyledLi key={film.id}>
              <StyledLink state={{ from: location }} to={`${film.id}`}>
                {film.title}
              </StyledLink>
            </StyledLi>
          ))}
        </ul>
      )}
    </>
  );
};

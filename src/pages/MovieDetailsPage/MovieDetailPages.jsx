import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getFilmById } from 'services/filmsAPI';
import { Outlet } from 'react-router-dom';

import {
  Cart,
  CartImg,
  CartContent,
  CartContentOverview,
  CartSpan,
  LinkButton,
  StyledliBtns,
} from './MovieDetailPages.styled';

export const MovieDetailPages = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchFilmById = async () => {
      try {
        const filmById = await getFilmById(movieId);
        setMovie(filmById);
      } catch (error) {
        alert(error.message);
      }
    };
    if (movieId) {
      fetchFilmById();
    }
  }, [movieId]);
  const backLinkHref = useRef(location.state?.from ?? '/');

  if (!movie) return null;
  const { title, genres, overview, poster_path } = movie;

  return (
    <>
      <LinkButton to={backLinkHref.current}> Go Back</LinkButton>
      <Cart>
        <CartImg
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <CartContent>
          <h2>{title}</h2>
          <CartContentOverview>Overview {overview}</CartContentOverview>
          <p>
            <CartSpan>Genre:</CartSpan>{' '}
            {genres.map(item => item.name).join(' ')}
          </p>
        </CartContent>
      </Cart>
      <div>
        <StyledliBtns>
          <LinkButton to="cast">Cast</LinkButton>
        </StyledliBtns>
        <StyledliBtns>
          <LinkButton to="review">Reviews</LinkButton>
        </StyledliBtns>
      </div>
      <Outlet />
    </>
  );
};

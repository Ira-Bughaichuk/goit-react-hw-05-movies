import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLi } from './MovieList.styled';
import { StyledLink } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ film }) => {
  const location = useLocation();
  return (
    <StyledLi key={film.id}>
      <StyledLink state={{ from: location }} to={`/movies/${film.id}`}>
        {film.title}
      </StyledLink>
    </StyledLi>
  );
};

MovieList.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

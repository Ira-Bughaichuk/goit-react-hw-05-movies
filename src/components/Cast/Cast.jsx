import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'services/filmsAPI';

import { CastLi, CastUl, CastName, CastImg } from './Cast.styled';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const actor = await getCredits(movieId);
        setCast(actor.splice(0, 5));
      } catch (error) {
        alert(error.message);
      }
    };
    fetchCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <CastUl>
      {cast.map(({ cast_id, name, profile_path }) => (
        <CastLi key={cast_id}>
          <CastImg
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
            width="100"
          />
          <CastName>{name}</CastName>
        </CastLi>
      ))}
    </CastUl>
  );
};

import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/filmsAPI';

import { ReviewLi, ReviewSpan } from './Reviews.styles';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const dataReview = await getReviews(movieId);
        setReviews(dataReview.results.splice(0, 2));
      } catch (error) {
        alert(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews?.length === 0 ? (
    <p>We don't have any reviews for this movies</p>
  ) : (
    <ul>
      {reviews.map(({ author, content }) => (
        <ReviewLi key={author}>
          <p>
            <ReviewSpan>Author:</ReviewSpan> {author}
          </p>
          <p>{content}</p>
        </ReviewLi>
      ))}
    </ul>
  );
};

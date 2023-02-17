import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLoyaut } from 'components/SharedLoyaut/SharedLoyaut';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailPages from 'pages/MovieDetailsPage/MovieDetailPages';
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailPages = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailPages')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyaut />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPages />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

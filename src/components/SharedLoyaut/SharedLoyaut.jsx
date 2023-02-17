import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  StyledNavLink,
  LayoutLi,
  StyledHeader,
  Styledul,
} from './SharedLoyaut.styled';

export const SharedLoyaut = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <Styledul>
            <LayoutLi>
              <StyledNavLink to="/">Home</StyledNavLink>
            </LayoutLi>
            <LayoutLi>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </LayoutLi>
          </Styledul>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <main className="container">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

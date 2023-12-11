import { Suspense } from 'react';
import { Container, Header, Logo, Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src="../../image/Rental_car_logo.jpg" alt="foto logo" />
          Car Rent
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

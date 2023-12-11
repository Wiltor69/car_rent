import { Suspense } from 'react';
import { Container, Header, Link, Image } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Logo from '../../image/Rental_car_logo.jpg';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Image src={Logo} alt="foto logo" />
        <h1>Car Rent</h1>
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

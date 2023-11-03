import AdvertListFav from '@/components/AdvertListFav/AdvertListFav';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Container } from '@mantine/core';

const FavoritesPage = () => {
  return (
    <Container pt={100}>
      <SearchBar />
      <AdvertListFav />
    </Container>
  );
};
export default FavoritesPage;

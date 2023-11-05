import AdvertList from '@/components/AdvertList/AdvertList';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Container } from '@mantine/core';

const CatalogPage = () => {
  return (
    <Container pt={100}>
      <SearchBar />
      <AdvertList />
    </Container>
  );
};
export default CatalogPage;

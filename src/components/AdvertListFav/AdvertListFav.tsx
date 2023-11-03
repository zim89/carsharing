import { Box, SimpleGrid } from '@mantine/core';

import AdvertCard from '../AdvertCard/AdvertCard';
import { useAppSelector } from '@/app/redux/store';
import { selectFilteredFavorites } from '@/app/redux/favorites/favoritesSelectors';

const AdvertList = () => {
  const favorites = useAppSelector(selectFilteredFavorites);

  return (
    <Box pb={100}>
      {favorites.length > 0 && (
        <SimpleGrid cols={4} mb={100}>
          {favorites.map((advert) => (
            <AdvertCard key={advert.id} advert={advert} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
export default AdvertList;

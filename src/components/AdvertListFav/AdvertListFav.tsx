import {
  Box,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconHeart } from '@tabler/icons-react';

import AdvertCard from '../AdvertCard/AdvertCard';

import { useAppSelector } from '@/app/redux/store';
import { selectFavorites } from '@/app/redux/favorites/favoritesSlice';
import { Advert } from '@/app/redux/adverts/advertsSlice';
import { selectFilter } from '@/app/redux/filter/filterSlice';
import filterData from '@/helpers/filterData';

import { useNavigate } from 'react-router-dom';

const AdvertList = () => {
  const favorites = useAppSelector(selectFavorites);
  const [filteredData, setFilteredData] = useState<Advert[]>([]);
  const filter = useAppSelector(selectFilter);
  const navigate = useNavigate();

  useEffect(() => {
    if (filter) {
      setFilteredData(filterData(filter, favorites));
    }
  }, [filter, favorites]);

  return (
    <>
      <Box pb={100}>
        {filteredData.length > 0 && filter && (
          <SimpleGrid cols={4} mb={100}>
            {filteredData.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}
        {favorites.length > 0 && !filter && (
          <SimpleGrid cols={4} mb={100}>
            {favorites.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}

        {favorites.length === 0 && (
          <Stack align="center" gap={24}>
            <Title>
              <span>Favorite</span> is empty
            </Title>
            <Group align="center" gap={4}>
              <Text size="lg">Press</Text>
              <IconHeart color="var(--mantine-color-blue-4)" />
              <Text size="lg">to add an item to favorites</Text>
            </Group>
            <Button size="md" onClick={() => navigate('/catalog')}>
              Go to catalog
            </Button>
          </Stack>
        )}
      </Box>
    </>
  );
};
export default AdvertList;

import { Box, Button, Center, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';

import AdvertCard from '../AdvertCard/AdvertCard';
import getQueryString from '@/helpers/getQueryString';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { fetch } from '@/app/redux/adverts/advertsOperations';
import { selectFilteredAdverts } from '@/app/redux/adverts/advertsSelectors';

const AdvertList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(12);

  const dispatch = useAppDispatch();
  const adverts = useAppSelector(selectFilteredAdverts);

  useEffect(() => {
    try {
      void dispatch(fetch(getQueryString(page, limit)));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, limit, page]);

  const handleLoadMore = () => {
    if (adverts.length > 0 && adverts.length % limit !== 0) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <Box pb={100}>
      {adverts.length > 0 && (
        <SimpleGrid cols={4} mb={100}>
          {adverts.map((advert) => (
            <AdvertCard key={advert.id} advert={advert} />
          ))}
        </SimpleGrid>
      )}
      <Center>
        <Button variant="transparent" size="md" onClick={handleLoadMore}>
          Load more
        </Button>
      </Center>
    </Box>
  );
};
export default AdvertList;

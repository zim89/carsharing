/* eslint-disable @typescript-eslint/no-floating-promises */
import { Box, Button, Center, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';

import AdvertCard from '../AdvertCard/AdvertCard';
import getQueryString from '@/helpers/getQueryString';
import { Advert } from '@/app/redux/adverts/advertsSlice';

import { fetchAdverts } from '@/shared/api/fetchAdverts';
import { useAppSelector } from '@/app/redux/store';
import { selectFilter } from '@/app/redux/filter/filterSlice';
import filterData from '@/helpers/filterData';

const AdvertList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(12);

  const [data, setData] = useState<Advert[]>([]);
  const [filteredData, setFilteredData] = useState<Advert[]>([]);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const filter = useAppSelector(selectFilter);

  useEffect(() => {
    (async () => {
      try {
        const res: Advert[] =
          (await fetchAdverts(getQueryString(page, limit))) ?? [];
        setData((prev) => [...prev, ...res]);
        setIsLoadMore(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [limit, page]);

  useEffect(() => {
    if (filter) {
      setFilteredData(filterData(filter, data));
    }
  }, [filter, data]);

  const handleLoadMore = () => {
    if (data.length > 0 && data.length % limit !== 0) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Box pb={100} pos={'relative'}>
        {!filter && (
          <>
            <SimpleGrid cols={4} mb={100}>
              {data.map((advert) => (
                <AdvertCard key={advert.id} advert={advert} />
              ))}
            </SimpleGrid>

            {isLoadMore && (
              <Center>
                <Button
                  variant="transparent"
                  size="md"
                  onClick={handleLoadMore}
                >
                  Load more
                </Button>
              </Center>
            )}
          </>
        )}

        {filter && filteredData.length > 0 && (
          <SimpleGrid cols={4} mb={100}>
            {filteredData.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};
export default AdvertList;

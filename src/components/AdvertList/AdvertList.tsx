/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  OptionsFilter,
  ComboboxItem,
  Group,
  Flex,
  NumberInput,
  Stack,
  Select,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLayoutEffect, useState } from 'react';
import clsx from 'clsx';

import AdvertCard from '../AdvertCard/AdvertCard';
import getQueryString from '@/helpers/getQueryString';
import { Advert } from '@/app/redux/adverts/advertsSlice';

import makesData from '@/shared/data/makes.json';
import priceData from '@/shared/data/pricePerHour.json';
import { Filter } from '@/app/redux/filter/filterSlice';
import filterData from '@/helpers/filterData';
import { fetchAdverts } from '@/shared/api/fetchAdverts';
import css from './AdvertList.module.css';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

const AdvertList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(12);
  const [data, setData] = useState<Advert[]>([]);
  const [filteredData, setFilteredData] = useState<Advert[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      try {
        const res: Advert[] =
          (await fetchAdverts(getQueryString(page, limit))) ?? [];
        setData((prev) => [...prev, ...res]);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page]);

  const form = useForm({
    initialValues: {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
    },
  });

  const onSubmit = () => {
    const filter = { ...form.values };

    for (const key in filter) {
      if (!filter[key as keyof Filter]) {
        delete filter[key as keyof Filter];
      }
    }

    const newData = filterData(filter, data);
    setIsFilter(true);
    setFilteredData([...newData]);
    setIsLoadMore(false);
  };

  const handleLoadMore = () => {
    if (data.length > 0 && data.length % limit !== 0) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <form>
        <Group justify="center" align="flex-end" mb={50}>
          <Stack align="flex-start" gap={4} w={150}>
            <Text className={css.label}>Car brand</Text>
            <Select
              {...form.getInputProps('make')}
              variant="filled"
              radius="md"
              placeholder="Enter brand..."
              data={makesData}
              searchable
              nothingFoundMessage="Nothing found..."
              checkIconPosition="right"
              filter={optionsFilter}
              clearable
              allowDeselect
              classNames={{
                input: css.input,
              }}
            />
          </Stack>

          <Stack align="flex-start" gap={4} w={90}>
            <Text className={css.label}>Price / 1 hour</Text>
            <Select
              radius="md"
              {...form.getInputProps('rentalPrice')}
              variant="filled"
              placeholder="To $"
              data={priceData}
              checkIconPosition="right"
              clearable
              allowDeselect
              classNames={{
                input: css.input,
              }}
            />
          </Stack>

          <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
            gap={4}
            w={160}
          >
            <Text className={css.label}>Сar mileage / km</Text>
            <SimpleGrid cols={2} spacing={0}>
              <NumberInput
                {...form.getInputProps('mileageFrom')}
                radius={0}
                variant="filled"
                placeholder="From"
                allowNegative={false}
                allowDecimal={false}
                thousandSeparator=","
                hideControls
                classNames={{
                  label: css.label,
                  input: clsx(css.input, css.inputFrom),
                }}
              />
              <NumberInput
                {...form.getInputProps('mileageTo')}
                variant="filled"
                radius={0}
                placeholder="To"
                allowNegative={false}
                allowDecimal={false}
                thousandSeparator=","
                hideControls
                classNames={{
                  label: css.label,
                  input: clsx(css.input, css.inputTo),
                }}
              />
            </SimpleGrid>
          </Flex>

          <Button variant="filled" radius="md" onClick={onSubmit}>
            Search
          </Button>
        </Group>
      </form>
      <Box pb={100} pos={'relative'}>
        {!isFilter && (
          <SimpleGrid cols={4} mb={100}>
            {data.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}

        {isFilter && (
          <SimpleGrid cols={4} mb={100}>
            {filteredData.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}

        {isLoadMore && (
          <Center>
            <Button variant="transparent" size="md" onClick={handleLoadMore}>
              Load more
            </Button>
          </Center>
        )}
      </Box>
    </>
  );
};
export default AdvertList;

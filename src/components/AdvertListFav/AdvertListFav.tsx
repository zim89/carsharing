import {
  Box,
  Button,
  ComboboxItem,
  Flex,
  Group,
  NumberInput,
  OptionsFilter,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import AdvertCard from '../AdvertCard/AdvertCard';

import { useAppSelector } from '@/app/redux/store';
import { selectFavorites } from '@/app/redux/favorites/favoritesSlice';
import { Advert } from '@/app/redux/adverts/advertsSlice';
import { Filter } from '@/app/redux/filter/filterSlice';
import filterData from '@/helpers/filterData';
import clsx from 'clsx';

import makesData from '@/shared/data/makes.json';
import priceData from '@/shared/data/pricePerHour.json';

import css from './AdvertListFav.module.css';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

const AdvertList = () => {
  const favorites = useAppSelector(selectFavorites);
  const [filteredData, setFilteredData] = useState<Advert[]>([]);
  const [isFilter, setIsFilter] = useState(false);

  const onSubmit = () => {
    const filter = { ...form.values };

    for (const key in filter) {
      if (!filter[key as keyof Filter]) {
        delete filter[key as keyof Filter];
      }
    }

    const newData = filterData(filter, favorites);
    console.log(filter);
    console.log(newData);
    setIsFilter(true);
    setFilteredData([...newData]);
  };

  const form = useForm({
    initialValues: {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
    },
  });

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
      <Box pb={100}>
        {filteredData.length > 0 && isFilter && (
          <SimpleGrid cols={4} mb={100}>
            {filteredData.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}

        {favorites.length > 0 && !isFilter && (
          <SimpleGrid cols={4} mb={100}>
            {favorites.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};
export default AdvertList;

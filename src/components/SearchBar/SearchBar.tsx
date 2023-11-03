import {
  Group,
  Select,
  ComboboxItem,
  OptionsFilter,
  NumberInput,
  Text,
  Button,
  Stack,
  Flex,
  SimpleGrid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import clsx from 'clsx';

import makesData from '@/shared/data/makes.json';
import priceData from '@/shared/data/pricePerHour.json';

import css from './SearchBar.module.css';
import { useAppDispatch } from '@/app/redux/store';
import { Filter, setFilter } from '@/app/redux/filter/filterSlice';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
    },
  });

  const onSubmit = () => {
    const data = { ...form.values };

    for (const key in data) {
      if (!data[key as keyof Filter]) {
        delete data[key as keyof Filter];
      }
    }

    dispatch(setFilter(data));
  };

  return (
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
  );
};
export default SearchBar;

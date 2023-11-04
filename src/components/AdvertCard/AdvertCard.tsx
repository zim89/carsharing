import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  ActionIcon,
  Divider,
  Modal,
  AspectRatio,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FC } from 'react';

import { IconHeartFilled, IconHeart } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { Advert } from '@/app/redux/adverts/advertsSlice';

import css from './AdvertCard.module.css';

interface Props {
  advert: Advert;
}

import fallbackSrc from '@/assets/images/default-car.jpg';
import {
  addToFav,
  removeFromFav,
  selectFavorites,
} from '@/app/redux/favorites/favoritesSlice';

const AdvertCard: FC<Props> = ({ advert }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.some(({ id }) => id === advert.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFav(advert.id));
      return;
    }
    dispatch(addToFav(advert));
  };

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        classNames={{
          root: css.cardRoot,
        }}
      >
        <Card.Section pos={'relative'}>
          <AspectRatio w={418} h={280}>
            <Image
              src={advert.img}
              alt={advert.make}
              fallbackSrc={fallbackSrc}
            />
          </AspectRatio>
        </Card.Section>

        <ActionIcon
          variant="transparent"
          size={24}
          radius="xs"
          aria-label="Favorite"
          color={isFavorite ? 'blue.7' : 'white'}
          pos={'absolute'}
          top={14}
          right={14}
          onClick={toggleFavorite}
        >
          {isFavorite ? <IconHeartFilled /> : <IconHeart stroke={1.5} />}
        </ActionIcon>

        <Group justify="space-between" mt="md" mb="xs">
          <Text size="sm" fw={500}>
            {advert.make}{' '}
            <Text span c="blue.7">
              {advert.model}
            </Text>
            , {advert.year}
          </Text>
          <Badge color="pink" variant="light">
            {advert.rentalPrice}
          </Badge>
        </Group>

        <Group gap={4}>
          <Text size="xs" c="dimmed" span>
            {advert.address?.split(', ')[1]}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" span>
            {advert.address?.split(', ')[2]}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" span>
            {advert.rentalCompany}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" span>
            {advert.mileage}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" span truncate="end">
            {advert.accessories[0]}
          </Text>
        </Group>

        <Button variant="filled" radius="md" fullWidth mt={'md'} onClick={open}>
          Learn more
        </Button>
      </Card>

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={close}
        size={540}
        classNames={{ content: css.modalContent }}
      >
        <Image
          src={advert.img}
          alt={advert.make}
          radius="md"
          mb={14}
          fallbackSrc={fallbackSrc}
          h={'auto'}
          w={488}
        />

        <Title order={2} size="h4" mb={8} lh={1.3}>
          {advert.make} <span className={css.model}>{advert.model}</span>,{' '}
          {advert.year}
        </Title>

        <Group gap={4} mb={8}>
          <Text size="xs" c="dimmed" lh={1.3} span>
            {advert.address?.split(', ')[1]}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            {advert.address?.split(', ')[2]}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            Id: {advert.id}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            Year: {advert.year}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            Type: {advert.type}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            Fuel Consumption: {advert.fuelConsumption}
          </Text>
          <Divider orientation="vertical" />
          <Text size="xs" c="dimmed" lh={1.3} span>
            Engine Size: {advert.engineSize}
          </Text>
        </Group>

        {/* Description */}
        <Text size="sm" lh={1.3} mb={24}>
          {advert.description}
        </Text>

        {/* Accessories and functionalities */}
        <Text size="sm" lh={1.3} fw={500} mb={8}>
          Accessories and functionalities:
        </Text>
        <Group gap={4} mb={24}>
          {[...advert.accessories, ...advert.functionalities].map((item) => (
            <Text
              key={item}
              size="xs"
              c="dimmed"
              lh={1.3}
              span
              className={css.tag}
            >
              {item}
            </Text>
          ))}
        </Group>

        {/* Rental Conditions */}
        <Text size="sm" lh={1.3} fw={500} mb={8}>
          Rental Conditions:
        </Text>
        <Group gap={8} mb={24}>
          <Text size="xs" lh={1.3} span className={css.badge}>
            {advert.rentalConditions[0].split(': ')[0]}:{' '}
            <Text c={'blue.7'} fw={600} span>
              {advert.rentalConditions[0].split(': ')[1]}
            </Text>
          </Text>
          {advert.rentalConditions
            .filter((item) => !item.includes('age'))
            .map((item) => (
              <Text key={item} size="xs" lh={1.3} span className={css.badge}>
                {item}
              </Text>
            ))}
          <Text size="xs" lh={1.3} span className={css.badge}>
            Mileage:{' '}
            <Text c={'blue.7'} fw={600} span>
              {advert.mileage}
            </Text>
          </Text>
          <Text size="xs" lh={1.3} span className={css.badge}>
            Price:{' '}
            <Text c={'blue.7'} fw={600} span>
              {advert.rentalPrice.slice(1)}$
            </Text>
          </Text>
        </Group>

        <Button
          component="a"
          href="tel:+380676208888"
          variant="filled"
          radius="md"
          px={50}
        >
          Rental car
        </Button>
      </Modal>
    </>
  );
};
export default AdvertCard;

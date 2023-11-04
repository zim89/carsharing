import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Box,
} from '@mantine/core';
import { IconGasStation, IconCar, IconParking } from '@tabler/icons-react';
import classes from './Features.module.css';

const mockdata = [
  {
    title: "You don't pay for parking, fuel, or insurance",
    description:
      "Our rates are all-inclusive and are as flexible as pay-per-minute. No monthly fees, no commitments. Before each drive, simply choose the rate you want in the app and pay only for what you use. Insurance? We've got you covered.",
    icon: IconGasStation,
  },
  {
    title: 'You can drive whenever, wherever you feel like',
    description:
      "Our cars are available 24/7. If you see an available SHARE NOW car, you can simply hop in and drive. If you pre-book a car in advance, we'll even deliver it to you for free!",
    icon: IconCar,
  },
  {
    title: 'You can find and park our cars anywhere within the city',
    description:
      "Free-floating car-sharing means our cars are everywhere! Pick a car near you and start your trip with just the app. When you're done, simply park the car back onto a different street. Easy as that.",
    icon: IconParking,
  },
];

const Features = () => {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={1.5}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Box component="section" bg="gray.1" py={40}>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Why use SHARE NOW?
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          It&apos;s the best way to drive. With car-sharing, you don&apos;t have
          to buy or lease a car. Our cars are available around every street
          corner. Whether you need to rent a car for 2 minutes or 2 weeks, you
          can get going with just one app. Find us in 16 major cities in 8
          countries in Europe – for all your plans, big and small. What else?
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;

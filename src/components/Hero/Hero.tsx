import { Title, Text, Button, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Dots } from './Dots';
import classes from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          A new era of{' '}
          <Text component="span" className={classes.highlight} inherit>
            carsharing.
          </Text>{' '}
        </Title>
        <Title order={3} size="h2" ta={'center'}>
          Explore the world&apos;s largest car sharing marketplace.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Rent our vehicles for a few minutes, hours, or days.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() => navigate('/catalog')}
          >
            Catalog
          </Button>
          <Button
            className={classes.control}
            size="lg"
            onClick={() => navigate('/favorites')}
          >
            Favorites
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

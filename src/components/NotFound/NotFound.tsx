import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from '@mantine/core';

import image from '@/assets/images/not-found.svg';
import css from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className={css.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={css.mobileImage} />
        <div>
          <Title className={css.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={css.control}
            onClick={() => navigate('/')}
          >
            Get back to home page
          </Button>
        </div>
        <Image src={image} className={css.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export default NotFound;

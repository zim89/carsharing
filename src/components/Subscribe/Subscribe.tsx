import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
} from '@mantine/core';
import image from '@/assets/images/subscribe.svg';

import classes from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text fw={500} fz="lg" mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text fz="sm" c="dimmed">
            You will never miss important latest news and community QA sessions.
            Our newsletter is once a week, every Sunday.
          </Text>

          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
            />
            <Button className={classes.control}>Subscribe</Button>
          </div>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
};

export default Subscribe;

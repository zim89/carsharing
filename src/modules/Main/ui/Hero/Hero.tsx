import { Box, Title, Flex, Button, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

import GooseTrackLogo from '@/assets/icons/logo.svg?react';
import css from './Hero.module.css';
import clsx from 'clsx';

const Hero = () => {
  return (
    <Box className={css.wrap} bg={'blue.4'}>
      <GooseTrackLogo className={css.logo} />
      <Title className={css.title}>
        G<span>oo</span>seTrack
      </Title>
      <Flex
        gap="xs"
        justify="center"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        mt={{ base: 32, md: 40 }}
      >
        <Button
          component={Link}
          to="/login"
          size="md"
          rightSection={<LogOut size={18} />}
          variant="outline"
          color="white"
          className={css.loginBtn}
        >
          Login
        </Button>
        <Anchor
          component={Link}
          to="/register"
          underline="always"
          c="white"
          className={css.registerBtn}
        >
          Register
        </Anchor>
      </Flex>
    </Box>
  );
};
export default Hero;

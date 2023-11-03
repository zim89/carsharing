import { Container, Flex, Group, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import logo from '@/assets/icons/logo.png';
import css from './Header.module.css';

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={css.header}>
      <Container>
        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
          py={4}
        >
          <Image h={50} w="auto" src={logo} />
          <Group gap={5} visibleFrom="xs" className={css.nav}>
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(css.link, isActive && css.active)
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

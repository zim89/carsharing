/* eslint-disable @typescript-eslint/no-floating-promises */
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import Header from '@/modules/Header';
import SideBar from '@/modules/SideBar';

import { useAppSelector, useAppDispatch } from '@/app/store';
import {
  selectIsAuth,
  selectIsLoading,
} from '@/modules/Auth/redux/authSelectors';
import { logout, refresh } from '@/modules/Auth/redux/authOperations';

import css from './styles.module.css';

const Layout = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [opened, { close, open }] = useDisclosure();

  const token = localStorage.getItem('refreshToken');
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    (async () => {
      try {
        if (!isLoading && token) await dispatch(refresh()).unwrap();
      } catch (error) {
        if (error === 'Token invalid') dispatch(logout());
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const refreshToken = searchParams.get('token');
    if (!refreshToken) {
      return;
    } else {
      localStorage.setItem('refreshToken', refreshToken);
      dispatch(refresh());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) return <Outlet />;

  if (isAuth)
    return (
      <AppShell
        layout="alt"
        withBorder={false}
        header={{
          height: { base: 56, md: 68, xl: 84 },
        }}
        navbar={{
          width: { base: 225, md: 289 },
          breakpoint: 'xl',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header className={css.header}>
          <Header onOpen={open} />
        </AppShell.Header>

        <AppShell.Navbar bg="transparent" onClick={close}>
          <SideBar onClose={close} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    );
};

export default Layout;

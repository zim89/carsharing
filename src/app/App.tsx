import { lazy, Suspense, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { Route, Routes, useLocation } from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const Layout = lazy(() => import('@/components/Layout/Layout'));
import ScreenLoader from '@/components/ScreenLoader/ScreenLoader';

import theme from './theme';
import '@mantine/core/styles.css';
import { clearFilter } from './redux/filter/filterSlice';
import { useAppDispatch } from './redux/store';

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearFilter());
  }, [dispatch, location]);

  return (
    <MantineProvider theme={theme}>
      <Suspense fallback={<ScreenLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MantineProvider>
  );
};

export default App;

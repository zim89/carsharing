import { lazy, Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
// const Login = lazy(() => import('@/pages/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/AuthPage'));

const CalendarPage = lazy(() => import('@/pages/CalendarPage'));
const StatisticPage = lazy(() => import('@/pages/StatisticPage'));
const AccountPage = lazy(() => import('@/pages/AccountPage'));

const Layout = lazy(() => import('@/modules/Layout'));
const ChosenDay = lazy(() => import('@/modules/ChoosenDay'));
const ChosenMonth = lazy(() => import('@/modules/ChosenMonth'));
const Calendar = lazy(() => import('@/modules/Calendar'));

import ScreenLoader from '@/shared/ui/ScreenLoader/ScreenLoader';
import PrivateRoute from '@/shared/ui/PrivateRoute/PrivateRoute';
import RestrictedRoute from '@/shared/ui/RestrictedRoute/RestrictedRoute';
// import LangSelect from './LangSelect';

import theme from './theme';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import '@mantine/carousel/styles.css';
// import '@mantine/notifications/styles.css';

const App = () => {
  return (
    <MantineProvider theme={theme}>
      {/* <Suspense>
        <LangSelect />
      </Suspense> */}

      <Suspense fallback={<ScreenLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              element={
                <RestrictedRoute to="/calendar">
                  <Outlet />
                </RestrictedRoute>
              }
            >
              <Route index element={<MainPage />} />
              <Route path="auth" element={<AuthPage />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="google" element={<ScreenLoader />} />
            </Route>

            <Route
              element={
                <PrivateRoute to="/">
                  <Outlet />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="/calendar" />} />
              <Route path="calendar" element={<CalendarPage />}>
                <Route index element={<Calendar />} />
                <Route path="day/:currentDay" element={<ChosenDay />} />
                <Route path="month/:currentMonth" element={<ChosenMonth />} />
              </Route>
              <Route path="statistic" element={<StatisticPage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MantineProvider>
  );
};

export default App;

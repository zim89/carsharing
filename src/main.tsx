import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './app/redux/store.ts';

import App from './app/App.tsx';
import ScreenLoader from './components/ScreenLoader/ScreenLoader.tsx';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<ScreenLoader />} persistor={persistor}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* <BrowserRouter basename="/carsharing"> */}
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);

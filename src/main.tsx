import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './app/store.ts';

import App from './app/App.tsx';
import ScreenLoader from './shared/ui/ScreenLoader/ScreenLoader.tsx';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<ScreenLoader />} persistor={persistor}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './adverts/advertsSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filter/filterSlice';

const persistFavoritesConfig = {
  key: 'favoritesAdvert',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistFavoritesConfig,
  favoritesReducer,
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    adverts: advertsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

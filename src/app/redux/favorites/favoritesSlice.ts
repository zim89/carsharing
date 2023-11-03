import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Advert } from '../adverts/advertsSlice';

export interface FavoritesState {
  favorites: Advert[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<Advert>) => {
      state.favorites.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      const update = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
      state.favorites = update;
    },
  },
});

export const { addToFav, removeFromFav } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const favoritesReducer = favoritesSlice.reducer;

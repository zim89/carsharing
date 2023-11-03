import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetch } from './advertsOperations';

export interface Advert {
  id: number;
  createdAt: string;
  year: number;
  make: string;
  model: string;
  type: string;
  img?: string;
  description?: string;
  fuelConsumption?: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface AdvertState {
  adverts: Advert[];
  error: unknown;
  isLoading: boolean;
}

const initialState: AdvertState = {
  adverts: [],
  error: null,
  isLoading: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetch.fulfilled, (state, action: PayloadAction<Advert[]>) => {
        state.isLoading = false;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;

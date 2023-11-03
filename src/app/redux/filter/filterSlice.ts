import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface Filter {
  make?: string;
  rentalPrice?: string;
  mileageFrom?: string;
  mileageTo?: string;
}
export interface FilterState {
  filter: Filter | null;
}

const initialState: FilterState = {
  filter: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = null;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export const filterReducer = filterSlice.reducer;

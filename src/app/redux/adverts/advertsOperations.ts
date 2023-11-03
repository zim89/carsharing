import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { Advert } from './advertsSlice';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://6541fa31f0b8287df1ff3949.mockapi.io',
});

export interface FetchAdvertsError {
  message: string;
}

export const fetch = createAsyncThunk(
  'adverts/fetch',
  async (query: string, thunkAPI) => {
    try {
      const { data }: AxiosResponse<Advert[]> = await instance.get(
        `/adverts?${query}`,
      );
      return data;
    } catch (error) {
      const err = error as AxiosError<FetchAdvertsError>;
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

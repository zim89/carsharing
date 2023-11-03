import { Advert } from '@/app/redux/adverts/advertsSlice';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://6541fa31f0b8287df1ff3949.mockapi.io',
});

export interface FetchAdvertsError {
  message: string;
}

export const fetchAdverts = async (query: string) => {
  try {
    const { data }: AxiosResponse<Advert[]> = await instance.get(
      `/adverts?${query}`,
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<FetchAdvertsError>;
    console.log(err.message);
  }
};

import { selectFilter } from '../filter/filterSlice';
import { RootState } from '../store';
import { Advert } from './advertsSlice';

export const selectIsLoading = (state: RootState) => state.adverts.isLoading;
export const selectError = (state: RootState) => state.adverts.error;
export const selectAdverts = (state: RootState) => state.adverts.adverts;

export const selectFilteredAdverts = (state: RootState) => {
  const { filter } = selectFilter(state);
  const adverts = state.adverts.adverts;

  let res = [...adverts];

  if (!filter) {
    return state.adverts.adverts;
  }

  Object.entries(filter).forEach(([key, value]) => {
    if (key === 'make' || key == 'rentalPrice') {
      res = res.filter(
        (item) =>
          String(item[key as keyof Advert]).toLowerCase() ===
          String(value).toLowerCase(),
      );
    }

    if (key === 'mileageTo') {
      res = res.filter((item) => item.mileage < Number(value));
    }

    if (key === 'mileageFrom') {
      res = res.filter((item) => item.mileage > Number(value));
    }
  });
  return res;
};

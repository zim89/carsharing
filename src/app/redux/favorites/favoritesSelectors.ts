import { RootState } from '../store';
import { selectFilter } from '../filter/filterSlice';
import { Advert } from '../adverts/advertsSlice';

export const selectFavorite = (state: RootState) => state.favorites;

export const selectFilteredFavorites = (state: RootState) => {
  const { filter } = selectFilter(state);
  const favorites = state.favorites.favorites;

  let res = [...favorites];

  if (!filter) {
    return state.favorites.favorites;
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

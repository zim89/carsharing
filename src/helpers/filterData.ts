import { Advert } from '@/app/redux/adverts/advertsSlice';
import { Filter } from '@/app/redux/filter/filterSlice';

const filterData = (filter: Filter, data: Advert[]) => {
  let res = [...data];

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

export default filterData;

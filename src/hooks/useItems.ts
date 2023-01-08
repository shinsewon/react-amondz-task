import { userStorage as UserStorage } from 'lib';

const storage = new UserStorage();

export const getProductItems = () => storage.getProductData();
export const setProductItems = (item: ProductItem[]) =>
  storage.setProductData(item);

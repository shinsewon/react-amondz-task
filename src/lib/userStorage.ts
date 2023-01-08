import Storage from 'lib/Storage';

enum UserStorageKey {
  PRODUCT_ITEM = 'productItem',
}

class UserStorage extends Storage<UserStorageKey> {
  constructor() {
    super();
  }

  getProductData(): ProductItem[] | null {
    const data = this.get(UserStorageKey.PRODUCT_ITEM);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  setProductData(item: ProductItem[]) {
    this.set(UserStorageKey.PRODUCT_ITEM, JSON.stringify(item));
  }

  clear() {
    this.clearItems([UserStorageKey.PRODUCT_ITEM]);
  }
}

export default UserStorage;

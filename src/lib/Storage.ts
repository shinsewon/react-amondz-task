type LocalStorage = typeof window.localStorage;

const PREFIX_LOCALSTORAGE = 'amondz';

export default abstract class Storage<T extends string> {
  private readonly storage: LocalStorage;

  protected constructor(getStorage = (): LocalStorage => window.localStorage) {
    this.storage = getStorage();
  }

  private getOriginKey(key: T) {
    return `${PREFIX_LOCALSTORAGE}/${key}`;
  }

  protected get(key: T): string | null {
    return this.storage.getItem(this.getOriginKey(key));
  }

  protected set(key: T, value: string): void {
    this.storage.setItem(this.getOriginKey(key), value);
  }

  protected clearItem(key: T): void {
    this.storage.removeItem(this.getOriginKey(key));
  }

  protected clearItems(keys: T[]): void {
    keys.forEach((key) => this.clearItem(this.getOriginKey(key) as T));
  }
}

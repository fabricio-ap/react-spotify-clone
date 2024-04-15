enum ILocalStorage {
  access_token = 'access_token',
}

export function setLocalStorage(key: keyof typeof ILocalStorage, value: string) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: keyof typeof ILocalStorage) {
  return localStorage.getItem(key)?.replace(/["]/g, '');
}

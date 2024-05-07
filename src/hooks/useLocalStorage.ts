import { ILocalStorage } from '@/types/ILocalStorage';

export function useLocalStorage() {
  return {
    get: (key: keyof typeof ILocalStorage) => localStorage.getItem(key),
    set: (key: keyof typeof ILocalStorage, value: string) =>
      localStorage.setItem(key, JSON.stringify(value)),
  };
}

import { ACCESS_TOKEN, EXPIRE_TOKEN, USER } from 'constants/key';
import { IUser } from 'redux/common/types';

class LocalStorageService {
  private static instance: LocalStorageService;

  public static getInstance(): LocalStorageService {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  setUser = (user: IUser): void => {
    const userStringified = JSON.stringify(user);
    localStorage.setItem(USER, userStringified);
  };

  getUser = (): IUser | null => {
    const item = localStorage.getItem(USER);
    if (!item) return null;

    return JSON.parse(item) as IUser;
  };

  clearUser = (): void => {
    localStorage.removeItem(USER);
  };

  setToken = (accessToken: string, expireToken: string): void => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(EXPIRE_TOKEN, expireToken);
  };

  getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN);
  };

  getExpireToken = (): string | null => {
    return localStorage.getItem(EXPIRE_TOKEN);
  };

  clearToken = (): void => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(EXPIRE_TOKEN);
  };

  clearStorage = (): void => {
    localStorage.clear();
  };
}

export default LocalStorageService;

import { ACCESS_TOKEN, EXPIRE_TOKEN } from 'constants/key';

class LocalStorageService {
  private static instance: LocalStorageService;

  public static getInstance(): LocalStorageService {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

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
}

export default LocalStorageService;

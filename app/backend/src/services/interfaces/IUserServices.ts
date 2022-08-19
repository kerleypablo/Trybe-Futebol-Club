export interface IUserServices<T> {
  Autenticate(login: T): Promise<string>;
}

export interface IUserServices<T> {
  generateToken(login: T): Promise<string>;
}

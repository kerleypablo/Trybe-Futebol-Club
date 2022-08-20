export interface IUserServices<T> {
  generateToken(login: T): Promise<string>;
  verifyToken(token: string): Promise< T | boolean>;
}

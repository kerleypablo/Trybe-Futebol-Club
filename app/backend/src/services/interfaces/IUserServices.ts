export default interface IUserServices<T> {
  Autenticate(login: T): Promise<T>;
}

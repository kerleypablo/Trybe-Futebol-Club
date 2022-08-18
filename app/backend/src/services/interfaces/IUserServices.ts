export default interface IUserServices<T> {
  find(): Promise<T>;
  Autenticate(): Promise<T>;
}

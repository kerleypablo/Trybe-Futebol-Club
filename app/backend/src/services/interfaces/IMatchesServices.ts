export default interface IMatchesServices<T> {
  getAllMatches(): Promise<T[]>;
}

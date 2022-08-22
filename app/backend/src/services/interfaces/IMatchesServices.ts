export default interface IMatchesServices<T> {
  getAllMatches(): Promise<T[]>;
  getAllMatchesInProgress(): Promise<T[]>;
  getAllMatchesNotInProgress(): Promise<T[]>;
}

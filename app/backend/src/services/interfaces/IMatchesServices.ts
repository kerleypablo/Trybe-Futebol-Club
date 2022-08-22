export default interface IMatchesServices<T> {
  getAllMatches(): Promise<T[]>;
  getAllMatchesInProgress(): Promise<T[]>;
  getAllMatchesNotInProgress(): Promise<T[]>;
  creatMatch(match: T): Promise<T>;
  checkTeam(id: number): Promise<boolean>
}

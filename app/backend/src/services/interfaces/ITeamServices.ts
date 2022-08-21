export interface ITeamServices<T> {
  getAllTeams(): Promise<T[]>;
}

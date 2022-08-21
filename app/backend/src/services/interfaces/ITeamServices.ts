export interface ITeamServices<T> {
  getAllTeams(): Promise<T[]>;
  getTeambyId(id: string): Promise<T>
}

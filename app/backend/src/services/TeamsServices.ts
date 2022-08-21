import Team from '../database/models/Team';
import { ITeam } from '../Interfaces/ITeam';

export default class TeamsServices {
  public static async getAllTeams(): Promise<ITeam[]> {
    const teamsResult = await Team.findAll();
    return teamsResult;
  }
}

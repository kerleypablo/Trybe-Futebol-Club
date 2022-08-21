import { ITeam } from '../Interfaces/ITeam';
import Team from '../database/models/Team';
import { ITeamServices } from './interfaces/ITeamServices';

export default class TeamsServices implements ITeamServices<ITeam> {
  team: string;
  async getAllTeams(): Promise<ITeam[]> {
    const allTeam = await Team.findAll();
    this.team = '';
    return allTeam as ITeam[];
  }
}

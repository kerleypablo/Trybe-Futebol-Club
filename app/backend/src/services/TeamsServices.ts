import { ITeam } from '../Interfaces/ITeam';
import Team from '../database/models/Team';
import { ITeamServices } from './interfaces/ITeamServices';

export default class TeamsServices implements ITeamServices<ITeam> {
  team: string;
  ids: string;
  async getAllTeams(): Promise<ITeam[]> {
    const allTeam = await Team.findAll();
    this.team = '';
    return allTeam as ITeam[];
  }

  async getTeambyId(id: string): Promise<ITeam> {
    const teamResult = await Team.findOne({ where: { id } });
    this.ids = id;
    return teamResult as ITeam;
  }
}

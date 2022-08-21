import { Response, Request } from 'express';
import { ITeam } from '../Interfaces/ITeam';
import { ITeamServices } from '../services/interfaces/ITeamServices';

export default class TeamController {
  constructor(private teamservices: ITeamServices<ITeam>) { }
  getAllTeams = async (req: Request, res: Response) => {
    try {
      const allTeams = await this.teamservices.getAllTeams();
      return res.status(200).json(allTeams);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  getTeambyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teamResult = await this.teamservices.getTeambyId(id);
    if (!teamResult) return res.status(401).json({ message: 'Team not found' });
    return res.status(200).json(teamResult);
  };
}

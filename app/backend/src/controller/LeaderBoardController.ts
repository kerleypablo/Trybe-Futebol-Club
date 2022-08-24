import { Response, Request } from 'express';
import { IleaderBoard } from '../Interfaces/ILeaderBoard';
import IleaderBoardServices from '../services/interfaces/ILeaderBoardServices';

export default class LeaderBoardController {
  constructor(private leaderBoardervices: IleaderBoardServices<IleaderBoard>) { }
  getAllTeams = async (req: Request, res: Response) => {
    try {
      const allTeams = await this.leaderBoardervices.getTeamsInfoBoardHome();
      return res.status(200).json(allTeams);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
}

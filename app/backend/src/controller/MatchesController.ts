import { Response, Request } from 'express';
import { IMatches } from '../Interfaces/IMatches';
import IMatchesServices from '../services/interfaces/IMatchesServices';

export default class MatchesController {
  constructor(private matchesservices: IMatchesServices<IMatches>) { }
  getAllMatches = async (req: Request, res: Response) => {
    try {
      const allMatch = await this.matchesservices.getAllMatches();
      return res.status(200).json(allMatch);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
}

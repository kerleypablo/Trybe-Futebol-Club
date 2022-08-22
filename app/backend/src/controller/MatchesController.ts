import { Response, Request } from 'express';
import { IMatches } from '../Interfaces/IMatches';
import IMatchesServices from '../services/interfaces/IMatchesServices';

export default class MatchesController {
  constructor(private matchesservices: IMatchesServices<IMatches>) { }
  getAllMatches = async (req: Request, res: Response) => {
    const { InProgress } = req.query;
    try {
      console.log(InProgress);
      if (InProgress === 'true') {
        const allMatchInProgress = await this.matchesservices.getAllMatchesInProgress();
        return res.status(200).json(allMatchInProgress);
      } if (InProgress === 'false') {
        const allMatchNotInProgress = await this.matchesservices.getAllMatchesNotInProgress();
        return res.status(200).json(allMatchNotInProgress);
      }
      const allMatch = await this.matchesservices.getAllMatches();
      return res.status(200).json(allMatch);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
}

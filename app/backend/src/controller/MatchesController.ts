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

  creatMatches = async (req: Request, res: Response) => {
    try {
      const { homeTeam, awayTeam } = req.body;
      if (homeTeam === awayTeam) {
        return res.status(401)
          .json({ message: 'It is not possible to create a match with two equal teams' });
      }
      const checkTeam1 = await this.matchesservices.checkTeam(homeTeam);
      if (!checkTeam1) return res.status(404).json({ message: 'There is no team with such id!' });
      const checkeTeam2 = await this.matchesservices.checkTeam(awayTeam);
      if (!checkeTeam2) return res.status(404).json({ message: 'There is no team with such id!' });
      const newMatch = await this.matchesservices.creatMatch(req.body);
      return res.status(201).json(newMatch);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
}

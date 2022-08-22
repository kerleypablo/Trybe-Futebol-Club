import Teams from '../database/models/Team';
import Matches from '../database/models/Matches';
import ImatchesServices from './interfaces/IMatchesServices';
import { IMatches } from '../Interfaces/IMatches';

export default class MatchesServices implements ImatchesServices<IMatches> {
  matches: string;
  async getAllMatches(): Promise<IMatches[]> {
    const allMatch = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    this.matches = '';
    return allMatch;
  }
}

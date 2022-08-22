import Teams from '../database/models/Team';
import Matches from '../database/models/Matches';
import ImatchesServices from './interfaces/IMatchesServices';
import { IMatches } from '../Interfaces/IMatches';

export default class MatchesServices implements ImatchesServices<IMatches> {
  matches: string;
  async getAllMatches(): Promise<IMatches[]> {
    console.log('all');
    const allMatch = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    this.matches = '';
    return allMatch;
  }

  async getAllMatchesInProgress(): Promise<IMatches[]> {
    console.log('inpro');
    const allMatchInProgress = await Matches.findAll({
      where: { inProgress: true },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    this.matches = '';
    return allMatchInProgress;
  }

  async getAllMatchesNotInProgress(): Promise<IMatches[]> {
    console.log('notIn');
    const allMatchInProgress = await Matches.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    this.matches = '';
    return allMatchInProgress;
  }

  async creatMatch(match: IMatches): Promise<IMatches> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const newMatch = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true });
    this.matches = '';
    return newMatch as IMatches;
  }

  async checkTeam(id: number): Promise<boolean> {
    this.matches = '';
    const checked = await Matches.findOne({ where: { id } });
    if (!checked) return false;
    return true;
  }
}

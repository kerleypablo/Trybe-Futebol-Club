import { IleaderBoard } from '../Interfaces/ILeaderBoard';
import Matches from '../database/models/Matches';
import { IMatches } from '../Interfaces/IMatches';
import IleaderBoardServices from './interfaces/ILeaderBoardServices';

export default class LeaderBoardServices implements IleaderBoardServices<IleaderBoard> {
  teste: string;
  async getMatchsFineshed(): Promise<IMatches[]> {
    const matches = await Matches.findAll({ where: { inProgress: false } });
    this.teste = '';
    return matches as IMatches[];
  }
}

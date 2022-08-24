import { IMatchesInfo } from '../Interfaces/IMatches';
import IleaderBoardServices from './interfaces/ILeaderBoardServices';
import MatchesServices from './MatchsServices';
import { PointsCalculateHome } from '../Utils/Boardservices';
import { IleaderBoard } from '../Interfaces/ILeaderBoard';

export default class LeaderBoardServices implements IleaderBoardServices<IleaderBoard> {
  private matchservices: MatchesServices = new MatchesServices();

  async getTeamsInfoBoardHome(): Promise<IleaderBoard[]> {
    const matches = await this.matchservices.getAllMatchesNotInProgress();
    const boarder = PointsCalculateHome(matches as IMatchesInfo[]);
    boarder.sortByPoints();
    console.log(boarder.board);
    return boarder.board;
  }
}

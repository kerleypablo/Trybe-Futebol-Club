import { IMatchesInfo } from '../Interfaces/IMatches';
import IleaderBoardServices from './interfaces/ILeaderBoardServices';
import MatchesServices from './MatchsServices';
import { pointsCalculateaway, pointsCalculateHome } from '../Utils/Boardservices';
import { IleaderBoard } from '../Interfaces/ILeaderBoard';

export default class LeaderBoardServices implements IleaderBoardServices<IleaderBoard> {
  private matchservices: MatchesServices = new MatchesServices();

  async getTeamsInfoBoardHome(): Promise<IleaderBoard[]> {
    const matches = await this.matchservices.getAllMatchesNotInProgress();
    const boarder = pointsCalculateHome(matches as IMatchesInfo[]);
    boarder.sortByPoints();
    console.log(boarder.board);
    return boarder.board;
  }

  async getTeamsInfoBoardAway(): Promise<IleaderBoard[]> {
    const matches = await this.matchservices.getAllMatchesNotInProgress();
    const boarder = pointsCalculateaway(matches as IMatchesInfo[]);
    boarder.sortByPoints();
    console.log(boarder.board);
    return boarder.board;
  }
}

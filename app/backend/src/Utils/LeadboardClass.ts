import { IleaderBoard } from '../Interfaces/ILeaderBoard';
import TimeInfo from './classTime';

export default class LeadboradClass {
  board: IleaderBoard[];

  constructor() {
    this.board = [];
  }

  public checkboard = (infotime : TimeInfo) => {
    if (this.board.length === 0) {
      this.board.push(infotime);
    } else {
      this.checkduplicate(infotime);
    }
  };

  private checkduplicate = (infotime : TimeInfo) => {
    let rep = 0;
    this.board.forEach((times) => {
      console.log(times.name);
      console.log(infotime.name);
      if (times.name === infotime.name) {
        rep += 1;
      }
    });
    if (rep > 0) {
      console.log('nao entrou');
    } else {
      this.board.push(infotime);
    }
  };

  public sortByPoints = () => {
    this.board.sort((a: IleaderBoard, b: IleaderBoard) => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      if (a.goalsOwn !== b.goalsOwn) return b.goalsOwn - a.goalsOwn;

      return 0;
    });
  };
}

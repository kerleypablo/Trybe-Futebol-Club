import { IleaderBoard } from '../Interfaces/ILeaderBoard';
import { IMatchesInfo } from '../Interfaces/IMatches';

export default class TimeInfo implements IleaderBoard {
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: string;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = '';
  }

  public procurarjogosCasa(matchs: IMatchesInfo[]) {
    matchs.forEach((jogo) => {
      if (jogo.teamHome.teamName === this.name) {
        this.totalGames += 1;
        if (jogo.teamHome.teamName === this.name) {
          this.pontosDoJogoTimeCasa(jogo);
          this.aproveitamento();
        }
      }
    });
  }

  public procurarjogosFora(matchs: IMatchesInfo[]) {
    matchs.forEach((jogo) => {
      if (jogo.teamAway.teamName === this.name) {
        this.totalGames += 1;
      }
      if (jogo.teamAway.teamName === this.name) {
        this.pontosDoJogoTimefora(jogo);
        this.aproveitamento();
      }
    });
  }

  private pontosDoJogoTimeCasa(jogo: IMatchesInfo) {
    if (jogo.homeTeamGoals > jogo.awayTeamGoals) {
      this.totalVictories += 1;
      this.goalsFavor += jogo.homeTeamGoals;
      this.totalPoints += 3;
      this.goalsOwn += jogo.awayTeamGoals;
    }
    if (jogo.homeTeamGoals < jogo.awayTeamGoals) {
      this.totalLosses += 1;
      this.goalsOwn += jogo.awayTeamGoals;
      this.goalsFavor += jogo.homeTeamGoals;
    }
    if (jogo.homeTeamGoals === jogo.awayTeamGoals) {
      this.goalsFavor += jogo.homeTeamGoals;
      this.goalsOwn += jogo.awayTeamGoals;
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
  }

  private pontosDoJogoTimefora(jogo: IMatchesInfo) {
    if (jogo.homeTeamGoals < jogo.awayTeamGoals) {
      this.totalVictories += 1;
      this.goalsFavor += jogo.awayTeamGoals;
      this.totalPoints += 3;
      this.goalsOwn += jogo.homeTeamGoals;
    }
    if (jogo.homeTeamGoals > jogo.awayTeamGoals) {
      this.totalLosses += 1;
      this.goalsOwn += jogo.homeTeamGoals;
      this.goalsFavor += jogo.awayTeamGoals;
    }
    if (jogo.homeTeamGoals === jogo.awayTeamGoals) {
      this.goalsFavor += jogo.awayTeam;
      this.goalsOwn += jogo.homeTeamGoals;
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
  }

  public aproveitamento() {
    const ap = ((this.totalPoints / (this.totalGames * 3)) * 100);
    this.efficiency = ap.toFixed(2);
    const balance = this.goalsFavor - this.goalsOwn;
    this.goalsBalance = balance;
  }
}

import { IMatchesInfo } from '../Interfaces/IMatches';
import TimeInfo from './classTime';
import LeadboradClass from './LeadboardClass';

export const pointsCalculateHome = (matchs: IMatchesInfo[]) => {
  const result = new LeadboradClass();
  matchs.forEach((jogo) => {
    const time1 = new TimeInfo(jogo.teamHome.teamName);
    time1.procurarjogosCasa(matchs);
    result.checkboard(time1);
  });
  return result;
};

export const pointsCalculateaway = (matchs: IMatchesInfo[]) => {
  const result = new LeadboradClass();
  matchs.forEach((jogo) => {
    const time2 = new TimeInfo(jogo.teamAway.teamName);
    time2.procurarjogosFora(matchs);
    result.checkboard(time2);
  });
  return result;
};

export default { pointsCalculateHome, pointsCalculateaway };

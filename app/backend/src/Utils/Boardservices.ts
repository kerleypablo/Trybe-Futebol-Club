import { IMatchesInfo } from '../Interfaces/IMatches';
import TimeInfo from './classTime';
import LeadboradClass from './LeadboardClass';

export const PointsCalculateHome = (matchs: IMatchesInfo[]) => {
  const result = new LeadboradClass();
  matchs.forEach((jogo) => {
    const time1 = new TimeInfo(jogo.teamHome.teamName);
   // const time2 = new TimeInfo(jogo.teamAway.teamName);
    time1.procurarjogosCasa(matchs);
    result.checkboard(time1);
   // time2.procurarjogos(matchs);
   // result.checkboard(time2);
  });
  return result;
};

export default PointsCalculate;

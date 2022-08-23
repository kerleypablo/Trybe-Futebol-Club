import UserController from '../controller/userContreoller';
import UserServices from '../services/UserServices';
import TeamController from '../controller/TeamController';
import TeamsServices from '../services/TeamsServices';
import MatchesController from '../controller/MatchesController';
import MatchesServices from '../services/MatchsServices';
import LeaderBoardController from '../controller/LeaderBoardController';
import LeaderBoardServices from '../services/LeaderBoardSevices';

const userServices = new UserServices();
export const userController = new UserController(userServices);
const temServices = new TeamsServices();
export const teamController = new TeamController(temServices);
const matchesServices = new MatchesServices();
export const matchesController = new MatchesController(matchesServices);
const leaderBoardServices = new LeaderBoardServices();
export const leaderBoardController = new LeaderBoardController(leaderBoardServices);

export default { userController, teamController, matchesController, leaderBoardController };

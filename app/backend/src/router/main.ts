import UserController from '../controller/userContreoller';
import UserServices from '../services/UserServices';
import TeamController from '../controller/TeamController';
import TeamsServices from '../services/TeamsServices';

const userServices = new UserServices();
export const userController = new UserController(userServices);
const temServices = new TeamsServices();
export const teamController = new TeamController(temServices);

export default { userController, teamController };

import UserController from '../controller/userContreoller';
import UserServices from '../services/UserServices';

const userServices = new UserServices();
const userController = new UserController(userServices);

export default userController;

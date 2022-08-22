import { Router } from 'express';
import { matchesController } from './main';
import ValidateLogin from '../middlewares/loginValidateMiddleware';

const user = Router();
const validateLogin = new ValidateLogin();
user.get('/matches', matchesController.getAllMatches);
user.post('/matches', validateLogin.verifyToken, matchesController.creatMatches);

export default user;

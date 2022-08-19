import { Router } from 'express';
import userController from './main';
import ValidateLogin from '../middlewares/loginValidateMiddleware';

const user = Router();

user.post('/login', ValidateLogin.login, userController.Autenticate);

export default user;

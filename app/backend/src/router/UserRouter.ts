import { Router } from 'express';
import userController from './main';

const user = Router();

user.post('/login', userController.Autenticate);

export default user;

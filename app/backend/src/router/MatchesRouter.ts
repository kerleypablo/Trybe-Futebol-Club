import { Router } from 'express';
import { matchesController } from './main';
import ValidateLogin from '../middlewares/loginValidateMiddleware';

const matches = Router();
const validateLogin = new ValidateLogin();

matches.get('/matches', matchesController.getAllMatches);
matches.post('/matches', validateLogin.verifyToken, matchesController.creatMatches);
matches.patch(
  '/matches/:id/finish',
  validateLogin.verifyToken,
  matchesController.updateMacthesProgres,
);
matches.patch('/matches/:id', validateLogin.verifyToken, matchesController.updateGoals);

export default matches;

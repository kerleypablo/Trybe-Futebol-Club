import { Router } from 'express';
import { matchesController } from './main';

const user = Router();

user.get('/matches', matchesController.getAllMatches);

export default user;

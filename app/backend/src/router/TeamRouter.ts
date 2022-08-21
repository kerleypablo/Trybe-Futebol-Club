import { Router } from 'express';
import { teamController } from './main';

const user = Router();

user.get('/teams', teamController.getAllTeams);

export default user;

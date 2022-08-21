import { Router } from 'express';
import { teamController } from './main';

const user = Router();

user.get('/teams', teamController.getAllTeams);
user.get('/teams/:id', teamController.getTeambyId);

export default user;

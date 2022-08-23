import { Router } from 'express';
import { teamController } from './main';

const teams = Router();

teams.get('/teams', teamController.getAllTeams);
teams.get('/teams/:id', teamController.getTeambyId);

export default teams;

import { Router } from 'express';
import { leaderBoardController } from './main';

const leaderBoard = Router();

leaderBoard.get('/leaderboard/home', leaderBoardController.getAllTeams);

export default leaderBoard;

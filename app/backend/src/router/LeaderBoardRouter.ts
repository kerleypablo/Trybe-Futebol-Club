import { Router } from 'express';
import { leaderBoardController } from './main';

const leaderBoard = Router();

leaderBoard.get('/leaderboard/home', leaderBoardController.getAllTeamshome);
leaderBoard.get('/leaderboard/away', leaderBoardController.getAllTeamsaway);

export default leaderBoard;

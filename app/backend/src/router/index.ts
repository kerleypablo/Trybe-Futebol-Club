import { Router } from 'express';
import user from './UserRouter';
import team from './TeamRouter';
import matches from './MatchesRouter';
import leaderBoard from './LeaderBoardRouter';

const router = Router();

router.use(user);
router.use(team);
router.use(matches);
router.use(leaderBoard);

export default router;

import { Router } from 'express';
import user from './UserRouter';
import team from './TeamRouter';
import matches from './MatchesRouter';

const router = Router();

router.use(user);
router.use(team);
router.use(matches);

export default router;

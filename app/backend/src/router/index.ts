import { Router } from 'express';
import user from './UserRouter';
import team from './TeamRouter';

const router = Router();

router.use(user);
router.use(team);

export default router;

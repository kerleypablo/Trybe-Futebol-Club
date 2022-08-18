import { Router } from 'express';
import user from './UserRouter';

const router = Router();

router.use(user);

export default router;

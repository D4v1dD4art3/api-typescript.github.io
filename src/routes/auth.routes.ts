import { Router } from 'express';
import UserCtrl from '../controllers/user.controller';
const router = Router();

router.post('/signup', UserCtrl.signUp);
router.post('/signin', UserCtrl.signIn);

export default router;

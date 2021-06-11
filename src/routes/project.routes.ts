import { Request, Response, Router } from 'express';
import passport from 'passport';
import {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} from '../controllers/project.controller';
const router = Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createProject
);
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateProject
);
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  deleteProject
);

export default router;

import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';
import passportMiddleware from './middlewares/passport';

import AuthRoutes from './routes/auth.routes';
import projectRoutes from './routes/project.routes';
import { middleware } from './middlewares/errors';
// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(middleware);

// routes
app.get('/', (req, res) => {
  res.send(`The API is at http://localhost:${app.get('port')}`);
});

app.use(AuthRoutes);
app.use('/api/projects', projectRoutes);

export default app;

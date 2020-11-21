import { Router } from 'express';
import usersRouter from './users.routes';
import repositoriesRouter from './repositories.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/repositories', repositoriesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

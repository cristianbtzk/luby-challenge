import { Router } from 'express';
import usersRouter from './users.routes';
import repositoriesRouter from './repositories.routes';
import sessionsRouter from './sessions.routes';
import followsRouter from './follows.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/repositories', repositoriesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/follows', followsRouter);

export default routes;

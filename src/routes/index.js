import { Router } from 'express';
import usersRouter from './users.routes';
import repositoriesRouter from './repositories.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/repositories', repositoriesRouter);

export default routes;

import { Router } from 'express';
import RepositoriesController from '../controllers/RepositoriesController';

const usersRouter = Router();

usersRouter.post('/', RepositoriesController.create);
/* usersRouter.get('/:user_id', UsersController.show);
usersRouter.delete('/:user_id', UsersController.delete); */

export default usersRouter;

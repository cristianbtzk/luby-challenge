import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/', UsersController.create);
usersRouter.get('/:user_id', UsersController.show);
usersRouter.delete('/:user_id', UsersController.delete);

export default usersRouter;

import { Router } from 'express';
import FollowController from '../controllers/FollowController';

const followsRouter = Router();

followsRouter.post('/', FollowController.create);
// usersRouter.get('/:user_id', UsersController.show);
followsRouter.delete('/:follow_id', FollowController.delete);

export default followsRouter;

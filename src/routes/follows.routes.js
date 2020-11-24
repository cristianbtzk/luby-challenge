import { Router } from 'express';
import FollowController from '../controllers/FollowController';

const followsRouter = Router();

followsRouter.post('/', FollowController.create);
followsRouter.get('/:user_id', FollowController.index);
followsRouter.delete('/:follow_id', FollowController.delete);

export default followsRouter;

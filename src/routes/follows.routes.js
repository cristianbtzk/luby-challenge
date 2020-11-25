import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FollowController from '../controllers/FollowController';

const followsRouter = Router();

followsRouter.post('/', celebrate({
  [Segments.BODY]: {
    followed_id: Joi.string().uuid().required(),
    follower_id: Joi.string().uuid().required(),
  },
}), FollowController.create);
followsRouter.get('/:user_id', FollowController.index);
followsRouter.delete('/:follow_id', FollowController.delete);

export default followsRouter;

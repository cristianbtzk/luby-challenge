import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    avatar: Joi.string().required(),
    username: Joi.string().required(),
    bio: Joi.string().required(),
  },
}), UsersController.create);
usersRouter.get('/:user_id', UsersController.show);
usersRouter.delete('/:user_id', UsersController.delete);

export default usersRouter;

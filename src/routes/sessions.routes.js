import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', celebrate({
  [Segments.BODY]: {
    user_id: Joi.string().uuid().required(),
  },
}), SessionsController.create);

export default sessionsRouter;

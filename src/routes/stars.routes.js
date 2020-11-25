import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import StarsController from '../controllers/StarsController';

const starsRouter = Router();

starsRouter.post('/', celebrate({
  [Segments.BODY]: {
    user_id: Joi.string().uuid().required(),
    repository_id: Joi.string().uuid().required(),
  },
}), StarsController.create);
starsRouter.delete('/:star_id', StarsController.delete);

export default starsRouter;

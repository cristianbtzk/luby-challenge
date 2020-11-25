import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import RepositoriesController from '../controllers/RepositoriesController';

const repositoriesRouter = Router();

repositoriesRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    public: Joi.boolean(),
    user_id: Joi.string().uuid().required(),
  },
}), RepositoriesController.create);
repositoriesRouter.get('/:repository_id', RepositoriesController.show);
repositoriesRouter.get('/user/:user_id', RepositoriesController.index);
repositoriesRouter.delete('/:repository_id', RepositoriesController.delete);

export default repositoriesRouter;

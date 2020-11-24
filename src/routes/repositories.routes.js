import { Router } from 'express';
import RepositoriesController from '../controllers/RepositoriesController';

const repositoriesRouter = Router();

repositoriesRouter.post('/', RepositoriesController.create);
repositoriesRouter.get('/:repository_id', RepositoriesController.show);
repositoriesRouter.get('/user/:user_id', RepositoriesController.index);
repositoriesRouter.delete('/:repository_id', RepositoriesController.delete);

export default repositoriesRouter;
